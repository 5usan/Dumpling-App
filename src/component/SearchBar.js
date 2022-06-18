import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {stylesConstant} from '../styles/abstracts/abstracts';

const SearchBar = ({value, valueSet, placeholder, touchHandler}) => {
  const [input, inputSet] = useState('');
  useEffect(() => {
    inputSet(value);
  }, [value]);
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.inputBox}
        value={input}
        onChangeText={value => inputSet(value)}
        placeholder={placeholder}
        placeholderTextColor={stylesConstant.color.inActiveColor}
        onBlur={() => valueSet(input.trim())}
        onEndEditing={() => touchHandler(input.trim())}
      />
      <TouchableWithoutFeedback onPress={touchHandler}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon
            icon={faSearch}
            color={stylesConstant.color.inActiveColor}
            size={18}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    backgroundColor: stylesConstant.color.secondaryColor,
    shadowColor: stylesConstant.color.primaryColor,
    borderRadius: 20,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 80,
    elevation: 20,
    height: 42,
  },
  inputBox: {
    width: '100%',
    padding: 0,
    paddingHorizontal: '10%',
    paddingVertical: 6,
    borderColor: stylesConstant.color.secondaryColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    color: stylesConstant.color.primaryColor,
  },
  iconWrapper: {
    position: 'absolute',
    top: '31%',
    left: '90%',
    width: 18,
    height: 18,
  },
});
