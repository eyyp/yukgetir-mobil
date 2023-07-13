import React,{ useEffect, useState } from 'react'
import {View, Text, TouchableOpacity,Modal,StyleSheet} from 'react-native'
import Calendar from 'react-native-calendars/src/calendar'
import { oneClickDate, dateRange, dateSettings } from '../helper/date'

const CalendarModal = (props) => {
    const[counter,setCounter] = useState(0);
    const[oneDate,setOneDate] = useState({});
    const[secondDate,setSecondDate] = useState({});
    const {type,state,Save,setState} = props;
    useEffect(()=>{
        dateSettings()
        setSecondDate({}),
        setOneDate({})
    },[])

    if(type == 'two'){
        return(
            <Modal transparent={true} visible={state} animationType="slide" style={styles.backGround}>
                <View style={styles.dateRow}>
                    <Calendar 
                        style={styles.calendar}
                        onDayPress={date => {setCounter(counter + 1 ), counter % 2 == 1 ? setSecondDate(date):setOneDate(date)}}
                        markingType={'period'}
                        markedDates={counter % 2 == 1 ? oneClickDate(oneDate) : dateRange(oneDate,secondDate)}
                    />
                    <View style={styles.dateButtonRow}>
                        <TouchableOpacity onPress={()=>{ setCounter(0), setOneDate(''), setSecondDate(''), Save(oneDate,secondDate), setState(false)}} style={styles.cancelButton}>
                            <Text style={styles.dateButtonText}>Vazgeç</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Save(oneDate,secondDate),setState(false)}} style={styles.saveButton}>
                            <Text style={styles.dateButtonText}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
    else{
        return(
            <Modal transparent={true} visible={state} animationType="slide" style={styles.backGround}>
                <View style={styles.dateRow}>
                    <Calendar 
                        style={styles.calendar}
                        onDayPress={date => setOneDate(date)}
                        markingType={'period'}
                        markedDates={oneClickDate(oneDate)}
                    />
                    <View style={styles.dateButtonRow}>
                        <TouchableOpacity onPress={()=>{setOneDate(''),Save(oneDate),setState(false)}} style={styles.cancelButton}>
                            <Text style={styles.dateButtonText}>Vazgeç</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ setState(false), Save(oneDate)}} style={styles.saveButton}>
                            <Text style={styles.dateButtonText}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        ) 
    }
}
const Text16 ={
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:16,
    lineHeight:16,
}
export const styles = StyleSheet.create({
    
    dateButtonText:{
        ...Text16,
        color:'white',
     },

     calendar:{
        borderRadius:10,
        elevation:2,
        marginHorizontal:19,
        marginBottom:15
     },

    backButton:{ 
        flexDirection: 'row', 
    },
    
    backGround:{
        backgroundColor:'#F7F6FB'
    },
    
    dateRow:{
        height:'68%',
        backgroundColor:'#F7F6FB',
        width:'100%',
        marginTop: 'auto',
        borderRadius:10
    },

    dateButtonRow:{
        justifyContent:'space-between',
        flexDirection:'row'
    },

    cancelButton:{
        backgroundColor:'#F39200',
        width:102,
        height:30,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginLeft:156
    },

    saveButton:{
        backgroundColor:'#0069B4',
        width:102,
        height:30,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginRight:20
    },

});
export default CalendarModal;