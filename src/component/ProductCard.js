import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {stylesConstant} from '../styles/abstracts/abstracts';

const ProductCard = () => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1647999019630-dabe1a837693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.cardDescription}>
        <Text style={styles.detail}>Jhol Momo</Text>
        <Text style={styles.detail}>$60</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: Dimensions.get('window').width,
    height: stylesConstant.size.productCardHeight,
    width: stylesConstant.size.productCardWidth,
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 8,
  },
  image: {
    height: 110,
    width: '100%',
    borderRadius: 10,
  },
  cardDescription: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detail: {
    fontSize: 16,
    fontWeight: '700',
    color: stylesConstant.color.primaryColor,
  },
});
