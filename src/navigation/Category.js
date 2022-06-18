import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {allCategories} from '../assets/constants';
import CategoryCard from '../component/CategoryCard';
import {stylesConstant} from '../styles/abstracts/abstracts';
import {useGetAllCategoryQuery} from '../services/dumplingApi';

const Category = ({navigation}) => {
  const {data, error, isLoading} = useGetAllCategoryQuery();
  const renderItem = ({index, item}) => (
    <View style={styles.oneCategory}>
      <CategoryCard
        name={item.name}
        image={allCategories[index]}
        onPress={() => {
          navigation.navigate('Search', {value: item.name});
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
        {data && (
          <FlatList
            data={data.data}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            numColumns="2"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 115}}
          />
        )}
        {isLoading && (
          <ActivityIndicator
            size={'large'}
            color={stylesConstant.color.btnColor}
          />
        )}
        {error && <Text style={styles.error}>An Error Occured!</Text>}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  headerWrapper: {
    height: '6.6%',
    minHeight: 55,
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
  error: {
    color: stylesConstant.color.inActiveColor,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});
