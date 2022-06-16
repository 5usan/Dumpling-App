import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({value, valueSet, placeholder, touchHandler}) => {
  const [input, inputSet] = useState(value);
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.inputBox}
        value={input}
        onChangeText={value => inputSet(value)}
        placeholder={placeholder}
        placeholderTextColor="grey"
        onBlur={() => valueSet(input.trim())}
      />
      <TouchableWithoutFeedback>
        <View style={styles.iconWrapper} onPress={touchHandler}>
          <FontAwesomeIcon icon={faSearch} color={'grey'} size={24} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    backgroundColor: 'white',
    shadowColor: 'black',
    borderRadius: 20,
    shadowRadius: 40,
  },
  inputBox: {
    width: '100%',
    paddingHorizontal: '10%',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    color: 'grey',
  },
  iconWrapper: {
    position: 'absolute',
    top: '26%',
    left: '90%',
    width: 24,
  },
});
