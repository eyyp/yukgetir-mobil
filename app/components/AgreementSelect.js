import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import RightBox from '../assets/svg/right-box.svg'

 const AgreementSelect = (props) => {

  const {title,onPress} = props;

  return (
    <View style={styles.Container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>onPress()}>
            <Text style={styles.buttonText}>Oku</Text>
            <RightBox style={styles.mT_2}/>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    Container:{
        marginTop:11,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:350,
        height:50,
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:9
    },
    title:{
        fontSize:16,
        lineHeight:16,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'#868A9A'
    },
    button:{
        flexDirection:'row',
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Proxima Nova',
        color:'#000000',
        marginRight:10,
    },
    mT_2:{
        marginTop:2
    }
});

export default AgreementSelect;