import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity,TextInput,ActivityIndicator} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Geri from  '../../../assets/svg/geri.svg';
import Logo from '../../../assets/svg/logo.svg';
import Flag from '../../../assets/svg/flag.svg';
import Circle from '../../../assets/svg/circle.svg';
import CircleCheck from '../../../assets/svg/circle-check.svg';
import CheckFill from '../../../assets/svg/check-fill.svg';
import {styles} from './SignupStyles';
import TextInputField from '../../../components/TextInputField';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signUpValidation} from '../../../helper/sigUpValidation';
const Signup = (props) => {


  const[userType,setUserType] = useState(0);
  const[nameSurname, setNameSurname] = useState("");
  const[userName,setUserName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[password, setPassword] = useState("");
  const[passwordAgain, setPasswordAgain] = useState("");
  const[visibleBox1, setVisibleBox1] = useState(false);
  const[visibleBox2, setVisibleBox2] = useState(false);
  const[isApprove, setisApprove] = useState(false);
  const[isApproveKVKK, setisApproveKVKK] = useState(false);
  const[ispromotion,setisPromotion] = useState(false);
  const[validateResponese,setValidateResponse] = useState();
  const[control,setControl] = useState(false);

  const placeholder = {
    nameSorname:'İsim Soyisim',
    userName:'Kullanıcı Adı',
    phone:'Cep Telefonu',
    mail:'Mail Adresi',
    password:'Şifrenizi Giriniz',
    passwordAgain:'Şifrenizi Tekrar Giriniz',
  };

  const Control = async () => {
    const response = await signUpValidation(nameSurname,userName,email,phone,password,passwordAgain);
    if (!response.situation){
      setValidateResponse(response);
    }
    else {
      setControl(true);
      setTimeout(() => {
        props.navigation.navigate('Login');
      }, 2000);
    }
  };


  return (
    <View style={styles.Body}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <SafeAreaView style={styles.Container}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.backButton}>
            <Geri witdh={ 22 } height={ 22 }/>
          </TouchableOpacity>
          <Logo width={115} height={75} style={styles.Logo} />
          <Text style={styles.tittle}>Üye Ol</Text>
        </SafeAreaView>
        <View style={styles.tabRow}>
          <TouchableOpacity onPress={() => setUserType(0)} style={[{borderColor:userType == 0 ? '#0069B4' : '#EBEBEB',backgroundColor:userType == 0 ? '#0069B4' : '#FFFFFF'},styles.singularButton]}>
            <Text style={[{ color: userType == 0 ? 'white' : '#868A9A'},styles.singularText]}>Bireysel Üyelik</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setUserType(1)} style={[{borderColor: userType == 1 ? '#0069B4' : '#EBEBEB',backgroundColor:userType == 1 ? '#0069B4' : '#FFFFFF'},styles.corporateButton]}>
            <Text style={[{ color: userType == 1 ? 'white' : '#868A9A'},styles.corparateText]}>Kurumsal Üyelik</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <TextInputField onChangeText={(res)=>{setNameSurname(res);}} onPress={()=>setNameSurname('')} label={placeholder.nameSorname} errorText = {validateResponese?.nameSurname} value={nameSurname} button = {'Close'}/>
          <TextInputField onChangeText={(res)=>{setUserName(res);}} onPress={()=>setUserName('')} label={placeholder.userName} errorText = {validateResponese?.userName} value={userName} button = {'Restart'}/>
          <TextInputField onChangeText={(res)=>{setPhone(res);}} onPress={()=>setPhone('')} maxLength={13} label={placeholder.phone} errorText = {validateResponese?.phone} value={phone} button = {'Close'} inputStyle={{paddingLeft:75}} component={<View style={styles.flapRow}><Flag width={22} height={14} style={styles.flap}/><Text style={styles.phoneText}>+90</Text></View>}/>
          <TextInputField onChangeText={(res)=>{setEmail(res);}} onPress={()=>setEmail('')} label={placeholder.mail} errorText = {validateResponese?.email} value={email} button = {'Close'}/>
          <TextInputField onChangeText={(res)=>{setPassword(res);}} onPress={()=>setVisibleBox1(!visibleBox1)} label={placeholder.password} errorText = {validateResponese?.password} value={password} button = {visibleBox1 ? 'Eye' : 'EyeSlash'} autoCapitalize="none" secureTextEntry={!visibleBox1}/>
          <TextInputField onChangeText={(res)=>{setPasswordAgain(res);}} onPress={()=>setVisibleBox2(!visibleBox2)} label={placeholder.passwordAgain} errorText = {validateResponese?.password} value={passwordAgain} button = {visibleBox2 ? 'Eye' : 'EyeSlash'}autoCapitalize="none" secureTextEntry={!visibleBox2}/>
          <View style={styles.checkboxBody}>
            <TouchableOpacity
              onPress={() => setisApprove(!isApprove)}
              style={styles.checkboxButton}>
              {isApprove ? <CircleCheck width={16} height={16} /> : <Circle />}
            </TouchableOpacity>
              <Text style={styles.agreementText}>
                <TouchableOpacity>
                  <Text style={styles.agreementButtonText}>
                    Kullanıcı &  Üyelik Sözleşmesi
                  </Text>
                </TouchableOpacity>' ni okudum ve kabul ediyorum.
              </Text>
          </View>
          <View style={styles.checkboxBody}>
            <TouchableOpacity
                onPress={() => setisApproveKVKK(!isApproveKVKK)}
                style={styles.checkboxButton}>
                  {isApproveKVKK ?  <CircleCheck width={16} height={16} /> : <Circle /> }
                </TouchableOpacity>
              <Text style={styles.agreementText}>
                <TouchableOpacity>
                  <Text style={styles.agreementButtonText}>
                    KVKK Metni
                  </Text>
                </TouchableOpacity>'ni ve{'\t'}
                <TouchableOpacity>
                <Text style={styles.agreementButtonText}>
                    Aydınlatma Metni
                  </Text>
                </TouchableOpacity>
                ' ni okudum ve kabul ediyorum.
              </Text>
          </View>
          <View style={styles.checkboxBody}>
              <TouchableOpacity
                onPress={() => setisPromotion(!ispromotion)}
                style={styles.checkboxButton}>
                  {ispromotion ? <CircleCheck width={16} height={16} /> : <Circle /> }
              </TouchableOpacity>
              <Text style={styles.agreementText}>
                Kampanya ve tanımlar için Email, Telefon ve Sms ile iletişim kurulmasını kabul ediyorum.
              </Text>
          </View>
          <TouchableOpacity onPress={() => Control()} style={[styles.signUpButton,{ opacity:(isApprove && isApproveKVKK) ? 1 : 0.4,backgroundColor:control ? '#1DBF73' : '#F39200'}]} >
              { control
              ? <CheckFill width={24} height={24} style={styles.flap}/>
              : <Text style={styles.signUpButtonText}>Üye Ol</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={styles.loginButton}>
            <Text style={styles.login}>Zaten üyeyim Giriş Yapmak İstiyorum</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
