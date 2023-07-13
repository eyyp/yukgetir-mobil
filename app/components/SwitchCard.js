/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text, Switch} from 'react-native';
import React, {useState} from 'react';

 const SwitchCard = (props) => {

  const {title,Exp,conclusion,onChange} = props;

  const [switchValue, setSwitchValue] = useState(conclusion);
  const toggleSwitch = value => {setSwitchValue(value),onChange(value)};

  return (
    <View pointerEvents="none" style={styles.Container}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.exp}>{Exp}</Text>
        </View>
      <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
        thumbColor={'white'}
        trackColor={{false: 'white', true: '#0069B4'}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    Container:{
        marginTop:11,
        flexDirection: 'row',
        justifyContent:'space-between',
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
        color:'#000000'
    },
    exp:{
        fontSize:14,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'#868A9A'
    }
});

export default SwitchCard;




