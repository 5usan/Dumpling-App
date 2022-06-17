/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from './src/routes/routes';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import IconContainer from './src/component/IconContainer';
import {stylesConstant} from './src/styles/abstracts/abstracts';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          {routes.map((obj, i) => (
            <Tab.Screen
              key={i}
              name={obj.name}
              component={obj.component}
              listeners
              options={({route, navigation}) => {
                console.log(navigation);
                return {
                  tabBarIcon: ({focused, color, size}) => {
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
                  ...(obj.tabBarBadge ? {tabBarBadge: 3} : {}),
                };
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
