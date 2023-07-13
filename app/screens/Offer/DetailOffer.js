import React,{useEffect, useState} from 'react'
import {View, Text,StyleSheet,Modal, TouchableOpacity,ScrollView} from 'react-native'
import Header from '../../components/Header'
import FilterElements from '../../components/FilterElements'
import Close from '../../assets/svg/close.svg'
import BlueClose from '../../assets/svg/blue-close.svg'
import OneSelect from '../../components/OneSelect'
const DetailOffer = (props) => {
    const[confirmationCount,setConfirmationCount]= useState();
    const[clear,setClear] = useState(0);
    const[model,setModel] = useState([]);
    const[visible,setVisible] = useState(false);
    const[selected,setSelected] = useState(false);
    const[visible2,setVisible2] = useState(false);
    const[error,setError] = useState('');
    const vehicle = {
        no:12132245,   
    }

    const dataVehicleType = [{name:'Araç No:15613'},{name:'Araç No:17613'},{name:'Araç No:15913'},{name:'Araç No:15113'},{name:'Araç No:15618'},{name:'Araç No:15619'},{name:'Araç No:15612'},{name:'Araç No:15614'}]
    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <Header brad = " Güncel İlanlar > İlan Detayı" navigation={props.navigation}/>
                <View style={styles.Container}>
                    <Text style={styles.tittle}>İlan No:{!!vehicle.no && vehicle.no}</Text>
                    <View style={styles.line}></View>
                </View>
                <FilterElements Title="Yük Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>İlan No</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Yük Cinsi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Yükün Tanımı</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Yükleme Şekli</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Boşaltma şekli</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Mesafe</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Ağırlık</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Ebat</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="Araç Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Kiralama Cinsi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Araç Tipi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Donanım Özellikleri</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="Ödeme Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Verilen Fiyat</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Ödeme Şekli</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="Tarih & Zaman Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Yükleme Tarih Aralağı</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Boşaltma Zamanı</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                </>}/>
                <FilterElements Title="Adres Detayları" Element={
                <>
                    <View style={styles.element}>
                        <Text style={styles.title}>Yükleme Adresi</Text>
                        <Text style={styles.valueText}>Mercedes</Text>
                    </View>
                    <View style={styles.element}>
                        <Text style={styles.title}>Boşaltma Adresi</Text>
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
                <Text style={styles.warningText}>*** Adres ve İletişim detayları, teklif talebiniz ilan sahibi tarafından kabul edildikten sonra gösterime açılır.</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Vazgeç</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setVisible(true)} style={styles.sendButton}>
                        <Text style={styles.buttonText}>Teklif Gönder</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.takiIt}>
                    <Text style={styles.buttonText}>Teklifi Geri Al</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal transparent={true} visible={visible} animationType="slide" style={styles.backGround}>
                <View style={{width:'100%',height:'100%',backgroundColor:'black',opacity:0.7}}>
                </View>
                <View style={styles.dateRow}>
                        <View style={styles.topRow}>
                            <View style={styles.topTitle}>
                                <Text style={styles.modallabel}>Teklif Gönder / Araç Seçimi</Text>
                                <View style={styles.modalLine}></View>
                            </View>
                            <TouchableOpacity onPress={()=>setVisible(false)}>
                                <BlueClose />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalTitle}>Araç Seçimi</Text>
                        <OneSelect data={dataVehicleType} onChange={(selected)=>setModel(selected)} clear={clear} title="İlana Teklif vereceğiniz aracı seçiniz" />
                        <View style={styles.modalButtonRow}>
                            <TouchableOpacity onPress={()=>setVisible(false)} style={styles.modalCancel}>
                                <Text style={styles.buttonText}>Vazgeç</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{setVisible(false),setVisible2(true)}} style={styles.modalSave}>
                                <Text style={styles.buttonText}>Kaydet</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </Modal>
            <Modal transparent={true} visible={visible2} animationType="slide" style={styles.backGround}>
                <View style={styles.blur}>
                </View>
                <View style={styles.dateRow}>
                        <View style={styles.topRow}>
                            <View style={styles.topTitle}>
                                <Text style={styles.modallabel}>Teklif Gönder / Araç Seçimi</Text>
                                <View style={styles.modalLine}></View>
                            </View>
                            <TouchableOpacity onPress={()=>setVisible2(false)}>
                                <BlueClose />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalTitle}>Sevkiyatı Başlatmak İstiyormusunuz</Text>
                        <Text style={styles.information}>Onayla butonuna bastığınız anda ilan sahibine mail ve sms ile bilgilendirme yapılacaktır.</Text>
                        <View style={styles.modalButtonRow}>
                            <TouchableOpacity onPress={()=>setVisible2(false)} style={styles.modalCancel}>
                                <Text style={styles.buttonText}>Vazgeç</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setVisible2(false)} style={styles.modalSave}>
                                <Text style={styles.buttonText}>onayla</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </Modal>
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
    },
    warningText:{
        fontSize:14,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'#F39200',
        alignSelf:'center'        
    },

    cancelButton:{
        backgroundColor:'#F39200',
        borderRadius:10,
        width:170,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonRow:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:17,
        marginBottom:10
    },
    sendButton:{
        backgroundColor:'#0069B4',
        borderRadius:10,
        width:170,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    takiIt:{  
        backgroundColor:'#0069B4',  
        borderRadius:10,  
        width:350,  
        height:50,  
        alignItems:'center',  
        justifyContent:'center', 
        alignSelf:'center',  
        marginTop:10 
    },
    buttonText:{
        fontSize:16,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'white'
    },
    backGround:{
        backgroundColor:'',
        opacity:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    dateRow:{
        minHeight:264,
        backgroundColor:'#F7F6FB',
        minWidth:350,
        maxWidth:350,
        borderRadius:10,
        position:'absolute',
        alignSelf:'center',
        marginTop:230,
        paddingHorizontal:20,
        paddingTop:25,
        zIndex:999
    },
    modalCancel:{
        backgroundColor:'#F39200',
        borderRadius:10,
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    modalSave:{
        backgroundColor:'#0069B4',
        borderRadius:10,
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    modalButtonRow:{
        flexDirection:'row',
        width:'100%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:17,
        marginBottom:10
    },
    modalTitle:{
        fontSize:16,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'#000000',
        marginTop:19,
    },
    modallabel:{
        fontSize:18,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'#0069B4'
    },
    topRow:{
        flexDirection:'row',
        width:'95%',
        height:40
    },
    topTitle:{
        justifyContent:'flex-end',
        width:'100%'
    },
    blur:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        opacity:0.8
    },
    modalLine:{
        width:'107%',
        height:1,
        backgroundColor:'#0069B4'
    },

    information:{
        ...Text16,
        marginTop:10
    }
});

export default DetailOffer;