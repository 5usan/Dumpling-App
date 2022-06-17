import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, FlatList, StyleSheet, Text, Pressable} from 'react-native';
import SearchBar from '../component/SearchBar';
import {allProducts} from '../assets/constants';
import ProductCard from '../component/ProductCard';
import {stylesConstant} from '../styles/abstracts/abstracts';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ProductDetails from '../component/ProductDetails';

const Search = () => {
  const [searchShow, setSearchShow] = useState(false);
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const renderItem = ({item}) => (
    <View style={styles.product}>
      <ProductCard
        name={item.name}
        image={item.image}
        price={item.price}
        onPress={() => {
          setShowSingleProduct(true);
          setSelectedProduct(item);
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
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          {searchShow ? (
            <SearchBar
              placeholder={'Search by name, category here...'}
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
        <View style={styles.productWrapper}>
          <FlatList
            data={allProducts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: '28%'}}
          />
        </View>
      </View>
      {showSingleProduct && (
        <ProductDetails
          name={selectedProduct.name}
          image={selectedProduct.image}
          description={selectedProduct.description}
          price={selectedProduct.price}
          onPress={() => setShowSingleProduct(false)}
        />
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  headerWrapper: {
    height: '6.6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 8,
    paddingHorizontal: '4%',
  },
  header: {
    color: stylesConstant.color.primaryColor,
    fontSize: 22,
    fontWeight: '600',
  },

  productWrapper: {
    padding: '2%',
    paddingTop: 0,
  },

  product: {
    marginTop: 8,
    marginHorizontal: 8,
  },
});
