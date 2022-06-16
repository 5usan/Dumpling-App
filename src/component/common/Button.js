import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {stylesConstant} from '../../styles/abstracts/abstracts';

const Button = ({name, style, onPress}) => {
  return (
    <View>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={[styles.btnText, style]}>{name.toUpperCase()}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: stylesConstant.color.btnColor,
    padding: 5,
    borderRadius: 5,
  },
  btnText: {
    color: stylesConstant.color.secondaryColor,
    fontWeight: '700',
    fontSize: stylesConstant.size.btnTextSize,
  },
});
