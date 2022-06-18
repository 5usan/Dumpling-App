/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from './src/routes/routes';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/store/store';
import IconContainer from './src/component/IconContainer';
import {stylesConstant} from './src/styles/abstracts/abstracts';
import RNBootSplash from 'react-native-bootsplash';
const Tab = createBottomTabNavigator();

const App = () => {
  const MainContainer = () => {
    const {totalQuantity} = useSelector(state => state.cart);
    const ref = useRef('');

    return (
      <NavigationContainer
        onReady={() => RNBootSplash.hide({duration: 5000, fade: true})}>
        <Tab.Navigator>
          {routes.map((obj, i) => (
            <Tab.Screen
              key={i}
              name={obj.name}
              component={obj.component}
              listeners={data => (ref.current = data.route.name)}
              options={() => {
                return {
                  tabBarIcon: ({focused, color}) => {
                    let sizeApply = focused ? 28 : 24;
                    return (
                      <IconContainer
                        icon={obj.icon}
                        size={sizeApply}
                        color={color}
                      />
                    );
                  },
                  tabBarActiveTintColor: stylesConstant.color.btnColor,
                  tabBarInactiveTintColor: stylesConstant.color.inActiveColor,
                  tabBarShowLabel: false,
                  headerShown: obj.showHeader,
                  tabBarAllowFontScaling: true,
                  tabBarBadgeStyle: {
                    backgroundColor: stylesConstant.color.colorSuccess,
                  },
                  tabBarStyle: {justifyContent: 'center'},
                  tabBarHideOnKeyboard: true,
                  ...(obj.tabBarBadge &&
                  ref.current !== 'Cart' &&
                  totalQuantity !== 0
                    ? {tabBarBadge: totalQuantity}
                    : {}),
                };
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
