import React, { useState } from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

import House from '../../assets/svg/house.svg';
import Geo from '../../assets/svg/geo.svg';
import Bookmark from '../../assets/svg/bookmark.svg';
import Check from '../../assets/svg/check.svg';
import Plus from '../../assets/svg/plus.svg';
import Ellips from '../../assets/svg/ellips.svg'

import {
  HomeStackScreen,
  NearMeStackScreen,
  CargoStackScreen,
  AdvertStackScreen,
  OfferStackScreen,
} from './ScreenStack';

import DrawerNavigator from './DrawerNavigator';


const tabBar = () => {
  const[userType,setUserType] = useState(true);
  const _renderIcon = (routeName, selectedTab) => {
    let icon;
    let title;
    switch (routeName) {
      case 'title1':
        title = 'Anasayfa';
        icon = <House style={{color: selectedTab == 'title1' ? '#0069B4' : 'gray'}}/>
        break;
      case 'title2':
        title = `Yakınımda \n \tNe Var?`;
        icon = <Geo style={{color: selectedTab == 'title2' ? '#0069B4' : 'gray'}}/>
        break;
      case 'title3':
        title = 'İlanlarım';
        icon = <Check style={{color: selectedTab == 'title3' ? '#0069B4' : 'gray'}}/>
        break;
      case 'title4':
        title = 'Teklifler';
        icon = <Bookmark style={{color: selectedTab == 'title4' ? '#0069B4' : 'gray'}}/>
        break;
        case 'titlex' :
          title = '';
          icon = null;
          break;
    }

    return (
      <View style={{alignItems:'center'}}>
          {icon}
          <Text
            style={[styles.renderButtonText,{
              color: routeName === selectedTab ? 'rgb(72,125,169)' : 'gray',
              marginBottom: routeName == 'title2' ? 0 :10}]}>
            {title}
          </Text>
      </View>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.renderButton} >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
        <CurvedBottomBar.Navigator
          type="UP"
          style={styles.bottomBar}
          strokeWidth={0.5}
          strokeColor="#DDDDDD"
          height={90}
          circleWidth={30}
          bgColor="white"
          initialRouteName="title1"
          screenOptions={{headerShown: false}}
          renderCircle={({selectedTab, navigate}) => (
            <>
              <Animated.View style={styles.btnCircleUp}>
                <TouchableOpacity
                  style={styles.ellipsButton}
                  onPress={() =>
                    navigate('titlex')
                  }>
                  {userType ? <Plus style={styles.mT_20}/> : <Ellips style={styles.mT_20}/>}
                </TouchableOpacity>
                <Text style={styles.ellipsButtonText}>
                  Yüküm var
                </Text>
              </Animated.View>
            </>
          )}
          tabBar={renderTabBar}>
           <CurvedBottomBar.Screen
            name="titlex"
            component={CargoStackScreen}
            position=""
          /> 
          <CurvedBottomBar.Screen
            name="title1"
            component={HomeStackScreen}
            position="LEFT"
          />
          <CurvedBottomBar.Screen
            name="title2"
            position="LEFT"
            component={NearMeStackScreen}
          />
          <CurvedBottomBar.Screen
            name="title3"
            component={AdvertStackScreen}
            position="RIGHT"
          />
          <CurvedBottomBar.Screen
            name="title4"
            component={OfferStackScreen}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    shadowColor:'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    maxHeight: 100
  },
  btnCircleUp: {
  width: 60,
  height: 60,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(228,148,53)',
  bottom: 18,
  shadowColor:'rgba(0, 0, 0, 0.25)',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, 
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
  ellipsButton:{
    flex: 1,
    justifyContent: 'center',
  },
  ellipsButtonText:{
    top: 23, 
    fontSize: 12, 
    color: 'rgb(228,148,53)'
  },
  mT_20:{
    marginTop:20
  },
  renderButton:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:5
  },
  renderButtonText:{
    fontSize: 13,
    lineHeight:13,
    marginTop:5,
  }
});

export default tabBar;
