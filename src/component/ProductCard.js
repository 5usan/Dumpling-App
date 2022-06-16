import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartPlus, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {stylesConstant} from '../styles/abstracts/abstracts';
import rating from '../assets/rating.png';

const ProductCard = ({name, price, image, onPress}) => {
  const [cartAdded, setCartAdded] = useState(false);
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.description}>
        <View style={styles.desc}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
          <Image source={rating} style={styles.rating} />
        </View>
        <View>
          <Pressable
            onPress={() => setCartAdded(pre => !pre)}
            style={styles.cart}>
            {!cartAdded ? (
              <FontAwesomeIcon icon={faCartPlus} color="#4f4f4f" size={28} />
            ) : (
              <FontAwesomeIcon
                icon={faCartShopping}
                color={stylesConstant.color.btnColor}
                size={28}
              />
            )}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 8,
    width: '100%',
  },
  image: {
    height: 100,
    width: 140,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  description: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '65%',
  },
  desc: {
    width: 150,
  },
  name: {
    fontSize: stylesConstant.textSize.headers,
    fontWeight: '700',
    color: stylesConstant.color.primaryColor,
    letterSpacing: 1,
  },
  price: {
    color: stylesConstant.color.primaryColor,
    letterSpacing: 1,
    fontWeight: '400',
    paddingTop: 5,
  },
  rating: {
    marginTop: 20,
    width: 60,
    height: 12,
  },
  cart: {
    zIndex: 1,
  },
});
