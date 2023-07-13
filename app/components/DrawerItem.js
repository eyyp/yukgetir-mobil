import React, { useEffect } from "react";
import { TouchableOpacity,View, StyleSheet, Text, Switch } from "react-native";

const DrawerItem = (props) =>{
    return(
        <TouchableOpacity style={styles.menuButton} onPress={()=> props.onPress(props.page)}> 
            {props.route == props.page && <View style={styles.checkButton}/>}          
            {props.icon}
            <Text style={styles.menuText}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles =StyleSheet.create({
    menuButton: {
        width: '90%',
        height: 50,
        backgroundColor: '#F7F6FB',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignSelf:'center'
    },
    menuText: {
        fontWeight: '400',
        fontSize: 18,
        color: 'black',
        marginVertical: 5,
        marginLeft: 20,
        alignSelf:'center'
    },
});
export default DrawerItem;