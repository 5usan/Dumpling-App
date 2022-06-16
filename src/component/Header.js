import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';

const Header = ({heading}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    color: stylesConstant.color.primaryColor,
    fontSize: stylesConstant.textSize.headers,
    fontWeight: 'bold',
  },
});

export default Header;
