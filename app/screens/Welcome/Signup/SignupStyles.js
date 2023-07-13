/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: '#F7F6FB',
  },
  Container: {
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    zIndex: 5,
  },
  tittle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
    marginVertical: 5,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  Logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  singularButton: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
    width: '49%',
  },
  singularText: {
    fontWeight: '600',
    fontSize: 14,
  },
  corporateButton: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
    width: '49%',
  },
  corparateText: {
    fontWeight: '600',
    fontSize: 14,
  },
  inputRow: {
    width: '85%',
    alignSelf: 'center',
  },
  nameSurnameRow: {
    flexDirection: 'row',
    padding: 3,
    paddingVertical: 0,
    height: 50,
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
  },
  inputNameSurname: {
    width: '73%',
    marginLeft: 15,
    fontWeight: '400',
    fontFamily: 'Proxima Nova',
  },
  passwordAgainInput: {
    width: '73%',
    marginLeft: 52,
    fontWeight: '400',
  },
  phoneIcon: {
    width: '73%',
    marginLeft: 0,
    fontWeight: '400',
  },
  flapRow: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 15,
    marginTop: 23,
    alignItems: 'center',
  },
  phoneText: {
    lineHeight: 16,
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
    alignSelf: 'center',
    fontFamily: 'Proxima Nova',
  },

  phone: {
    width: '73%',
    marginLeft: 3,
    fontWeight: '400',
    fontFamily: 'Proxima Nova',
  },

  phoneN: {
    marginLeft: 2,
    fontWeight: '500',
    color: 'black',
  },

  checkboxBody: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkboxText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Proxima-Nova',
  },

  agreementText: {
    color: 'black',
    marginLeft: 10,
    fontFamily: 'Proxima Nova',
    fontSize: 14,
  },

  agreementButtonText: {
    color: '#0069B4',
    top: 4,
    fontSize: 14,
  },

  signUpButton: {
    backgroundColor: '#F39200',
    width: '100%',
    height: 50,
    marginBottom: 5,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  signUpButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '400',
    lineHeight: 50,
    fontSize: 18,
  },

  login: {
    color: '#0069B4',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'ProximaNova-Nova',
  },

  loginButton: {
    marginLeft: 65,
    marginTop: 50,
    marginBottom: 15,
  },

  inputButton: {
    position: 'absolute',
    width: 16,
    height: 16,
    marginLeft: 315,
    marginTop: 15,
    zIndex: 9999,
  },

  flap: {
    marginBottom: 2,
  },
});
