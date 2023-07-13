import React, { useEffect,useState } from 'react';
import {Text, View, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import Geo from '../../assets/svg/geo.svg';
import ChevronRight from '../../assets/svg/chevron-right.svg';
import Calendar from '../../assets/svg/calendar.svg';
import Truck from '../../assets/svg/truck.svg';
import Eye from '../../assets/svg/eye.svg';
import LinearGradient from 'react-native-linear-gradient';
import Pin from '../../assets/svg/pin-angle.svg'
import Clock from '../../assets/svg/clock.svg'
import CircleHalf from '../../assets/svg/circle-half.svg'
import CapsLock from '../../assets/svg/capslock.svg'
import { color } from 'react-native-reanimated';
const MyAdvertCard = props => {
  
  const[color,setColor] = useState();

  return (
    <View style={{marginTop: 10}}>
      <LinearGradient style={styles.linearGradient} colors={['#F5EDED', '#E2F8FF']}>
        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <View>
              <View style={styles.Row}>
                <Pin style={styles.pin}/>
                <Text style={styles.way}>İlan No:10567</Text>
              </View>
              <View style={styles.view}>
                <Geo width={16} height={16} style={styles.icon} />
                <Text style={styles.textRight}>Ankara</Text>
                <ChevronRight width={16} height={16} style={{marginLeft: 5}} />
                <Text style={styles.textRight}>Mersin</Text>
              </View>
            </View>
            <View style={styles.center}>
             <Text style={styles.price}>15.256 TL</Text>
             <Text style={styles.kdvText}>(Kdv Dahil)</Text>      
            </View>
          </View>
          <View style={styles.view}>
            <Calendar width={14} height={14} style={styles.icon} />
            <Text style={styles.textLeft}>
              Yükleme Tarihi:
              <Text style={styles.date}> 22.07.2022 - 25.08.2022</Text>
            </Text>
          </View>
          <View style={styles.view}>
            <Clock style={styles.icon}/>
            <Text style={styles.textLeft}>
              Boşaltma Zamanı:
              <Text style={styles.date}> 1-3 Gün İçerisinde</Text>
            </Text>
          </View>
          <View style={styles.view}>
            <Truck width={14} height={14} style={styles.icon} />
            <Text style={styles.textLeft}>
              Araç Tipi:
              <Text style={styles.date}> Tır 13.60 Açık</Text>
            </Text>
          </View>
          <View style={styles.view}>
            <CircleHalf style={styles.icon}/>
            <Text style={styles.textLeft}>
              Kiralama Tipi:
              <Text style={styles.date}> Parsiyel</Text>
            </Text>
            <CapsLock style={styles.weightIcon}/>
            <Text style={styles.weightText}>27 Ton</Text>
          </View>
          <View style={styles.bottom}>
                <Eye />
                <Text style={{marginRight:13}}>125</Text>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Sil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.copyButton}>
                    <Text style={styles.cancelText}>Kopyala</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton}>
                    <Text style={styles.buttonText}>Düzenle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailButton}>
                    <Text style={styles.buttonText}>İncele</Text>
                </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width - 40,
      justifyContent: 'center',
      resizeMode: 'cover',
      height: Dimensions.get('window').width / 3,
      borderRadius:10
    },
    cardContainer: {
      padding: 6,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    way: {
      fontSize: 12,
      fontWeight: '400',
      color: 'black',
      marginLeft: 5,
    },
    view: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontSize: 16,
      fontWeight: '600',
      color: 'black',
      marginRight: 5,
      fontFamly: 'ProximaNova-Nova',
    },
    icon: {
      marginLeft: 10,
      color: '#0069B4',
    },
    advertsDateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    textRight: {
      fontSize: 14,
      fontWeight: '400',
      color: '#868A9A',
      marginLeft: 5,
    },
    textLeft: {
      fontSize: 14,
      fontWeight: '400',
      color: '#0069B4',
      marginLeft: 5,
    },
    date: {
      size: 14,
      color: '#868A9A',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 10,
    },
    detailButton: {
      width: 57,
      height: 30,
      backgroundColor: '#F39200',
      borderRadius: 5,
      marginRight: 10,
      justifyContent:'center',
      paddingLeft:10
    },
    buttonText: {
      fontSize: 14,
      fontWeight:'400',
      color: 'white',
    },
    offerButton: {
      width: 71,
      height: 30,
      backgroundColor: '#0069B4',
      borderRadius: 5,
      marginRight: 10,
      justifyContent:'center',
      paddingLeft:10
    },
    bottom: {
      flexDirection: 'row',
      justifyContent:'flex-end',
      alignItems: 'center',
      marginTop: 7,
    },
    iconBottom: {
      marginLeft: 10,
      color: '#868A9A',
    },
    pin:{
      marginLeft:11
    },
    cancelButton:{
      width: 35,
      height: 30,
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor:'#868A9A',
      borderWidth:1,
      alignItems:'center',
      marginRight:10,
      justifyContent:'center'
    },
    copyButton:{
      width: 69,
      height: 30,
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor:'#0069B4',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      marginRight:10,
    },
    copyText:{
      size: 14,
      color: '#0069B4',
      textAlign: 'center',
    },
    cancelText: {
      size: 14,
      color: '#868A9A',
      textAlign: 'center',
    },
    kdvText:{
        fontSize: 12,
        fontWeight: '400',
        fontFamly: 'ProximaNova-Nova',
    },
    center:{
        alignItems:'center'
    },
    Row:{
        flexDirection: 'row'
    },

    weightIcon:{
        marginLeft: 20,
        color: '#0069B4',
    },

    weightText:{
        marginLeft:5,
        fontSize:14,
        fontFamily:'Proxima',
        color:'#868A9A'
    }
})
export default MyAdvertCard;