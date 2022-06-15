import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {stylesConstant} from '../styles/abstracts/abstracts';

const CategoryCard = ({name, image}) => {
  return (
    <Pressable>
      <ImageBackground
        source={{uri: image}}
        imageStyle={styles.img}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name.toUpperCase()}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  image: {
    width: stylesConstant.size.productCardWidth,
    height: 220,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  img: {
    borderRadius: 25,
  },

  textContainer: {
    backgroundColor: 'rgba(68, 68, 68, 0.6)',
    borderRadius: 50,
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
  },

  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
