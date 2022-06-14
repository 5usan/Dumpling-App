import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

const ScreenWrapper = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ScreenWrapper;
