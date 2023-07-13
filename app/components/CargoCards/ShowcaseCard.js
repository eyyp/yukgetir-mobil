/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from './ShowcaseCardStyles';
import Forward from '../../assets/svg/forward.svg';
import Geo from '../../assets/svg/geo.svg';
import ChevronRight from '../../assets/svg/chevron-right.svg';
import Calendar from '../../assets/svg/calendar.svg';
import Truck from '../../assets/svg/truck.svg';
import CircleHalf from '../../assets/svg/circle-half.svg';
import Capslock from '../../assets/svg/capslock.svg';
import CircleFill from '../../assets/svg/circle-fill.svg';
import Eye from '../../assets/svg/eye.svg';
import FavoriEkle from '../../assets/svg/favori-ekle.svg';

const ShowcaseCard = props => {
  return (
    <View style={{marginTop: 5,height:300 }}>
      <ImageBackground
        style={styles.map}
        source={require('../../assets/png/map.png')}
      />
      <View style={styles.cardContainer}>
        <View style={styles.cardTop}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Forward width={14} height={14} style={{marginLeft: 52}} />
              <Text style={styles.way}>500 KM</Text>
            </View>
            <View style={styles.view}>
              <Geo width={16} height={16} style={styles.icon} />
              <Text style={styles.textRight}>Ankara</Text>
              <ChevronRight width={16} height={16} style={{marginLeft: 5}} />
              <Text style={styles.textRight}>Mersin</Text>
            </View>
          </View>
          <Text style={styles.price}>15.256 TL</Text>
        </View>
        <View style={styles.advertsDateRow}>
          <Calendar width={14} height={14} style={styles.icon} />
          <Text style={styles.textLeft}>
            Yükleme Tarihi:
            <Text style={styles.date}> 22.07.2022 - 25.08.2022</Text>
          </Text>
        </View>
        <View style={styles.view}>
          <Truck width={14} height={14} style={styles.icon} />
          <Text style={styles.textLeft}>
            Araç Tipi:
            <Text style={{size: 14, color: '#868A9A'}}> Tır 13.60 Açık</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.view}>
            <CircleHalf width={14} height={14} style={styles.icon} />
            <Text style={styles.textLeft}>
              Kiralama Tipi:<Text style={styles.textRight}> Parsiyel</Text>
            </Text>
            <Capslock width={14} height={14} style={styles.icon} />
            <Text style={{size: 14, color: '#868A9A'}}> 27 Ton</Text>
          </View>
          <CircleFill width={14} height={14} style={styles.icon} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.view}>
            <Eye width={14} height={14} style={styles.iconBottom} />
            <Text style={{size: 14, color: '#868A9A'}}> 125</Text>
          </View>
          <View style={styles.view}>
            <FavoriEkle width={30} height={30} style={styles.iconBottom} />
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.buttonText}> Detay Gör</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.buttonText}>Teklif Gönder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ShowcaseCard;
