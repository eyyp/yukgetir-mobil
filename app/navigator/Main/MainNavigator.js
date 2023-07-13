import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
export const Stack = createNativeStackNavigator();

 const MainNavigator = () => {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  );
}
export default MainNavigator;
