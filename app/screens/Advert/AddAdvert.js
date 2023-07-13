import React,{ useEffect, useState } from 'react'
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../components/Header'
import OneRowSelect from '../../../components/OneRowSelect'
import TextInputField from '../../../components/TextInputField'
import CalendarModal from '../../../components/Calender'
import Dorse from '../../../assets/svg/dorse.svg'
import Frigofirik from '../../../assets/svg/frigofirik.svg'
import Kamyon from '../../../assets/svg/kamyon.svg'
import Romork from '../../../assets/svg/romork.svg'
import Tir from '../../../assets/svg/tir.svg'
import KirkAyak from '../../../assets/svg/kirkayak.svg'
import Circle from '../../../assets/svg/circle.svg'
import CircleCheck from '../../../assets/svg/circle-check.svg'
import Cloud from '../../../assets/svg/cloud.svg'
import Calendar from '../../../assets/svg/calendar.svg'
const AddCars = (props) => {
    const[brand,setBrand] = useState([]);
    const[model,setModel] = useState([]);
    const[modelYear,setModelYear] = useState([]);
    const[plate,setPlate] = useState();
    const[clear,setClear] = useState(0);
    const[type,setType] = useState('dorse');
    const[property,setProperty] = useState([]);
    const[equipment,setEquipment] = useState([]);
    const[insurredDate,setInsurredDate] = useState();
    const[peakDate,setPeakDate] = useState();
    const[insuranceDate,setInsurrenceDate] = useState();
    const[name,setName] = useState('');
    const[document,setDocument] = useState();
    const[agreement,setAgreement] = useState(false);
    const[openDate1,setOpenDate1] = useState(false);
    const[openDate2,setOpenDate2] = useState(false);
    const[openDate3,setOpenDate3] = useState(false);
    const dataVehicleType = [{name:'Dorse'},{name:'Frigofirik'},{name:'Kamyon'},{name:'Kırkayak'},{name:'Römork'},{name:'Tır'},{name:'Tır'}]
    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <Header brad = "Araçlarım > Yeni Araç Ekle" navigation={props.navigation}/>
                <View style={styles.Container}>
                    <Text style={styles.tittle}>Araç Markası</Text>
                    <View style={styles.line}></View>
                    <OneRowSelect data={dataVehicleType} onChange={(selected)=>setBrand(selected)} clear={clear} title="Araç Markası Seçiniz"/>
                    <Text style={styles.tittle}>Araç Modeli</Text>
                    <View style={styles.line}></View>
                    <OneRowSelect data={dataVehicleType} onChange={(selected)=>setModel(selected)} clear={clear} title="Araç Modeli Seçiniz"/>
                    <Text style={styles.tittle}>Araç Model Yılı</Text>
                    <View style={styles.line}></View>
                    <OneRowSelect data={dataVehicleType} onChange={(selected)=>setModelYear(selected)} clear={clear} title="Araç Model Yılı Seçiniz"/>
                    <Text style={styles.tittle}>Araç Plakası</Text>
                    <View style={styles.line}></View>
                    <TextInputField onChangeText={(res)=>{setPlate(res)}} onPress={()=>setPlate("")} label="Araç Plakasını Yazınız"  value={plate} button = {"Close"}/>
                    <Text style={styles.tittle}>Araç Tipi</Text>
                    <View style={styles.line}></View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={()=>setType('dorse')} style={[styles.typeButton,{borderColor: type == 'dorse' ? '#0069B4':'#868A9A'}]}><Dorse  style={{marginBottom:7,color:type =='dorse' ?'#0069B4':'#868A9A' }}/><Text style={{color: type == 'dorse' ? '#0069B4':'#868A9A'}}>Dorse</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setType('frigofirik')} style={[styles.typeButton,{borderColor: type == 'frigofirik' ? '#0069B4':'#868A9A'}]}><Frigofirik style={{marginBottom:7,color:type =='frigofirik'?'#0069B4':'#868A9A' }}/><Text style={{color: type == 'frigofirik' ? '#0069B4':'#868A9A'}}>Frigofirik</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setType('kamyon')} style={[styles.typeButton,{borderColor: type == 'kamyon' ? '#0069B4':'#868A9A'}]}><Kamyon style={{marginBottom:7,color:type =='kamyon'?'#0069B4':'#868A9A' }}/><Text style={{color: type == 'kamyon' ? '#0069B4':'#868A9A'}}>Kamyon</Text></TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={()=>setType('kirkayak')} style={[styles.typeButton,{borderColor: type == 'kirkayak' ? '#0069B4':'#868A9A'}]}><KirkAyak style={{marginBottom:7,color:type =='kirkayak'?'#0069B4':'#868A9A' }}/><Text style={{color: type == 'kirkayak' ? '#0069B4':'#868A9A'}}>KırkAyak</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setType('romork')} style={[styles.typeButton,{borderColor: type == 'romork' ? '#0069B4':'#868A9A'}]}><Romork style={{marginBottom:7,color:type =='romork'?'#0069B4':'#868A9A' }}/><Text style={{color: type == 'romork' ? '#0069B4':'#868A9A'}}>Romork</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setType('tir')} style={[styles.typeButton,{borderColor: type == 'tir' ? '#0069B4':'#868A9A'}]}><Tir style={{marginBottom:7,color:type =='tir'?'#0069B4':'#868A9A' }}/><Text style={{color: type == 'tir' ? '#0069B4':'#868A9A'}}>Tır</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.tittle}>Araç Özellikleri</Text>
                    <View style={styles.line}></View>
                    <OneRowSelect data={dataVehicleType} onChange={(selected)=>setProperty(selected)} clear={clear} title="Araç Özellikleri Seçiniz"/>
                    <Text style={styles.tittle}>Donanım Seçenekleri</Text>
                    <View style={styles.line}></View>
                    <OneRowSelect data={dataVehicleType} onChange={(selected)=>setEquipment(selected)} clear={clear} title="Araç Donanımını Seçiniz"/>
                    <Text style={styles.tittle}>Araç Sigorta Tarihi</Text>
                    <View style={styles.line}></View>
                    <TouchableOpacity onPress={()=>{setOpenDate1(true)}} style={styles.document}><Text style={styles.label}>{!!insurredDate? insurredDate.dateString :'Sigorta Tarihi Seçiniz'}</Text><Calendar/></TouchableOpacity>
                    <Text style={styles.tittle}>Araç Muayene Tarihi</Text>
                    <View style={styles.line}></View>
                    <TouchableOpacity onPress={()=>{setOpenDate2(true)}} style={styles.document}><Text style={styles.label}>{!!peakDate? peakDate.dateString :'Araç Muayene Tarihi Seçiniz'}</Text><Calendar/></TouchableOpacity>
                    <Text style={styles.tittle}>Araç Kasko Tarihi</Text>
                    <View style={styles.line}></View>
                    <TouchableOpacity onPress={()=>{setOpenDate3(true)}} style={styles.document}><Text style={styles.label}>{!!insuranceDate? insuranceDate.dateString :'Araç Kasko Tarihi Seçiniz'}</Text><Calendar/></TouchableOpacity>
                    <Text style={styles.tittle}>K1 Yetki Belgesi</Text>
                    <View style={styles.line}></View>
                    <TouchableOpacity style={styles.document}><Text style={styles.label}>K1 Yetki Belgesi Ekle(Opsiyonel)</Text><Cloud/></TouchableOpacity>
                    <View style={styles.agreementRow}>
                        <TouchableOpacity onPress={()=>setAgreement(!agreement)}>
                            {agreement ? <Circle /> : <CircleCheck />}
                        </TouchableOpacity>
                        <Text style={styles.agreementText}>Araç Bilgilerim’in doğru olduğunu onaylıyorum ve teklif verdiğim ilan sahipleriyle paylaşılmasına izin veriyorum.</Text>
                    </View>
                    <View style={styles.endRow}>
                        <TouchableOpacity style={styles.cancelButton}><Text style={styles.buttonText}>Vazgeç</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton}><Text style={styles.buttonText}>Kaydet</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <CalendarModal type="one" Save={(value)=>setInsurredDate(value)} state={openDate1} setState={(value)=>setOpenDate1(value)}/>
            <CalendarModal type="one" Save={(value)=>setPeakDate(value)} state={openDate2} setState={(value)=>setOpenDate2(value)}/>
            <CalendarModal type="one" Save={(value)=>setInsurrenceDate(value)} state={openDate3} setState={(value)=>setOpenDate3(value)}/>
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
        color: '#0069B4', 
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

    typeButton:{
        borderColor:'#0069B4',
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        height:65,
        width:110,
        borderRadius:10,
        marginTop:10,
    },
    buttonRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    agreementRow:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    blue:{
        color:'#0069B4'
    },
    agreementText:{
        ...Text16,
        color:'#000000',
        marginLeft:9
    },
    cancelButton:{
        backgroundColor:'#F39200',
        borderRadius:10,
        height:50,
        width:170,
        justifyContent:'center',
        alignItems:'center' 
    },
    saveButton:{
        backgroundColor:'#0069B4',
        borderRadius:10,
        height:50,
        width:170,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        ...Text16,
        color:'white',
    },
    endRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    document:{
        backgroundColor:'white',
        minHeight:60,
        borderRadius:10,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:10,
    },

    label:{
        ...Text16
    }
});

export default AddCars;