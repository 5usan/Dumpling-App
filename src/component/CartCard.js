import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';
import Button from './common/Button';

const CartCard = ({image, title, price, id}) => {
  return (
    <View style={styles.cartCard}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>Rs. {price}</Text>
        <View style={styles.functionalityWrapper}>
          <View style={styles.cartItem}>
            <View style={styles.numOfItem}>
              <Button name={'-'} onPress={() => null} />
              <Text
                style={{
                  marginHorizontal: 5,
                  color: stylesConstant.color.primaryColor,
                }}>
                {10}
              </Text>
              <Button name={'+'} onPress={() => null} />
            </View>
            <Button name={'remove'} onPress={() => null} />
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
  },
  imageWrapper: {
    width: '40%',
    height: 100,
    padding: 10,
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
  },
  numOfItem: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
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
