import React,{ useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, Modal} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Geri from  '../../../assets/svg/geri.svg'
import PinMap from '../../../assets/svg/pin-map.svg'
import Calender from '../../../assets/svg/calendar.svg'
import Truck from '../../../assets/svg/truck-w.svg'
import FilePlus from '../../../assets/svg/file-plus.svg'
import FileText from '../../../assets/svg/file-text.svg'
import Cash from '../../../assets/svg/cash.svg'
import Select from '../../../components/Select'
import FilterElements from '../../../components/FilterElements'
import CircleHalf from '../../../assets/svg/circle-half.svg'
import moment from 'moment'
import Calendar from 'react-native-calendars/src/calendar'
import { oneClickDate, dateRange, dateSettings } from '../../../helper/date'
import { styles } from './FilterStyles'
import TextInputField from '../../../components/TextInputField'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/actions'
import CalendarModal from '../../../components/Calender'
const Filter = (props) => {

    const[loadAdreess,setLoadAdreess] = useState('');
    const[unloadAdreess,setUnloadAdreess] = useState('');
    const[hireType,setHireType] = useState('');
    const[vehicleType,setVehicleType] = useState([]);
    const[vehicleProperty,setVehicleProperty] = useState([]);
    const[equipment,setEquipment] = useState([]);
    const[minPrice,setMinPrice] = useState('');
    const[maxPrice,setMaxPrice] = useState('');
    const[onDate,setOnDate] = useState(false);
    const[counter,setCounter] = useState(0);
    const[oneDate,setOneDate] = useState({});
    const[onUnload,setOnUnload] = useState(false);
    const[secondDate,setSecondDate] = useState({});
    const[unloadOne,setUnloadOne] = useState({});
    const[unloadSecond,setUnloadSecond] = useState({});
    const[clear,setClear] = useState(0);
    const placeholder = {
        loadAdress:'Yükleme Yeri',
        unloadAdreess:'Boşaltma Yeri',
        loadDate:'Yükleme Tarihi',
        unLoadDate:'Boşaltma Zamanı',
        minPrice:'Min.Fiyat',
        maxPrice:'Max.Fiyat'
    }

    const dispatch = useDispatch();

    const filter = async () => {
        dispatch(actions.setFilter([loadAdreess,unloadAdreess,(!!oneDate && oneDate.dateString) + (!!secondDate && ' / ' + secondDate.dateString),hireType,,minPrice,maxPrice],vehicleType,vehicleProperty,equipment))
        props.navigation.navigate("Advert")
    }

    useEffect(()=>{
        dateSettings()
        setSecondDate({}),
        setOneDate({})
    },[])

    useEffect(()=>{
        console.log(oneDate)
    },[oneDate])

    const dataVehicleType = [{name:'Dorse'},{name:'Frigofirik'},{name:'Kamyon'},{name:'Kırkayak'},{name:'Römork'},{name:'Tır'},{name:'Tır'}]
    const dataVehiclePropety = [{name :'Tır 13.60 Dorse'},{name:'Tır Havuz Dorse'},{name:'10 Teker Kamyon Açık'}]
    const dataEquipment = [{name:'Donanım 1'},{name:'Donanım 2'},{name:'Donanım 3'}]

    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <SafeAreaView style={styles.Container}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.backButton}>
                        <Geri witdh={22} height={22}/>
                    </TouchableOpacity>
                </SafeAreaView>
                <Text style={styles.tittle}>Detaylı Arama</Text>
                <View style={styles.line}></View>
                <FilterElements Icon={<PinMap style={styles.pin}/>} Title="Konum" Element={
                    <View>
                        <TextInputField onChangeText={(res)=>{setLoadAdreess(res)}} onPress={()=>setLoadAdreess("")} label={placeholder.loadAdress}  value={loadAdreess} button = {"Close"}/>
                        <TextInputField onChangeText={(res)=>{setUnloadAdreess(res)}} onPress={()=>setUnloadAdreess("")} label={placeholder.unloadAdreess} value={unloadAdreess} button = {"Close"}/>
                    </View>
                }/>
                <FilterElements Icon ={<Calender style={styles.pin} />} Title="Tarih" Element={
                    <View>
                        <TextInputField onFocus={()=>setOnDate(true)} onPress={()=>{setOneDate(''),setSecondDate('')}} label={placeholder.loadDate} value={!!oneDate ? (!!secondDate ? moment(oneDate.dateString).format("DD.MM.YYYY") + ' - ' + moment(secondDate.dateString).format("DD.MM.YYYY"): moment(oneDate.dateString).format("DD.MM.YYYY")):null} button = {"Close"} showSoftInputOnFocus={false}/>
                        <TextInputField onFocus={()=>setOnUnload(true)} onPress={()=>{setUnloadOne(''),setUnloadSecond('')}} label={placeholder.unLoadDate} value={!!unloadOne ? (!!unloadSecond ? moment(unloadOne.dateString).format("DD.MM.YYYY") + ' - ' + moment(unloadSecond.dateString).format("DD.MM.YYYY"): moment(unloadOne.dateString).format("DD.MM.YYYY")):null} button = {"Close"} showSoftInputOnFocus={false}/>
                    </View>
                }/>
                <FilterElements Icon ={<CircleHalf style={styles.pin}/>} Title="Kiralama Tipi" Element={
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={()=>setHireType('full')} style={[styles.button,{borderColor:hireType == 'full' ? '#0069B4':'white'}]}>
                            <Text style={styles.buttonText}>Komple</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setHireType('partial')} style={[styles.button,{borderColor:hireType == 'partial' ? '#0069B4':'white'}]}>
                            <Text style={styles.buttonText}>Parsiyel</Text>
                        </TouchableOpacity>
                    </View>} />
                <FilterElements Icon = {<Truck style = {styles.pin}/>} Title="Araç Tipi" Element={<Select data={dataVehicleType} onChange={(selected)=>setVehicleType(selected)} clear={clear}/>}/> 
                <FilterElements Icon = {<FileText style = {styles.pin}/>} Title="Araç Özellikleri" Element={<Select data={dataVehiclePropety} onChange={(selected)=>setVehicleProperty(selected)} clear = {clear}/>}/>
                <FilterElements Icon = {<FilePlus style = {styles.pin}/>} Title="Donanım Özellikleri" Element={<Select data={dataEquipment} onChange={(selected)=>setEquipment(selected)} clear={clear}/>}/> 
                <FilterElements Icon = {<Cash style = {styles.pin} />} Title= "Fiyat Aralığı" Element={
                    <View style={styles.buttonRow}>
                        <View style={styles.w_48}>
                            <TextInputField onChangeText={(res)=>{setMinPrice(res)}} onPress={()=>setMinPrice("")} label={placeholder.minPrice} value={minPrice} button = {"Close"} />
                        </View>
                        <View style={styles.w_48_mL_10}>
                            <TextInputField onChangeText={(res)=>{setMaxPrice(res)}} onPress={()=>setMaxPrice("")} label={placeholder.maxPrice} value={maxPrice} button = {"Close"} />
                        </View>
                    </View>
                }/>
                <View style={styles.inputRow}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={()=>{setLoadAdreess(''),setUnloadAdreess(''),setHireType(''),setVehicleType([]),setVehicleProperty([]),setEquipment([]),setMaxPrice(''),setMinPrice(''),setClear(clear+1),setOneDate(''),setSecondDate('')}} style={styles.clearButton}>
                            <Text style = {styles.clearButtonText}>Temizle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>filter()} style={styles.filterButton}>
                            <Text style = {styles.clearButtonText}>Filtrele</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <CalendarModal type="two" Save={(first,second)=>{setOneDate(first),setSecondDate(second)}} state={onDate} setState={(value)=>setOnDate(value)}/>
            <CalendarModal type="two" Save={(first,second)=>{setUnloadOne(first),setUnloadSecond(second)}} state={onUnload} setState={(value)=>setOnUnload(value)}/>
        </View>
    )
}
export default Filter;