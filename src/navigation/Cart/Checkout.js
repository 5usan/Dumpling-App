import React from 'react';
import {Button, StyleSheet, View, Text, ScrollView} from 'react-native';
import ScreenWrapper from '../../containers/ScreenWrapper';
import {stylesConstant} from '../../styles/abstracts/abstracts';

const Checkout = ({navigation}) => {
  return (
    <>
      <ScreenWrapper>
        <ScrollView style={styles.cardContainer}>
          <View style={styles.topTextWrapper}>
            <Text style={styles.textBold}> Receipt </Text>
          </View>
          <View style={styles.billContainer}>
            <View style={styles.item}>
              <Text style={styles.itemName}> {'Chicken MOMO'} </Text>
              <Text style={styles.itemPrice}> Rs. {'180'}</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.billFooter}>
            <View style={styles.item}>
              <Text style={styles.total}> {'Total'} </Text>
              <Text style={styles.total}> Rs. {'180'}</Text>
            </View>
          </View>
        </ScrollView>
      </ScreenWrapper>
      <View style={styles.buttonWrapper}>
        <Button
          title="Purchase Order"
          color={stylesConstant.color.btnColor}
          onPress={() => navigation.navigate('Home')}
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
    marginTop: '10%',
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
  billContainer: {
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    borderRadius: 10,
    minHeight: 100,
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  },
  item: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemName: {
    color: stylesConstant.color.primaryColor,
  },
  itemPrice: {
    color: stylesConstant.color.inActiveColor,
  },
  total: {
    color: stylesConstant.color.primaryColor,
    fontWeight: 'bold',
  },
  divider: {
    borderColor: stylesConstant.color.inActiveColor,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 20,
  },
  billFooter: {
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Checkout;
