import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import SearchBar from '../component/SearchBar';
import {allProducts} from '../assets/constants';
import ProductCard from '../component/ProductCard';
import {stylesConstant} from '../styles/abstracts/abstracts';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ProductDetails from '../component/ProductDetails';
import {useGetAllProductQuery} from '../services/dumplingApi';

const Search = ({route}) => {
  const [searchShow, setSearchShow] = useState(false);
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const {data, error, isLoading} = useGetAllProductQuery();
  const [query, querySet] = useState('');
  useEffect(() => {
    querySet(route.params ? route.params.value : '');
  }, [route.params]);

  const filterItem = (data, query) => {
    if (query.trim() === '') return [...data];
    return data.filter(
      item =>
        item.name.includes(query) ||
        item.description.includes(query) ||
        item.category.name.includes(query),
    );
  };
  const renderItem = ({index, item}) => (
    <View style={styles.product}>
      <ProductCard
        name={item.name.trim()}
        image={allProducts[index]}
        price={item.price}
        onPress={() => {
          setShowSingleProduct(true);
          setSelectedProduct({...item, image: allProducts[index]});
        }}
      />
    </View>
  );

  const touchHandler = () => {
    setSearchShow(pre => !pre);
  };

  const handleSearch = value => {
    querySet(value.trim());
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
              value={query}
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
          {data &&
            (() => {
              let temp = filterItem(data.data, query);
              if (temp.length === 0)
                return (
                  <Text style={styles.error}>
                    Sorry, No Item Found For Your Query.
                  </Text>
                );
              return (
                <FlatList
                  data={temp}
                  renderItem={renderItem}
                  keyExtractor={item => item._id}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: '28%'}}
                />
              );
            })()}
          {isLoading && (
            <ActivityIndicator
              size={'large'}
              color={stylesConstant.color.btnColor}
            />
          )}
          {error && <Text style={styles.error}>An Error Occured!</Text>}
        </View>
      </View>
      {showSingleProduct && (
        <ProductDetails
          data={selectedProduct}
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
    minHeight: 55,
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
  error: {
    color: stylesConstant.color.inActiveColor,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
