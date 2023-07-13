import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LogoYatay from '../../../assets/svg/logo-yatay.svg';
import Bell from '../../../assets/svg/bell.svg';
import Heart from '../../../assets/svg/heart.svg';
import Search from '../../../assets/svg/search.svg';
import JustifyRight from '../../../assets/svg/justify-right.svg';
import {styles} from './HomeStyles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import ShowcaseCard from '../../../components/CargoCards/ShowcaseCard';
import AdvertCard from '../../../components/CargoCards/AdvertCard';

const Home = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <LogoYatay width={115} height={32} />
        <View style={styles.rightIconsContainer}>
          <TouchableOpacity style={styles.headerButton}>
            <Bell width={20} height={20} />
            <Text style={styles.rightIcons}>Bildirimler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Heart width={20} height={20} />
            <Text style={styles.rightIcons}>Favorilerim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={() => props.navigation.openDrawer()}>
            <JustifyRight width={20} height={20} />
            <Text style={styles.rightIcons}>Menü</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.search}>
        <TextInput style={styles.searchInput} placeholder="İlan Ara..." />
        <TouchableOpacity style={styles.searchButton}>
          <Search width={20} height={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Vitrindekiler</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
      </ScrollView>
      <View style={styles.currentRow}>
        <Text style={styles.currentList}>Güncel İlanlar</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Advert")}>
          <Text style={styles.seeAll}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AdvertCard />
        <AdvertCard />
      </ScrollView>
    </View>
  );
};
export default Home;
