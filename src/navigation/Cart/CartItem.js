import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CartCard from '../../component/CartCard';
import ScreenWrapper from '../../containers/ScreenWrapper';
import {stylesConstant} from '../../styles/abstracts/abstracts';

const CartItems = ({navigation}) => {
  return (
    <>
      <ScreenWrapper>
        <ScrollView style={styles.cardContainer}>
          <View style={styles.topTextWrapper}>
            <Text style={styles.textBold}> Your Orders</Text>
            <TouchableOpacity onPress={() => null}>
              <Text style={{color: stylesConstant.color.inActiveColor}}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo for momo lovers'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
          <CartCard
            image={{
              uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
            }}
            price="9"
            title={'special Momo'}
          />
        </ScrollView>
      </ScreenWrapper>
      <View style={styles.buttonWrapper}>
        <Button
          title="Checkout"
          color={stylesConstant.color.btnColor}
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topTextWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: '0%',
    marginTop: '6%',
  },
  cardContainer: {
    marginHorizontal: '5%',
    marginTop: 0,
    marginBottom: '10%',
  },
  textBold: {
    fontWeight: 'bold',
    color: stylesConstant.color.primaryColor,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: '.4%',
    left: '5%',
    right: '5%',
  },
});

export default CartItems;
