import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, FlatList, StyleSheet, Text, Pressable} from 'react-native';
import SearchBar from '../component/SearchBar';
import {allProducts} from '../assets/constants';
import ProductCard from '../component/ProductCard';
import {stylesConstant} from '../styles/abstracts/abstracts';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchShow, setSearchShow] = useState(false);
  const renderItem = ({item}) => (
    <View>
      <ProductCard
        name={item.name}
        image={item.image}
        price={item.price}
        onPress={() => {
          console.log('a');
        }}
      />
    </View>
  );

  const touchHandler = () => {
    setSearchShow(pre => !pre);
  };

  const handleSearch = () => {
    setSearchShow(pre => !pre);
  };

  return (
    <>
      <View style={styles.headerWrapper}>
        {searchShow ? (
          <SearchBar
            placeholder={'Search by name,category here...'}
            touchHandler={touchHandler}
            valueSet={handleSearch}
          />
        ) : (
          <>
            <Text style={styles.header}>All Products</Text>
            <Pressable onPress={setSearchShow}>
              <FontAwesomeIcon
                icon={faSearch}
                color={stylesConstant.color.inActiveColor}
                size={18}
              />
            </Pressable>
          </>
        )}
      </View>

      <FlatList
        data={allProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 8,
    paddingHorizontal: 10,
  },
  header: {
    color: stylesConstant.color.primaryColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
