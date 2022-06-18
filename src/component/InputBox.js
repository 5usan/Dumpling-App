import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';

const InputBox = ({
  value,
  valueSet,
  placeholder,
  label,
  error = false,
  validator,
  errorMessage,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={{...styles.inputBox, ...(error ? styles.errorBox : {})}}
        value={value}
        onChangeText={value => {
          valueSet(value);
          validator(value);
        }}
        placeholder={placeholder}
        placeholderTextColor={stylesConstant.color.inActiveColor}
        onEndEditing={() => valueSet(value.trim())}
      />
      {error && <Text style={styles.error}>{errorMessage}</Text>}
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
  errorBox: {
    borderBottomColor: stylesConstant.color.error,
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
  error: {
    color: stylesConstant.color.error,
    fontSize: 11,
    position: 'absolute',
    top: '100%',
    marginHorizontal: 2,
  },
});
