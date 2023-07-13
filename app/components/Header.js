import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Geri from '../assets/svg/geri.svg'

const Header = (props) => {
    return(
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
                <Geri />
                <Text style={styles.brad}>{props.brad}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#F7F6FB',
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:10,
        paddingRight:20
    },
    backButton:{ 
        flexDirection: 'row', 
    },
    brad:{
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        fontSize:14,
        color:'#868A9A',
        marginLeft:10,
        alignSelf:'center'
    }
});

export default Header;