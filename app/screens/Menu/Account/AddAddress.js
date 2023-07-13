import React,{ useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, Modal, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Geri from '../../../assets/svg/geri.svg'
import GeoAlt from '../../../assets/svg/geo-alt.svg'
import Search from '../../../assets/svg/search.svg'
import Address from '../../../assets/svg/address.svg'
import Person from '../../../assets/svg/person.svg'
import Flag from '../../../assets/svg/flag.svg'
import TextInputField from '../../../components/TextInputField'
import Header from '../../../components/Header'
const AddAddress = (props) => {
    const [title,setTitle] = useState();
    const [search,setSearch] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [addressExp,setAddressExp] = useState();
    const [detail, setDetail] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [isSearch,setisSearch] = useState(false);
    const placeholder = {
        title:'Adres Başlığı',
        searchButton:'Adres, Yer veya Koordinat Giriniz',
        name:'İsim Soyisim',
        phone:'Cep Telefonu',
        mail:'Mail Adresi',
        addressExp :'Adres Tarifi Ek Detay (Opsiyonel)',
        detail:'Harita Seçili Adres Detayları',
        district:'İlçe',
        city:'İl'
    }

    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <Header brad="Hesabım > Yeni Adres Ekle" navigation={props.navigation}/>
                <View style={styles.mainContainer}>
                    <View style={styles.elementTop}>
                        <GeoAlt width={18} height={18}/>
                        <Text style={styles.tittle}>Adres Detay Bilgileri</Text>
                    </View>
                    <TextInputField label = {placeholder.title} onChangeText={(value) =>setTitle(value)} value={title} onPress={()=>setTitle('')} button = {"Close"}/>
                    <TextInputField label = {placeholder.searchButton} onFocus={()=>setisSearch(true)} onBlur={()=>setisSearch(false)} onChangeText={(value) =>setSearch(value)} value={search} />
                    <ScrollView style={[styles.sourcePopup,{display: isSearch ? 'flex' :'none'}]}>
                        <TouchableOpacity style={styles.addressConclusion}>
                            <Text style={styles.addressConclusionText}>Meşrutiyet mahallesi, Kızılay, Çankaya-Ankara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addressConclusion}>
                            <Text style={styles.addressConclusionText}>Meşrutiyet mahallesi, Kızılay, Çankaya-Ankara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addressConclusion}>
                            <Text style={styles.addressConclusionText}>Meşrutiyet mahallesi, Kızılay, Çankaya-Ankara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addressConclusion}>
                            <Text style={styles.addressConclusionText}>Meşrutiyet mahallesi, Kızılay, Çankaya-Ankara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addressConclusion}>
                            <Text style={styles.addressConclusionText}>Meşrutiyet mahallesi, Kızılay, Çankaya-Ankara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addressConclusion}>
                            <Text style={styles.addressConclusionText}>Meşrutiyet mahallesi, Kızılay, Çankaya-Ankara</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <TouchableOpacity style={styles.searchButton}><Search/></TouchableOpacity>
                    <View style={styles.addressRow}>
                        <Address style={styles.address}/>
                    </View>
                    <TextInputField label = {placeholder.detail} onChangeText={(value) =>setDetail(value)} value={detail} onPress={()=>setDetail('')} inputStyle={styles.inputStyle} viewStyle={styles.multiLineView} multiline={true} numberOfLines={10} editable={false} />
                    <TextInputField label = {placeholder.district} onChangeText={(value) =>setDistrict(value)} value={district} onPress={()=>setDistrict('')} inputStyle={styles.inputStyle} viewStyle={styles.viewStyle} editable={false}/>
                    <TextInputField label = {placeholder.city} onChangeText={(value) =>setCity(value)} value={city} onPress={()=>setCity('')} inputStyle={styles.inputStyle} viewStyle={styles.viewStyle} editable={false}/>
                    <TextInputField label = {placeholder.addressExp} onChangeText={(value) =>setAddressExp(value)} value={addressExp} onPress={()=>setAddressExp('')} />
                    <View style={styles.element}>
                        <Person width={18} height={18}/>
                        <Text style={styles.tittle}>Adres İletişim Bilgileri</Text>
                    </View>
                    <TextInputField label = {placeholder.name} onChangeText={(value) =>setTitle(value)} value={title} onPress={()=>setTitle('')} button = {"Close"}/>
                    <TextInputField onChangeText={(value)=>{setPhone(value);}} onPress={()=>setPhone('')} maxLength={13} label={placeholder.phone} value={phone} button = {'Close'} inputStyle={{paddingLeft:75}} component={<View style={styles.flapRow}><Flag width={22} height={14} style={styles.flap}/><Text style={styles.phoneText}>+90</Text></View>}/>
                    <TextInputField onChangeText={(value)=>{setEmail(value);}} onPress={()=>setEmail('')} label={placeholder.mail} value={email} button = {'Close'}/>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity  style={styles.clearButton}>
                            <Text style = {styles.clearButtonText}>Vazgeç</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style = {styles.clearButtonText}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const Text16 = {
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:16,
}
const Text14 = {
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:14,
}

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
    },
    Container:{
        padding: 20
    },
    mainContainer:{
        width:350,
        alignSelf:'center',
    },
    backButton:{ 
        flexDirection: 'row', 
    },
    Body_f_Grow:{
        flexGrow: 1,
    },
    tittle:{
        color:'#000000',
        fontSize: 16,
        lineHeight:16,
        fontWeight:'400', 
        fontFamily: "Proxima Nova",
        marginLeft:12,
        marginTop:3 
    },
    brad:{
        ...Text14,
        color:'#868A9A',
        marginLeft:10,
        alignSelf:'center'
    },
    searchButton:{
        position:'absolute',
        zIndex:999,
        marginTop:102,
        marginLeft:310,
    },
    phoneText: {
      lineHeight: 16,
      fontSize: 16,
      color: 'black',
      marginLeft: 5,
      alignSelf: 'center',
      fontFamily: 'Proxima Nova',
    },

    phone: {
      width: '73%',
      marginLeft: 3,
      fontWeight: '400',
      fontFamily: 'Proxima Nova',
    },

    phoneN: {
      marginLeft: 2,
      fontWeight: '500',
      color: 'black',
    },
      
    flap: {
        marginBottom: 2,
    },
    flapRow: {
        flexDirection: 'row',
        position: 'absolute',
        marginLeft: 15,
        marginTop: 23,
        alignItems: 'center',
    },

    buttonRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:8,
    },

    clearButton:{
        backgroundColor:'#F39200',
        width:170,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:21
    },

    filterButton:{
        backgroundColor:'#0069B4',
        width:170,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:21
    },

    clearButtonText:{
        ...Text16,
        color:'white'
    },

    inputStyle:{
        textAlignVertical: 'top',
        backgroundColor:'#EBEBEB'
    },

    viewStyle:{
        backgroundColor:'#EBEBEB',
        borderColor:'#EBEBEB',
    },

    multiLineView:{
        backgroundColor:'#EBEBEB',
        borderColor:'#EBEBEB',
        height:100
    },

    addressRow:{
        marginTop:10,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:10,
        width:330,
        height:196,
        backgroundColor:'white'
    },

    elementTop:{
        flexDirection:'row',
        alignItems:'center'
    },
    element:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:22
    },

    sourcePopup:{
        backgroundColor:'white',
        padding:20,
        paddingBottom:20,
        borderRadius:10,
        minHeight:50,
        maxHeight:146,
        marginTop:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3, 
    },

    addressConclusion:{
        alignItems:'center',
        alignSelf:'center',
        width:'100%',
        marginBottom:17,
    },

    addressConclusionText:{
       ...Text14,
       color:'#868A9A' 
    }

});
export default AddAddress;