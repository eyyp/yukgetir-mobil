import React,{useState} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Search from '../../assets/svg/search.svg'
import Header from '../../components/Header';

import MyAdvertCard from '../../components/CargoCards/MyAdvertCard';
const MyAdvert = () => {
  const[category,setCategory] = useState('active');

  return ( 
    <View style={styles.Body}>  
      <Header brad="İlanlarım"/> 
      <View style={styles.container}>   
        <TouchableOpacity style={styles.button}> 
            <Text style={styles.buttonText}>Yeni İlan Ekle</Text>
        </TouchableOpacity>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={()=>setCategory('active')} style={[styles.categoryButton,{borderBottomRightRadius:category == 'active' ? 0:10,borderBottomLeftRadius:category == 'active' ? 0:10}]}>
              <Text style={styles.categoryText}>Aktif Olanlar</Text>
              {category == 'active' ? <View style={styles.selectCategory}></View> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setCategory('expired')} style={[styles.categoryButton,{borderBottomLeftRadius:category == 'expired' ? 0:10,borderBottomRightRadius:category == 'expired' ? 0:10}]}>
              <Text style={styles.categoryText}>Süresi Geçenler</Text>
              {category == 'expired' ? <View style={styles.selectCategory}></View> : null}
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <MyAdvertCard />
          <MyAdvertCard />
          <MyAdvertCard />
          <MyAdvertCard />
          <MyAdvertCard />
          <MyAdvertCard />
          <MyAdvertCard />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Body:{
    flex:1,
    backgroundColor: '#F7F6FB',
  },
  container: {
    backgroundColor: '#F7F6FB',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    height: 50,
    witdh: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0069B4',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize:16,
    lineHeight:16,
    fontFamily:'Proxima',
    color:'#FFFFFF'
  },
  multiRow:{
    backgroundColor:'white',
    borderRadius:10,
    minHeight:50,
    maxHeight:208,
    marginTop:5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    }, 
    shadowOpacity: 0.22, 
    shadowRadius: 2.22, 
    elevation: 3, 
    padding:20 
  }, 
  elementText:{ 
    fontSize:16, 
    fontFamily:'Proxima Nova', 
    fontWeight:'400',
    color:'#000000'
  },
  categoryButton:{
    marginTop:10,
    backgroundColor:'white',
    width:170,
    height:58,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:12
  },
  categoryText:{
    fontSize:16,
    fontFamily:'Proxima',
    fontWeight:'400',
    color:'#000000',
    marginTop:7,
    textAlign:'center'
  },

  selectCategory:{
    backgroundColor:'#0069B4',
    width:170,
    height:3,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10
  },
  filterText:{
    fontSize:16,
    fontFamily:'Proxima Nova',
    color:'#000000'
  },
  selectFilterText:{
    fontSize:16,
    fontFamily:'Proxima Nova',
    color:'#F39200'
  },
  filterRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonRow:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  mB_10:{
    marginBottom:10
  }
});
export default MyAdvert;