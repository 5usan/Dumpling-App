import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {stylesConstant} from '../styles/abstracts/abstracts';
import rating from '../assets/rating.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleArrowLeft,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({name, image, description, price, onPress}) => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: image}} style={styles.image} />
      <Pressable style={styles.back} onPress={onPress}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size={30} color="#8f8f8f" />
      </Pressable>
      <View style={styles.description}>
        <View style={styles.nameWithPrice}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Image source={rating} style={styles.rating} />
        <Text style={styles.desc}>{description}</Text>
        <Text style={styles.ingredients}>Ingredients</Text>
        <Text style={styles.desc}>
          Momos are made with maida (refined flour) which is the starchy part of
          the grain after the removal of its fibrous bran. Then, it is bleached
          with chemicals like Azodicarbonamide, chlorinegas, benzoyl peroxide,
          or other bleaches.
        </Text>
      </View>
      <View style={styles.dealing}>
        <Text style={styles.lowerPrice}>{price}</Text>
        <View style={styles.addToCart}>
          {count > 0 && (
            <Pressable onPress={() => setCount(pre => pre - 1)}>
              <FontAwesomeIcon icon={faMinus} size={25} color="#8f8f8f" />
            </Pressable>
          )}
          <Text style={styles.value}>{count}</Text>
          <Pressable onPress={() => setCount(pre => pre + 1)}>
            <FontAwesomeIcon icon={faPlus} size={25} color="#8f8f8f" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    borderRadius: 10,
    position: 'relative',
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  image: {
    height: '50%',
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  description: {
    padding: 20,
  },
  nameWithPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: stylesConstant.textSize.headers,
    color: stylesConstant.color.primaryColor,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  price: {
    fontSize: stylesConstant.textSize.headers,
    color: stylesConstant.color.primaryColor,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  desc: {
    fontSize: stylesConstant.textSize.headers,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'justify',
  },
  rating: {
    width: 60,
    height: 12,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: stylesConstant.textSize.headers,
    color: stylesConstant.color.primaryColor,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  dealing: {
    backgroundColor: stylesConstant.color.btnColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 10,
  },
  lowerPrice: {
    color: stylesConstant.color.secondaryColor,
    fontSize: 30,
    fontWeight: 'bold',
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: stylesConstant.color.secondaryColor,
    borderRadius: 15,
    padding: 10,
  },
  value: {
    fontSize: 25,
    paddingHorizontal: 10,
    color: stylesConstant.color.primaryColor,
  },
});
