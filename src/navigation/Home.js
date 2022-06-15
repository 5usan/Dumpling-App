import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ProductCard from '../component/ProductCard';
import ScreenWrapper from '../containers/ScreenWrapper';

const Home = () => {
  return (
    <ScreenWrapper>
      <Text>Feature Momos</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', backgroundColor: 'orange'}}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
      <Text>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;
