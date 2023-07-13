/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {emailRegex, phoneRegex} from './Regex';
export const signUpValidation = (
  nameSurname,
  userName,
  email,
  phone,
  password,
  passwordAgain,
) => {
  try {
    var response = {situation: true};
    if (nameSurname.length < 1) {
      console.log();
      response = {
        nameSurname: 'Lütfen bu alanı doldurunuz',
      };
    }

    if (email.length < 1) {
      response = {
        ...response,
        email: 'Lütfen bu alanı doldurunuz',
        situation: false,
      };
    } else {
      if (!emailRegex.test(email)) {
        response = {
          ...response,
          email: 'Emaili doğru girdiğinizden emin olun',
          situation: false,
        };
      }
    }

    if (phone.length < 1) {
      response = {
        ...response,
        phone: 'Lütfen bu alanı doldurunuz',
        situation: false,
      };
    } else {
      if (!phoneRegex.test(phone)) {
        response = {
          ...response,
          phone: 'Telefonunuzu doğru girdiğinizden emin olun',
          situation: false,
        };
      }
    }

    if (userName.length < 1) {
      response = {
        ...response,
        userName: 'Lütfen bu alanı doldurunuz',
        situation: false,
      };
    }
    if (password.length < 6 || passwordAgain.length < 6) {
      response = {
        ...response,
        password: 'Şifre en az 6 karakterli olmalı. ',
        situation: false,
      };
    } else {
      if (password != passwordAgain) {
        response = {
          ...response,
          password: 'Şifreler eşleşmiyor.',
          situation: false,
        };
      }
    }

    if (response?.situation != false) {
      response = {
        message: 'İşlem Başarılı',
        situation: true,
      };
    }
    return response;
  } catch (error) {
    console.log('error');
    response = {
      Message: 'Hata lütfen tekrar deneyin',
      situation: true,
    };
    return response;
  }
};
