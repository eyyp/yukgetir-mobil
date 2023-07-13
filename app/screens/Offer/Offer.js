import React,{useState} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Search from '../../assets/svg/search.svg'
import Header from '../../components/Header';
import Right from '../../assets/svg/chevron-right.svg'
import DetailAdvertCard from '../../components/CargoCards/DetailAdvertCard';
const Offer = () => {
  const[filter,setFilter] = useState('all');
  const[category,setCategory] = useState('shipment');
  const[visible,setVisible] = useState(false);

  const filterText = () =>{
    if(filter == 'all')
      return 'Tümü Göster';
    else if(filter == 'completed')
      return 'Sevkiyatı tamamlananlar';
    else if(filter == 'confirmation')
      return 'Teslimat Onayı Bekleyenler';
    else if(filter == 'continue')
      return 'Sevkiyatı Devam Edenler';
  }

  return ( 
    <View style={styles.Body}>  
      <Header brad="Giden Tekliflerim > Sevkiyatta Olanlar"/> 
      <View style={styles.container}>   
        <View style={styles.search}> 
          <TextInput style={styles.searchInput} placeholder="İlan Ara..." /> 
          <TouchableOpacity style={styles.searchButton}> 
            <Search width={20} height={20} /> 
          </TouchableOpacity> 
        </View> 
        <TouchableOpacity onPress={()=>setVisible(!visible)} style={styles.search}> 
          <View style={styles.filterRow}> 
            <Text style={styles.filterText}>Filtrele: </Text>
            <Text style={styles.selectFilterText}>{filterText()}</Text>
          </View>
          <Right/>
        </TouchableOpacity>
        <ScrollView  style={[styles.multiRow,{display:visible ? 'flex':'none'}]}>
          <TouchableOpacity onPress={()=>setFilter('continue')} style={styles.mB_10}>
            <Text style={[styles.elementText,{color:filter == 'continue' ? '#868A9A':'#000000'}]}>Sevkiyatı Devam Edenler</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setFilter('confirmation')} style={styles.mB_10}>
            <Text style={[styles.elementText,{color:filter == 'confirmation' ? '#868A9A':'#000000'}]}>Teslimat Onayı Bekleyenler</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setFilter('completed')} style={styles.mB_10}>
            <Text style={[styles.elementText,{color:filter == 'completed' ? '#868A9A':'#000000'}]}>Sevkiyatı Tamamlananlar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setFilter('all')} style={styles.mB_10}>
            <Text style={[styles.elementText,{color:filter == 'all' ? '#868A9A':'#000000'}]}>Tümünü Göster</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={()=>setCategory('shipment')} style={[styles.categoryButton,{borderBottomRightRadius:category == 'shipment' ? 0:10,borderBottomLeftRadius:category == 'shipment' ? 0:10}]}>
              <Text style={styles.categoryText}>{'  Sevkiyatta \n Olanlar'} (3)</Text>
              {category == 'shipment' ? <View style={styles.selectCategory}></View> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setCategory('accept')} style={[styles.categoryButton,{borderBottomLeftRadius:category == 'accept' ? 0:10,borderBottomRightRadius:category == 'hold' ? 0:10}]}>
              <Text style={styles.categoryText}>{'  Kabul \n Edilenler'} (1)</Text>
              {category == 'accept' ? <View style={styles.selectCategory}></View> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setCategory('hold')} style={[styles.categoryButton,{borderBottomLeftRadius:category == 'hold' ? 0:10,borderBottomRightRadius:category == 'hold' ? 0:10}]}>
              <Text style={styles.categoryText}>{'  Beklemede \n Olanlar'} (1)</Text>
              {category == 'hold' ? <View style={styles.selectCategory}></View> : null}
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <DetailAdvertCard situation={'succes'}/>
          <DetailAdvertCard situation={'danger'}/>
          <DetailAdvertCard situation={'normal'}/>
          <DetailAdvertCard situation={'normal'}/>
          <DetailAdvertCard situation={'normal'}/>
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
  search: {
    flexDirection: 'row',
    padding: 20,
    height: 50,
    witdh: '100%',
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
  searchInput: {
    fontSize: 16,
    fontWeight: '400',
    width: '73%',
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
    width:110,
    height:58,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems:'center',
    justifyContent:'space-between'
  },
  categoryText:{
    fontSize:16,
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    color:'#000000',
    marginTop:7,
    textAlign:'center'
  },

  selectCategory:{
    backgroundColor:'#0069B4',
    width:110,
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
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  mB_10:{
    marginBottom:10
  }
});
export default Offer;