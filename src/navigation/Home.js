import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import ProductCard from '../component/ProductCard';
import ScreenWrapper from '../containers/ScreenWrapper';
import {featureProducts, categories} from '../assets/constants';
import {stylesConstant} from '../styles/abstracts/abstracts';
import CategoryCard from '../component/CategoryCard';
import Button from '../component/common/Button';
import SearchBar from '../component/SearchBar';

const Home = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Category');
  };
  return (
    <ScreenWrapper>
      <View style={styles.searchBarWrapper}>
        <SearchBar
          placeholder={'Search by name,category here...'}
          value={''}
          valueSet={() => null}
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
            <Button name="See More" />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featureProducts}>
            {featureProducts.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onPress={() => {
                    console.log('a');
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.features}>
        <View style={styles.heading}>
          <Text style={styles.header}>Feature Categories</Text>
          <View style={styles.btn}>
            <Button name="See More" onPress={pressHandler} />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featureProducts}>
            {categories.map((category, index) => {
              return (
                <CategoryCard
                  key={index}
                  name={category.name}
                  image={category.image}
                  onPress={() => {
                    console.log('a');
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
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
    left: 20,
    right: 20,
    zIndex: 5,
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

  featureProducts: {flexDirection: 'row'},
});
