import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';
import Button from './common/Button';
import InputBox from './InputBox';

const CheckoutForm = ({submitHandler, cancelHandler}) => {
  return (
    <View style={styles.checkoutFormWrapper}>
      <View style={styles.checkoutForm}>
        <Text style={styles.formHeading}>
          Please fill this form so that we can contact you with your order.
        </Text>
        <InputBox
          label={'Full Name'}
          placeholder={'Please enter your full name...'}
        />
        <InputBox
          label={'Email Id'}
          placeholder={'Please enter your Email Id...'}
        />
        <InputBox
          label={'Contact'}
          placeholder={'Please enter your Contact...'}
        />

        <InputBox
          label={'Address'}
          placeholder={'Please enter your Address...'}
        />
        <View style={styles.buttonWrapper}>
          <Button name={'Order Now'} onPress={submitHandler} />
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
