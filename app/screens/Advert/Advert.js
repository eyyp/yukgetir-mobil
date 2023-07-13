
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import * as actions from '../../redux/actions/actions'
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LogoYatay from '../../assets/svg/logo-yatay.svg';
import Bell from '../../assets/svg/bell.svg';
import Heart from '../../assets/svg/heart.svg';
import Search from '../../assets/svg/search.svg';
import Filter from '../../assets/svg/filter.svg';
import ArrowDown from '../../assets/svg/arrow-down.svg';
import Close from '../../assets/svg/close.svg';
import CircleDash from '../../assets/svg/circle-dash.svg'
import JustifyRight from '../../assets/svg/justify-right.svg';
import {styles} from './AdvertStyle';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AdvertCard from '../../components/CargoCards/AdvertCard';

const Advert = props => {

  const[selected,setSelected] = useState([]);
  const[type,setType] = useState([]);
  const[property,setProperty] = useState([]);
  const[equipmentSelect,setEquipmentSelect] = useState([]);
  const filterReducer = useSelector(state=>state.filter);
  const dispatch = useDispatch();
  const {
    general,
    vehicleType,
    vehicleProperty,
    equipment } = filterReducer;

    useEffect(()=>{
      console.log(general,
          vehicleType,
          vehicleProperty,
          equipment)
    })
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
          <TouchableOpacity style={{alignItems: 'center'}}>
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
      <View style={styles.filter}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Sırala</Text>
          <ArrowDown width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>props.navigation.navigate("Filter")} style={styles.filterButton}>       
          <Text style={styles.filterText}>Filtrele</Text>
          <Filter width={20} height={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.selectedBar}>
        <ScrollView showsVerticalScrollIndicator={ false } horizontal={ true } style={styles.selectRow}>
            <TouchableOpacity onPress={()=>{dispatch(actions.setFilter([],[],[],[]))}} style={styles.clearSelected}>
                <Text style = {styles.selectedText}>Temizle</Text>
                <Close witdh={12} height={12} style={styles.selectedIcon}/>
            </TouchableOpacity>
            {general?.map((item,index) =>
            !!item &&
            <TouchableOpacity key={index} style={styles.selected}>
                <Text style = {styles.selectedText}>{item}</Text>
                <CircleDash witdh={12} height={12} style={styles.selectedIcon}/>
            </TouchableOpacity>
            )}
            {vehicleType?.map((item,index) => 
            <TouchableOpacity key={index} style={styles.selected}>
                <Text style = {styles.selectedText}>{!!item && item}</Text>
                <CircleDash witdh={12} height={12} style={styles.selectedIcon}/>
            </TouchableOpacity>
            )}
            {vehicleProperty?.map((item,index) => 
            <TouchableOpacity key={index} style={styles.selected}>
                <Text style = {styles.selectedText}>{!!item && item}</Text>
                <CircleDash witdh={12} height={12} style={styles.selectedIcon}/>
            </TouchableOpacity>
            )}
            {equipment?.map((item,index) => 
            <TouchableOpacity key={index} style={styles.selected}>
                <Text style = {styles.selectedText}>{!!item && item}</Text>
                <CircleDash witdh={12} height={12} style={styles.selectedIcon}/>
            </TouchableOpacity>
            )}
        </ScrollView>
        </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <AdvertCard />
        <AdvertCard />
        <AdvertCard />
        <AdvertCard />
        <AdvertCard />
        <AdvertCard />
      </ScrollView>
    </View>
  );
}
export default Advert;

