import React,{ useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeoAlt from '../../../assets/svg/geo-alt.svg'
import TextInputField from '../../../components/TextInputField'
import Search from '../../../assets/svg/search.svg'
import AddressCard from '../../../components/AddressCard'
import Header from '../../../components/Header'
const AddressList = (props) => {
    const [search,setSearch] = useState();
    const [isSearch,setisSearch] = useState(false);
    const placeholder = {
        searchButton:'Adres Başlığı Ara'
    }

    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <Header brad = "Hesabım > Adres Listem" navigation={props.navigation}/>
                <View style={styles.mainContainer}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <GeoAlt width={18} height={18}/>
                        <Text style={styles.tittle}>Adres Listem</Text>
                    </View>
                    <TextInputField label = {placeholder.searchButton} onChangeText={(value) =>setSearch(value)} value={search} onFocus={()=>setisSearch(true)} onBlur={()=>setisSearch(false)}/>
                    <TouchableOpacity style={styles.searchButton}><Search/></TouchableOpacity>
                    <ScrollView style={[styles.sourcePopup,{display: isSearch ? 'flex' :'none'}]}>

                    </ScrollView>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("AddAddress")} style={styles.addAddressButton}><Text style={styles.addAddressButtonText}>Yeni Adres Ekle</Text></TouchableOpacity>
                    <AddressCard title="Adres Başlığı" exp = "Karaduvar,Mersin Limanı, 33020-Merkez..." user="Sercanİzci-+90 543 522 12 13"/>
                    <AddressCard title="Adres Başlığı" exp = "Karaduvar,Mersin Limanı, 33020-Merkez..." user="Sercanİzci-+90 543 522 12 13"/>
                    <AddressCard title="Adres Başlığı" exp = "Karaduvar,Mersin Limanı, 33020-Merkez..." user="Sercanİzci-+90 543 522 12 13"/>
                    <AddressCard title="Adres Başlığı" exp = "Karaduvar,Mersin Limanı, 33020-Merkez..." user="Sercanİzci-+90 543 522 12 13"/>
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
        position:'relative'
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
    searchButton:{
        position:'absolute',
        zIndex:999,
        marginTop:43,
        marginLeft:310,
    },
    addAddressButton:{
        width:'100%',
        marginTop:10,
        backgroundColor:'#0069B4',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        height:50
    },
    addAddressButtonText:{
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Proxima Nova',
        color:'#FFFFFF'
    },
    brad:{
        ...Text14,
        color:'#868A9A',
        marginLeft:10,
        alignSelf:'center'
    },
    
    sourcePopup:{
        position:'absolute',
        backgroundColor:'white',
        width:350,
        padding:20,
        paddingBottom:20,
        borderRadius:10,
        minHeight:50,
        maxHeight:146,
        marginTop:85,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3, 
        zIndex:99,
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
export default AddressList;