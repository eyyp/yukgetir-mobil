/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: Dimensions.get('window').width / 3,
    borderRadius:10
  },
  cardContainer: {
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  way: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    marginLeft: 5,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginRight: 5,
    fontFamly: 'ProximaNova-Nova',
  },
  icon: {
    marginLeft: 10,
    color: '#0069B4',
  },
  advertsDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  textRight: {
    fontSize: 14,
    fontWeight: '400',
    color: '#868A9A',
    marginLeft: 5,
  },
  textLeft: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0069B4',
    marginLeft: 5,
  },
  date: {
    size: 14,
    color: '#868A9A',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  detailButton: {
    width: 83,
    height: 30,
    backgroundColor: '#F39200',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    size: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  offerButton: {
    width: 127,
    height: 30,
    backgroundColor: '#0069B4',
    borderRadius: 5,
    marginRight: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  iconBottom: {
    marginLeft: 10,
    color: '#868A9A',
  },
  pin:{
    marginLeft:11
  },
  cancelButton:{
    width: 60,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor:'#868A9A',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  cancelText: {
    size: 14,
    color: '#868A9A',
    textAlign: 'center',
  },
  
});
