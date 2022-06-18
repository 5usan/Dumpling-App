import React from 'react';
import {Image, StyleSheet, View, Text, TextInput} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';
import Button from './common/Button';
import {useDispatch} from 'react-redux';
import {
  adjustQuantity,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/slice/cartSlice';
const CartCard = ({data}) => {
  const {image, name, price} = data;
  const dispatch = useDispatch();

  return (
    <View style={styles.cartCard}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title} numberOfLines={2}>
          {name.trim()}
        </Text>
        <Text style={styles.price}>Rs. {price}</Text>
        <View style={styles.functionalityWrapper}>
          <View style={styles.cartItem}>
            <View style={styles.numOfItem}>
              <Button
                style={styles.btn}
                name={'-'}
                onPress={() => dispatch(decrementQuantity({...data}))}
              />
              <TextInput
                defaultValue={data.quantity.toString()}
                style={{
                  marginHorizontal: 5,
                  color: stylesConstant.color.primaryColor,
                  padding: 0,
                }}
                onEndEditing={e => {
                  dispatch(
                    adjustQuantity({
                      productId: data.productId,
                      quantity: e.nativeEvent.text,
                    }),
                  );
                }}
              />
              <Button
                style={styles.btn}
                name={'+'}
                onPress={() => dispatch(incrementQuantity({...data}))}
              />
            </View>
            <Button
              name={'remove'}
              onPress={() => dispatch(removeFromCart({...data}))}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartCard: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    marginVertical: 10,
    shadowColor: stylesConstant.color.inActiveColor,
    elevation: 10,
    shadowOffset: {width: 12, height: 12},
    borderRadius: 10,
    overflow: 'hidden',
  },
  btn: {
    backgroundColor: stylesConstant.color.btnColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  imageWrapper: {
    width: '40%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    height: 80,
    width: '55%',
    justifyContent: 'space-around',
    paddingRight: '5%',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  numOfItem: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: stylesConstant.textSize.headers,
    fontWeight: 'bold',
    color: stylesConstant.color.primaryColor,
  },
  price: {
    color: stylesConstant.color.inActiveColor,
  },
});
export default CartCard;
