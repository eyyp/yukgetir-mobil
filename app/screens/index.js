/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home/Home/Home';
import NearMe from './NearMe/NearMe';
import Cargo from './Cargo/Cargo';
import Advert from './Advert/Advert';
import Offer from './Offer/Offer';
import Filter from './Advert/Filter/Filter';
import Menu from './Menu/Menu';
export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Menu" component={MenuStackScreen} />
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
      <AdvertStack.Screen name="Advert" component={Advert} />
      <AdvertStack.Screen name="Filter" component ={Filter}/>
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

export const MenuStack = createNativeStackNavigator();

function MenuStackScreen({navigation}) {
  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name="Menu" component={Menu} screenOptions={{headerShown: false}}/>
    </MenuStack.Navigator>
  );
}


export { HomeStackScreen, NearMeStackScreen, CargoStackScreen, AdvertStackScreen, OfferStackScreen,MenuStackScreen};

