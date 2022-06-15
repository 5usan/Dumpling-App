import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';

const ScreenWrapper = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.wrapper}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: stylesConstant.color.backgroundColor,
    minHeight: '100%',
  },
});
export default ScreenWrapper;
