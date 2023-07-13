import {View, StyleSheet, Text, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import Geri from '../../assets/svg/geri.svg';
import Person from '../../assets/svg/person.svg';
import TruckFront from '../../assets/svg/truck-front.svg';
import ChatLeftText from '../../assets/svg/chat-left-text.svg';
import QuestionCircle from '../../assets/svg/question.svg';
import Envelope from '../../assets/svg/envelope.svg';
import EmojiSmile from '../../assets/svg/emoji-smile.svg';
import BoxArrowRight from '../../assets/svg/box-arrow-right.svg';
import Bilinova from '../../assets/svg/bilinova.svg';
import PersonCheck from '../../assets/svg/person-check.svg';
import ShieldCheck from '../../assets/svg/shield-check.svg';
import GeoAlt from '../../assets/svg/geo-alt.svg';
import Gear from '../../assets/svg/gear.svg';

import DrawerItem from '../../components/DrawerItem';

 const DrawerScreen = (props) => {
  const defaultButtons = [
    {
      title:'Hesabım',
      page:'Account',
      icon:<Person style={styles.icon}/>
    },
    {
      title:'Araçlarım',
      page:'MyCars',
      icon:<TruckFront style={styles.icon}/>
    },
    {
      title:'Destek Talablerim',
      page:'SupportRequest',
      icon:<ChatLeftText style={styles.icon}/>
    },
    {
      title:'Sıkça Sorulanlar',
      page:'Faq',
      icon:<QuestionCircle style={styles.icon}/>
    },
    {
      title:'Bize Ulaşın',
      page:'ContactUs',
      icon:<Envelope style={styles.icon}/>
    },
    {
      title:'Geri Bildirim',
      page:'Feedback',
      icon:<EmojiSmile style={styles.icon}/>
    }
  ];
  const [isEnabled] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = value => setSwitchValue(value);
  const [checked,setChecked] = useState(true);
  const[buttons,setButtons] = useState(defaultButtons);
  const multiLevel = (page) =>{
     if(page == 'Account'){
        setButtons([
          {
            title:'Profilim',
            page:'MyProfil',
            icon:<PersonCheck style={styles.icon} />
          },
          {
            title:'Şifremi Değiştir',
            page:'PasswordChange',
            icon:<ShieldCheck style={styles.icon}/>
          },
          {
            title:'Adres Listem',
            page:'AddressList',
            icon:<GeoAlt style={styles.icon}/>
          },
          {
            title:'Ayarlar',
            page:'Settings',
            icon:<Gear style={styles.icon}/>
          }
        ])
     }
     else if(page == 'MyCars') {

     }
     else{
      props.navigation.navigate(page)
     } 
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {setButtons(defaultButtons),props.navigation.goBack()}}
          style={styles.backButton}>
          <Geri witdh={22} height={22} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.headerText}>
            {switchValue ? 'Sürücü Modu' : 'Yük Modu'}
          </Text>
          <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
            thumbColor={isEnabled ? '#0069B4' : 'white'}
            trackColor={{false: 'white', true: '#0069B4'}}
          />
        </View>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.buttonContainer}>
          {
            buttons.map((item,index)=>
              <DrawerItem key={index} icon={item.icon} title={item.title} page={item.page} onPress={(page)=>multiLevel(page)}/>
            )
          }
        </View>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => props.navigation.navigate('Login')}>
            <BoxArrowRight width={19} height={19} style={styles.icon} />
            <Text style={styles.menuText}> Çıkış yap </Text>
          </TouchableOpacity>
          <Bilinova width={208} height={14} style={styles.logo} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FB',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  menuContainer: {
    width: '100%',
    height: '93%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonContainer:{
    height:'87%',
    alignItems:'center',
  },
  menuButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#F7F6FB',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignSelf:'center'
  },
  menuText: {
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
    marginVertical: 5,
    marginLeft: 20,
    alignSelf:'center'
  },
  icon:{
    alignSelf:'center',
    marginLeft:83
  },
  buttonText:{
    fontWeight: '400',
    fontSize: 18,
    alignSelf:'center',
    color: '#868A9A',
    marginVertical: 5,
    marginLeft: 5,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 10,
  },
  headerText: {
    fontWeight: ' 400',
    fontSize: 16,
    color: '#0069B4',
    marginRight: 5,
  },
  checkButton:{
    height:'100%',
    width:7,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    alignSelf:'flex-start',
    backgroundColor:'#0069B4'
  }
});

export default DrawerScreen;




