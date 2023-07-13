/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Geri from '../../../assets/svg/geri.svg';
import Logo from '../../../assets/svg/logo.svg';
import {styles} from './ForgotPasswordStyles';

const ForgotPassword = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Geri witdh={22} height={22} />
      </TouchableOpacity>
      <View>
        <Logo width={115} height={75} style={styles.Logo} />
        <Text style={styles.logoText}>Şifremi Unuttum</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button}>
          <TextInput
            style={styles.input}
            placeholder="Telefon Numarası veya Mail Adresi"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPass}>
          <Text style={styles.inputPass}>Şifremi Gönder</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Hesabım yok, Kayt Olmak istiyorum</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;
