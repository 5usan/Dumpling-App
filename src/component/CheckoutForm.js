import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useCheckoutMutation} from '../services/dumplingApi';
import {stylesConstant} from '../styles/abstracts/abstracts';
import {
  addressValidator,
  contactValidator,
  emailValidator,
  nameValidator,
} from '../utils/formValidators';
import Button from './common/Button';
import InputBox from './InputBox';
import {useDispatch} from 'react-redux';
import {clearCart} from '../store/slice/cartSlice';

const CheckoutForm = ({submitHandler, cancelHandler}) => {
  const [formData, formDataSet] = useState({
    fullName: '',
    email: '',
    contact: '',
    address: '',
  });
  const [error, errorSet] = useState({
    fullName: false,
    email: false,
    contact: false,
    address: false,
  });
  const dispatch = useDispatch();

  const {cart} = useSelector(state => state.cart);

  const [checkoutSubmit] = useCheckoutMutation();

  const inputHandler = (value, name) => {
    formDataSet(pre => ({...pre, [name]: value}));
  };
  const validateName = value => {
    if (nameValidator(value)) {
      errorSet(pre => ({...pre, fullName: false}));
      return false;
    } else {
      errorSet(pre => ({...pre, fullName: true}));
      return true;
    }
  };
  const validateEmail = value => {
    if (emailValidator(value)) {
      errorSet(pre => ({...pre, email: false}));
      return false;
    } else {
      errorSet(pre => ({...pre, email: true}));
      return true;
    }
  };
  const validateContact = value => {
    if (contactValidator(value)) {
      errorSet(pre => ({...pre, contact: false}));
      return false;
    } else {
      errorSet(pre => ({...pre, contact: true}));
      return true;
    }
  };
  const validateAddress = value => {
    if (addressValidator(value)) {
      errorSet(pre => ({...pre, address: false}));
      return false;
    } else {
      errorSet(pre => ({...pre, address: true}));
      return true;
    }
  };
  const clearForm = () => {
    formDataSet({
      fullName: '',
      email: '',
      contact: '',
      address: '',
    });
    errorSet({
      fullName: false,
      email: false,
      contact: false,
      address: false,
    });
  };

  const submit = async () => {
    let errCnt = 0;
    let tempErr = {
      fullName: false,
      email: false,
      contact: false,
      address: false,
    };
    validateName(formData.fullName) && (tempErr.fullName = true);
    validateEmail(formData.email) && (tempErr.email = true);
    validateContact(formData.contact) && (tempErr.contact = true);
    validateAddress(formData.address) && (tempErr.address = true);

    for (let x in tempErr) {
      if (tempErr[x]) errCnt++;
    }
    if (errCnt === 0) {
      Alert.alert('Submitting your request');
      const response = await checkoutSubmit({
        orders: [
          ...cart.map(obj => ({
            productId: obj.productId,
            quantity: obj.quantity,
          })),
        ],
        username: formData.fullName,
        phone: formData.contact,
        address: formData.address,
        email: formData.email,
      });
      if (response.data) {
        clearForm();
        Alert.alert('Successfully received your order');
        submitHandler();
        dispatch(clearCart());
      } else {
        Alert.alert(response.error.data.Error);
      }
    }
  };
  return (
    <View style={styles.checkoutFormWrapper}>
      <View style={styles.checkoutForm}>
        <Text style={styles.formHeading}>
          Please fill this form so that we can contact you with your order.
        </Text>
        <InputBox
          label={'Full Name'}
          placeholder={'Please enter your full name...'}
          errorMessage={'Please Enter a valid name'}
          value={formData.fullName}
          valueSet={value => inputHandler(value, 'fullName')}
          validator={validateName}
          error={error.fullName}
        />
        <InputBox
          label={'Email Id'}
          placeholder={'Please enter your Email Id...'}
          errorMessage={'Please enter a valid email'}
          value={formData.email}
          valueSet={value => inputHandler(value, 'email')}
          validator={validateEmail}
          error={error.email}
        />
        <InputBox
          label={'Contact'}
          placeholder={'Please enter your Contact...'}
          errorMessage={'Please enter a valid contact'}
          value={formData.contact}
          valueSet={value => inputHandler(value, 'contact')}
          validator={validateContact}
          error={error.contact}
        />

        <InputBox
          label={'Address'}
          placeholder={'Please enter your Address...'}
          errorMessage={' Please enter a valid address'}
          value={formData.address}
          valueSet={value => inputHandler(value, 'address')}
          validator={validateAddress}
          error={error.address}
        />
        <View style={styles.buttonWrapper}>
          <Button name={'Order Now'} onPress={submit} />
          <View style={{width: '2%'}}></View>
          <Button name={'Cancel'} onPress={cancelHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutFormWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: stylesConstant.color.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutForm: {
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    shadowColor: stylesConstant.color.primaryColor,
    elevation: 10,
    marginHorizontal: '5%',
    padding: 20,
    minHeight: 400,
    zIndex: 2,
    borderRadius: 10,
    opacity: 1,
    width: '90%',
  },
  formHeading: {
    color: stylesConstant.color.inActiveColor,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

export default CheckoutForm;
