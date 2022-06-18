import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import CartCard from '../../component/CartCard';
import ScreenWrapper from '../../containers/ScreenWrapper';
import {stylesConstant} from '../../styles/abstracts/abstracts';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart} from '../../store/slice/cartSlice';

const CartItems = ({navigation}) => {
  const {cart, totalQuantity, totalAmount} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <ScreenWrapper>
        <ScrollView style={styles.cardContainer}>
          <View style={styles.topTextWrapper}>
            <Text style={styles.textBold}>
              Your Orders {totalQuantity > 0 && `(${totalQuantity})`}
            </Text>
            {totalQuantity > 0 && (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Are you Sure?',
                    'You want to Clear Cart',
                    [
                      {
                        text: 'Yes',
                        onPress: () => dispatch(clearCart()),
                      },
                      {
                        text: 'No',
                        style: 'cancel',
                      },
                    ],
                    {
                      cancelable: true,
                    },
                  );
                }}>
                <Text style={{color: stylesConstant.color.inActiveColor}}>
                  Clear
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {cart.map(data => (
            <CartCard key={data.productId} data={data} />
          ))}
          {cart.length === 0 && (
            <Text style={styles.error}>No Item Added.</Text>
          )}
        </ScrollView>
      </ScreenWrapper>
      {totalAmount > 0 && (
        <View style={styles.buttonWrapper}>
          <Button
            title={`Checkout (Rs. ${totalAmount})`}
            color={stylesConstant.color.btnColor}
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
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
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: '.4%',
    left: '5%',
    right: '5%',
  },
  error: {
    color: stylesConstant.color.inActiveColor,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default CartItems;
