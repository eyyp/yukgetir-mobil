import React from "react";
import { createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from "../../screens/Menu/DrawerScreen";
import StackNavigator from "./StackNavigator";
import MyProfil from "../../screens/Menu/Account/MyProfile";
import AddressList from "../../screens/Menu/Account/AddressList";
import AddAddress from "../../screens/Menu/Account/AddAddress";
import Settings from "../../screens/Menu/Account/Settings";
import AddCars from "../../screens/Menu/MyCars/AddCars";
const DrawerNavigator = ({navigation}) =>{

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
        screenOptions={{headerShown: false,drawerPosition:'right',drawerStyle:{width: '100%'}}} 
        initialRouteName={StackNavigator} 
        drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name = "Stack" component={StackNavigator} />
      <Drawer.Screen name="MyProfil" component={MyProfil} />
      <Drawer.Screen name="AddressList" component={AddressList} />
      <Drawer.Screen name="AddAddress" component={AddAddress} />
      <Drawer.Screen name="Settings" component={Settings} /> 
      <Drawer.Screen name="AddCars" component={AddCars} /> 
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;