import React,{ useEffect, useState } from 'react'
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FilterElements from '../../../components/FilterElements'
import Header from '../../../components/Header'
import SwitchCard from '../../../components/SwitchCard'
import Bell from '../../../assets/svg/bell.svg'
import Send from '../../../assets/svg/send.svg'
import FileEarMark from '../../../assets/svg/file-earmark.svg'
import Close from '../../../assets/svg/close.svg'
import AgreementSelect from '../../../components/AgreementSelect'
const Settings = (props) => {
    const [sms,setSms] = useState(false);
    const [email,setEmail] = useState(false);
    const [call,setCall] = useState(false);
    const [whatsApp,setWhatsApp] = useState(true);
    const [bell,setBell] = useState(true);
    const [isModal,setisModal] = useState(false);
    const [text,setText] = useState('');
    const [title,setTitle] = useState('');
    const openModal = (text,title)=>{
        setText(text);
        setTitle(title);
        setisModal(true);
    }

    const lorem = "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.";
    return(
        <View style={styles.Body}>
            <ScrollView style={styles.Body_f_Grow} keyboardShouldPersistTaps={'handled'} >
                <Header brad = "Hesabım > Ayarlar" navigation={props.navigation}/>
                <FilterElements Icon={<Send/>} Title="İletişim Ayarlarım" Element={
                    <>
                        <SwitchCard title="SMS Onayı" Exp="SMS ile mesaj gönderilmesi onayı" onChange={(value)=>setSms(value)} conclusion={sms}/>
                        <SwitchCard title="Email Onayı" Exp="Email ile bildirim gönderilmesi onayı" onChange={(value)=>setEmail(value)} conclusion={email}/>
                        <SwitchCard title="Arama Onayı" Exp="Telefon ile aranma onayı" onChange={(value)=>setCall(value)} conclusion={call}/>
                        <SwitchCard title="WhatsApp Onayı" Exp="WhatsApp ile mesaj gönderilmesi onayı" onChange={(value)=>setWhatsApp(value)} conclusion={whatsApp}/>
                    </>
                }/>
                <FilterElements Icon={<Bell/>} Title="Bildirim Ayarlarım" Element={
                <>
                    <SwitchCard title="Mobil Uygulama Onayı" Exp="Mobil bildirim gönderilmesi onayı" onChange={(value)=>setBell(value)} conclusion={bell}/>
                </>}/>
                <FilterElements Icon={<FileEarMark/>} Title="Sözleşmeler ve Bilgilendirme Metinleri" Element={
                    <>
                        <AgreementSelect title="KVKK Metni" onPress={()=>openModal(lorem,'KVK Metni')} />
                        <AgreementSelect title="Aydınlatma Metni" onPress={()=>openModal(lorem,"Aydınlatma Metni")} />
                        <AgreementSelect title="Çerez Politikası" onPress={()=>openModal(lorem,"Çerez Politikası")} />
                        <AgreementSelect title="Rıza Metni" onPress={()=>openModal(lorem,"Rıza Metni")} />
                        <AgreementSelect title="Kullanıcı & Üyelik Sözleşmesi" onPress={()=>openModal(lorem,"Kullanıcı & Üyelik Sözleşmesi")} />
                        <AgreementSelect title="Satış Sözleşmesi" onPress={()=>openModal(lorem,"Satış Sözleşmesi")} />
                        <AgreementSelect title="Gizlik Politikası" onPress={()=>openModal(lorem,"Gizlik Politikası")} />
                    </>
                }/>
            </ScrollView>
            <Modal transparent={true} visible={isModal} animationType="slide" style={styles.backGround}>
                <View style={styles.modalRow}>
                        <View style={styles.agreementPoup}>
                        <TouchableOpacity onPress={()=>setisModal(false)} style={{alignSelf:'flex-end'}}>
                            <Close/>
                        </TouchableOpacity>
                            <ScrollView >
                                <Text style={styles.agreementTitle}>{title}</Text>
                                <Text style={styles.agreementText}>{text}</Text>
                            </ScrollView>
                        </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
    },
    Body_f_Grow:{
        flexGrow: 1
    },
    line:{
        height: 0.5, 
        flex: 1, 
        backgroundColor: '#EBEBEB', 
        width: '90%', 
        alignSelf: 'center', 
        marginTop: 8
    },
    tittle:{
        color: '#0069B4', 
        fontSize: 16,
        fontWeight:'600', 
        fontFamily: "Proxima Nova", 
        marginLeft: 20, 
        marginTop: 10
    },

    backGround:{
        backgroundColor:'#F7F6FB'
    },

    modalRow:{
        height:'90%',
        backgroundColor:'#F7F6FB',
        width:'100%',
        marginTop: 'auto',
        borderRadius:10
    },

    agreementPoup:{
        alignSelf:'center',
        width:'90%',
        height:'99%',
        backgroundColor:'white',
        borderRadius:10,
        padding:20
    },

    agreementText:{
        color:'#000000',
        fontSize:16,
        fontFamily:'Proxima Nova',
    },
    agreementTitle:{
        color:'#000000',
        fontSize:18,
        fontFamily:'Proxima Nova',
        marginBottom:10
    }
});

export default Settings;