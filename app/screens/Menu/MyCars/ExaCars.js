import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../components/Header'
import FilterElements from '../../../components/FilterElements'
const ExaCars = (props) => {
    const vehicle = {
        no:12132245,   
    }
    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <Header brad = "Araçlarım > Araç İnceleme" navigation={props.navigation}/>
                <View style={styles.Container}>
                    <Text style={styles.tittle}>Araç No:{!!vehicle.no && vehicle.no}</Text>
                    <View style={styles.line}></View>
                </View> 
                <FilterElements Title="Araç No" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Markası</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Modeli</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç No</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Model Yılı</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Plakası</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Tipi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Özellikleri</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Donanım Seçenekleri</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="Araç Belge Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Sigorta Tarihi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Muayene Tarihi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Kasko Tarihi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>K1 Yetki Belgesi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="Sürücü Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Sürücü Belgesi Sınıfı</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Ehliyet Tescil Yılı</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Sürücü Belgesi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Src Belgesi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Piskoteknik Belgesi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="İletişim Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Firma Ünvanı/İsim Soyisim</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Telefon Numarası</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
            </ScrollView>
        </View>
    )
}
const Text16 ={
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:16,
    lineHeight:16,
}
const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
    },
    Container:{
        width:'90%',
        alignSelf:'center',
    },
    Body_f_Grow:{
        flexGrow: 1
    },
    tittle:{
        color: '#F39200', 
        fontSize: 16,
        fontWeight:'600', 
        fontFamily: "Proxima Nova",  
        marginTop: 10
    },
    line:{
        height: 1, 
        flex: 1, 
        backgroundColor: '#0069B4', 
        width: '100%', 
        alignSelf: 'center', 
        marginTop: 8
    },
    element:{
        width:350,
        height:50,
        backgroundColor:'#EBEBEB',
        borderRadius:10,
        paddingLeft:20,
        paddingTop:10,
        marginBottom:10
    },
    title:{
        fontSize:12,
        lineHeight:12,
        fontFamily:'Proxima Nova',
        color:'#000000',
    },
    valueText:{
        ...Text16,
        marginTop:5
    }
});

export default ExaCars;