import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, Modal,StyleSheet} from 'react-native'

const AddressCard = (props) => {
    const {title,exp,user} = props;
    return(
        <View style={styles.addressCard}>
            <Text style={styles.addressTitle}>{title}</Text>
            <Text style={styles.addressExp}>{exp}</Text>
            <Text style={styles.addressUser}>{user}</Text>
            <View style={styles.cardButton}>
                <TouchableOpacity style={styles.addressDelete}><Text style={styles.addressButtonText}>Sil</Text></TouchableOpacity>
                <TouchableOpacity style={styles.addressEdit}><Text style={styles.addressButtonText}>Düzenle</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const Text16 = {
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:16,
    lineHeight:16,
}
const Text14 = {
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:14,
    lineHeight:14,
}

const styles = StyleSheet.create({
    addressCard:{
        width:'100%',
        height:121,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginTop:10,
        paddingTop:20,
        paddingLeft:20,
        paddingBottom:10,
        alignSelf:'center'
    },
    addressTitle:{
        ...Text14,
        color:'#0069B4'
    },

    addressExp:{
        ...Text14,
        marginTop:5,
        color:'#000000'
    },

    addressUser:{
        ...Text14,
        marginTop:5
    },
    
    cardButton:{
        flexDirection:'row',
        marginTop:7,
        justifyContent:'flex-end',
        marginRight:20
    },

    addressDelete:{
        backgroundColor:'#F39200',
        width:37,
        height:30,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },

    addressDeleteText:{
        ...Text16,
        color:'#FFFFFF'
    },

    addressEdit:{
        backgroundColor:'#0069B4',
        width:78,
        height:30,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },

    addressButtonText:{
        ...Text16,
        color:'#FFFFFF'
    },

});
export default AddressCard;