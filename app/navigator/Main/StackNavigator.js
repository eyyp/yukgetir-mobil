import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Welcome/Login/Login';
import Signup from '../../screens/Welcome/Signup/Signup';
import ForgotPassword from '../../screens/Welcome/ForgotPassword/ForgotPassword';
import { CargoStackScreen } from './ScreenStack';
import tabBar from './TabNavigator';
const Stack = createNativeStackNavigator();

 const StackNavigator = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Login}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="cargoStack" component={CargoStackScreen} />
          <Stack.Screen name="TabScreens" component={tabBar} />
        </Stack.Navigator>
  );
}
export default StackNavigator;