import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../../../assets/svg/logo.svg';
import Eye from '../../../assets/svg/eye.svg';
import EyeSlash from '../../../assets/svg/eye-slash.svg';
import Circle from '../../../assets/svg/circle.svg';
import CircleCheck from '../../../assets/svg/circle-check.svg';
import Apple from '../../../assets/svg/apple.svg';
import Facebook from '../../../assets/svg/facebook.svg';
import Google from '../../../assets/svg/google.svg';

import {styles} from './LoginStyles';

const Login = (props) => {
  const [visibleBox1, setVisibleBox1] = useState(true);
  const [phoneMail, setPhoneMail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState('');
  const [isApprove] = useState(false);

  useEffect(() => {
    if (remember) {
      props.navigation.navigate('TabScreens');
    }
    if (remember == true) {
      popup();
    }
  });

  const popup = () => {
    alert('Giriş Başarılı');
  };


  return (
    <View style={{ flex:1,   backgroundColor: '#F7F6FB' }} >
      <View>
          <Logo width={115} height={75} style={styles.Logo} />
          <Text style={styles.logoText}>Kullanıcı Girişi</Text>
      </View>
        <View style={styles.container2}>
          <View style={styles.input1}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.userText}
              placeholder="Telefon Numarası veya Mail Adresi"
              onChangeText={phoneMail => setPhoneMail(phoneMail)}
            />
            <TouchableOpacity onPress={() => setVisibleBox1(!visibleBox1)} />
          </View>
          <View style={styles.password}>
            <TextInput
              autoCapitalize="none"
              onChangeText={password => setPassword(password)}
              secureTextEntry={visibleBox1}
              placeholder="Şifrenizi Giriniz"
              style={styles.passwordText}
            />
            <TouchableOpacity
              onPress={() => setVisibleBox1(!visibleBox1)}
              style={{marginRight: 18}}>
              {visibleBox1 ? (
                <Eye width={18} height={18} />
              ) : (
                <EyeSlash width={18} height={18} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxBody}>
            <TouchableOpacity
              onPress={() => setRemember(!remember)}
              style={styles.checkboxButton}>
              {remember ? <Circle /> : <CircleCheck width={15} height={15} />}
              <Text style={styles.checkboxText}>Beni Hatırla</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={phoneMail.length < 1 || password.length < 1}
            onPress={() => props.navigation.navigate('TabScreens')}
            style={[
              {
                opacity: phoneMail.length < 1 ? 0.5 : 1,
                backgroundColor: isApprove == false ? '#0069B4' : '#F39200',
              },
              styles.loginButton,
            ]}>
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialButton}>
          <TouchableOpacity style={styles.facebookButton}>
            <Facebook witdh={20} height={20} />
            <Text style={styles.buttonText}>Facebook ile</Text>
            <Text style={styles.socialText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <Google witdh={20} height={20} />
            <Text style={styles.buttonText}>Google ile</Text>
            <Text style={styles.socialText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
            <Apple witdh={20} height={20} />
            <Text style={styles.buttonText}>Apple ile</Text>
            <Text style={styles.socialText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Signup')}
          style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>
            Hesabım yok, Kayıt olmak istiyorum
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;
