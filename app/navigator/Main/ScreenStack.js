import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home/Home/Home';
import NearMe from '../../screens/NearMe/NearMe';
import Cargo from '../../screens/Cargo/Cargo';
import Advert from '../../screens/Advert/Advert';
import Offer from '../../screens/Offer/Offer';
import Filter from '../../screens/Advert/Filter/Filter';
import MyAdvert from '../../screens/Advert/MyAdvert';
export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export const NearMeStack = createNativeStackNavigator();

function NearMeStackScreen({navigation}) {
  return (
    <NearMeStack.Navigator screenOptions={{headerShown: false}}>
      <NearMeStack.Screen name="NearMe" component={NearMe} />
    </NearMeStack.Navigator>
  );
}

export const CargoStack = createNativeStackNavigator();

function CargoStackScreen({navigation}) {
  return (
    <CargoStack.Navigator screenOptions={{headerShown: false}}>
      <CargoStack.Screen name="Cargo" component={Cargo} />
    </CargoStack.Navigator>
  );
}

export const AdvertStack = createNativeStackNavigator();

function AdvertStackScreen({navigation}) {
  return (
    <AdvertStack.Navigator screenOptions={{headerShown: false}}>
      <AdvertStack.Screen name="MyAdvert" component = {MyAdvert} />
      <AdvertStack.Screen name="Advert" component = {Advert} />
      <AdvertStack.Screen name="Filter" component = {Filter}/>
    </AdvertStack.Navigator>
  );
}

export const OfferStack = createNativeStackNavigator();

function OfferStackScreen({navigation}) {
  return (
    <OfferStack.Navigator screenOptions={{headerShown: false}}>
      <OfferStack.Screen name="Offer" component={Offer} screenOptions={{headerShown: false}}/>
    </OfferStack.Navigator>
  );
}

export { HomeStackScreen, NearMeStackScreen, CargoStackScreen, AdvertStackScreen, OfferStackScreen};