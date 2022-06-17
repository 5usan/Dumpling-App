import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartItems from './Cart/CartItem';
import Checkout from './Cart/Checkout';

const Cart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart Items" component={CartItems} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};
const Stack = createNativeStackNavigator();

export default Cart;
