import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, ScrollView} from 'react-native';
import CheckoutForm from '../../component/CheckoutForm';
import ScreenWrapper from '../../containers/ScreenWrapper';
import {stylesConstant} from '../../styles/abstracts/abstracts';
import {useSelector} from 'react-redux';

const Checkout = ({navigation}) => {
  const [showForm, showFormSet] = useState(false);
  const {cart, totalAmount} = useSelector(state => state.cart);
  return (
    <>
      <ScreenWrapper>
        <ScrollView style={styles.cardContainer}>
          <View style={styles.topTextWrapper}>
            <Text style={styles.textBold}> Receipt </Text>
          </View>
          <View style={styles.billContainer}>
            {cart.map(obj => (
              <View key={obj._id} style={styles.item}>
                <Text style={styles.itemName} numberOfLines={1}>
                  {obj.name.toUpperCase().trim()}
                </Text>
                <Text style={styles.itemPrice}>
                  ( {obj.quantity} * {obj.price})
                </Text>
                <Text style={styles.itemPrice}>
                  Rs. {obj.quantity * obj.price}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.divider}></View>
          <View style={styles.billFooter}>
            <View style={styles.item}>
              <Text style={styles.total}> {'Total'} </Text>
              <Text style={styles.total}> Rs. {totalAmount}</Text>
            </View>
          </View>
        </ScrollView>
      </ScreenWrapper>
      <View style={styles.buttonWrapper}>
        <Button
          title="Purchase Order"
          color={stylesConstant.color.btnColor}
          onPress={() => showFormSet(true)}
        />
      </View>
      {showForm && (
        <CheckoutForm
          cancelHandler={() => showFormSet(false)}
          submitHandler={() => {
            showFormSet(false);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topTextWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: '0%',
    marginTop: '6%',
  },
  cardContainer: {
    marginHorizontal: '5%',
    marginTop: 0,
    marginBottom: '10%',
  },
  textBold: {
    fontWeight: 'bold',
    color: stylesConstant.color.primaryColor,
    marginBottom: 5,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: '.4%',
    left: '5%',
    right: '5%',
  },
  billContainer: {
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    borderRadius: 10,
    minHeight: 100,
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  },
  item: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  itemName: {
    color: stylesConstant.color.primaryColor,
    width: '50%',
    overflow: 'hidden',
  },
  itemPrice: {
    color: stylesConstant.color.inActiveColor,
    width: '20%',
  },
  total: {
    color: stylesConstant.color.primaryColor,
    fontWeight: 'bold',
    marginRight: '8%',
  },
  divider: {
    borderColor: stylesConstant.color.inActiveColor,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 20,
  },
  billFooter: {
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Checkout;
