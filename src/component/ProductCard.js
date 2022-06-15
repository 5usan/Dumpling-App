import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {stylesConstant} from '../styles/abstracts/abstracts';

const ProductCard = ({name, price, image, onPress}) => {
  return (
    <Pressable style={styles.cardWrapper} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.cardDescription}>
        <Text style={styles.detail}>{name}</Text>
        <Text style={styles.detail}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: stylesConstant.size.productCardWidth,
    height: stylesConstant.size.productCardHeight,
    margin: 4,
  },
  image: {
    height: 110,
    width: '100%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardDescription: {
    width: '100%',
    flexDirection: 'column',
  },
  detail: {
    fontSize: 15,
    fontWeight: '300',
    color: stylesConstant.color.primaryColor,
    borderWidth: 0.2,
    borderTopWidth: 0,
    borderColor: '#e3e3e3',
    padding: 6,
    paddingLeft: 5,
    letterSpacing: 0.7,
  },
});
