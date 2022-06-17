import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {allCategories} from '../assets/constants';
import CategoryCard from '../component/CategoryCard';
import {stylesConstant} from '../styles/abstracts/abstracts';

const Category = () => {
  const renderItem = ({item}) => (
    <View style={styles.oneCategory}>
      <CategoryCard
        name={item.name}
        image={item.image}
        onPress={() => {
          console.log('a');
        }}
      />
    </View>
  );
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>All Categories</Text>
      </View>
      <View style={styles.category}>
        <FlatList
          data={allCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns="2"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 115}}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  headerWrapper: {
    height: '6.6%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 8,
  },
  header: {
    color: stylesConstant.color.primaryColor,
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: '4%',
  },
  category: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  oneCategory: {
    paddingTop: 8,
    marginHorizontal: 4,
  },
});
