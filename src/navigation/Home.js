import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import ScreenWrapper from '../containers/ScreenWrapper';
import {featureProducts, categories} from '../assets/constants';
import {stylesConstant} from '../styles/abstracts/abstracts';
import CategoryCard from '../component/CategoryCard';
import Button from '../component/common/Button';
import SearchBar from '../component/SearchBar';
import FeatureProductCard from '../component/FeatureProductCard';
import {
  useGetAllCategoryQuery,
  useGetAllFeaturedProductQuery,
} from '../services/dumplingApi';
import ProductDetails from '../component/ProductDetails';

const Home = ({navigation}) => {
  const {
    data: featuredProductList,
    error: error1,
    isLoading: isLoading1,
  } = useGetAllFeaturedProductQuery();
  const {
    data: categoryList,
    error: error2,
    isLoading: isLoading2,
  } = useGetAllCategoryQuery();
  const [detailProduct, detailProductSet] = useState(null);
  return (
    <>
      <ScreenWrapper>
        <View style={styles.searchBarWrapper}>
          <SearchBar
            placeholder={'Search by name, category here...'}
            value={''}
            valueSet={() => null}
            touchHandler={value => navigation.navigate('Search', {value})}
          />
        </View>
        <View style={styles.heroSection}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
          />
        </View>
        <View style={styles.features}>
          <View style={styles.heading}>
            <Text style={styles.header}>Exclusively at Dumpling</Text>
            <View style={styles.btn}>
              <Button
                name="See More"
                onPress={() => {
                  navigation.navigate('Search');
                }}
              />
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.featureProducts}>
              {featuredProductList &&
                featuredProductList.data.map((product, index) => {
                  return (
                    <FeatureProductCard
                      key={product.name + index}
                      name={product.name}
                      price={product.price}
                      image={featureProducts[index]}
                      onPress={() => {
                        detailProductSet({
                          ...product,
                          image: featureProducts[index],
                        });
                      }}
                    />
                  );
                })}
              {isLoading1 && (
                <ActivityIndicator
                  size={'large'}
                  animating={true}
                  color={stylesConstant.color.btnColor}
                />
              )}
              {error1 && <Text style={styles.error}>An Error Occured!</Text>}
            </View>
          </ScrollView>
        </View>

        <View style={styles.features}>
          <View style={styles.heading}>
            <Text style={styles.header}>Feature Categories</Text>
            <View style={styles.btn}>
              <Button
                name="See More"
                onPress={() => {
                  navigation.navigate('Category');
                }}
              />
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.featureProducts}>
              {categoryList &&
                categoryList.data.map((category, index) => {
                  return (
                    <CategoryCard
                      key={category.name + index}
                      name={category.name}
                      image={categories[index]}
                      onPress={() => {
                        navigation.navigate('Search', {value: category.name});
                      }}
                    />
                  );
                })}
              {isLoading2 && (
                <ActivityIndicator
                  size={'large'}
                  animating={true}
                  color={stylesConstant.color.btnColor}
                />
              )}
              {error2 && <Text style={styles.error}>An Error Occured!</Text>}
            </View>
          </ScrollView>
        </View>
      </ScreenWrapper>
      {detailProduct && (
        <ProductDetails
          data={detailProduct}
          onPress={() => detailProductSet(null)}
        />
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  heroSection: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
  },
  searchBarWrapper: {
    top: 20,
    left: 5,
    right: 5,
    zIndex: 2,
    position: 'absolute',
    opacity: 0.8,
  },

  image: {resizeMode: 'cover', height: '100%', width: '100%'},

  features: {
    marginTop: 8,
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    paddingBottom: 10,
    borderRadius: 10,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    fontSize: stylesConstant.textSize.headers,
    fontWeight: '600',
    color: stylesConstant.color.primaryColor,
    padding: 10,
    paddingLeft: 5,
    letterSpacing: 0.8,
  },

  btn: {
    marginRight: 5,
  },
  error: {
    color: stylesConstant.color.inActiveColor,
    fontWeight: 'bold',
    fontSize: 24,
  },
  featureProducts: {flexDirection: 'row'},
});
