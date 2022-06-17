import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';

const InputBox = ({value, valueSet, placeholder, label}) => {
  const [input, inputSet] = useState(value);
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputBox}
        value={input}
        onChangeText={value => inputSet(value)}
        placeholder={placeholder}
        placeholderTextColor={stylesConstant.color.inActiveColor}
        onBlur={() => valueSet(input.trim())}
      />
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginVertical: 10,
  },
  inputBox: {
    width: '100%',
    padding: 0,
    paddingHorizontal: '5%',
    paddingVertical: 6,
    borderBottomColor: stylesConstant.color.inActiveColor,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    color: stylesConstant.color.inActiveColor,
    backgroundColor: stylesConstant.color.cardBackgroundColor,
  },
  iconWrapper: {
    position: 'absolute',
    top: '31%',
    left: '90%',
    width: 18,
    height: 18,
  },
  label: {
    color: stylesConstant.color.inActiveColor,
    fontWeight: 'bold',
  },
});
