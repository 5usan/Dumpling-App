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
              options={({route}) => {
                return {
                  tabBarIcon: ({focused, color, size}) => {
                    let sizeApply = focused ? 36 : 28;
                    return (
                      <IconContainer
                        icon={obj.icon}
                        size={sizeApply}
                        color={color}
                      />
                    );
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                  tabBarShowLabel: false,
                  headerShown: obj.showHeader,
                  tabBarAllowFontScaling: true,
                  tabBarBadgeStyle: {backgroundColor: 'green'},
                  tabBarStyle: {justifyContent: 'center'},
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
