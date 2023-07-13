import React,{useEffect, useState} from 'react';
import { View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CircleDash from '../assets/svg/circle-dash.svg'
import CirclePlus from '../assets/svg/circle-plus.svg'

const Select =  props => {
    const{data,clear} = props;
    const[selected,setSelected] = useState([]);
    useEffect(()=>{
        setSelected([])
    },[clear])

    useEffect(()=>{
        props.onChange(selected)
    },[selected])

    return(
            <>
                <View style={[styles.selectRow,{paddingVertical: (selected.length > 0 ? (selected.length > 2 ? 10 :15):25)}]}>
                    {selected?.map((item,index) =>
                        <TouchableOpacity onPress={()=>setSelected(selected.filter(i => i !== item))} key = {index} style={styles.selected}>
                            <Text style = {styles.selectedText}>{item}</Text>
                            <CircleDash witdh={12} height={12} style={styles.selectedIcon}/>
                        </TouchableOpacity>)}
                </View>
                <ScrollView style={styles.multiRow}>
                    {data?.map((item,index) => {
                            return(
                                <TouchableOpacity key= {index} onPress={() => {selected.includes(item.name) ? setSelected(selected.filter(i => i !== item.name)): setSelected([...selected,item.name])}} style={styles.multiElementRow}>
                                    <Text style={[styles.multiElementText,{color:selected.includes(item.name) ? '#868A9A' : 'black'}]}>{item.name}</Text>
                                    {selected.includes(item.name)
                                        ?   <CircleDash witdh={16} height={16}/>
                                        :   <CirclePlus witdh={16} height={16}/>
                                    }
                                </TouchableOpacity>    
                            )
                        })
                    }
                </ScrollView>
            </>
    )
}

const Text16 = {
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:16,
    lineHeight:16,
}
const styles = StyleSheet.create({
    inputRow:{
        alignSelf:'center',
        width:'90%',
        marginTop:18,
    },
    inputTabBar:{
        flexDirection:'row',
        paddingLeft:5,
        paddingRight:5,
        justifyContent:'space-between',
    },
    pin:{
        alignSelf:'center'
    },
    inputTitle:{
        fontSize:16,
        lineHeight:16,
        fontFamily:"Proxima Nova",
        fontWeight:'400',
        color:'black',
        marginTop:3,
        marginLeft:10
    },
    fD_row:{
        flexDirection:'row'
    },
    inputTitle:{
        fontSize:16,
        lineHeight:16,
        fontFamily:"Proxima Nova",
        fontWeight:'400',
        color:'black',
        marginTop:3,
        marginLeft:10
    },
    down:{
        alignSelf:'flex-end'
    },
    selectRow:{
        flexDirection:'row',
        marginTop:8,
        borderRadius:10,
        backgroundColor:'white',
        justifyContent:'flex-start',
        alignItems:'center',
        flexWrap:"wrap",
        paddingVertical:15,
        paddingHorizontal:20,
    },
    selected:{
        height:20,
        backgroundColor:'#F7F6FB',
        borderRadius:5,
        flexDirection:'row',
        marginRight:5,
        marginTop:10
    },
    selectedText:{
        margin:5,
        lineHeight:12,
        fontSize:12,
    },
    selectedIcon:{
        alignSelf:'center',
        marginRight:5
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

    },
    multiElementRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
        padding:9
    },

    multiElementText:{
        ...Text16,
    },
});
export default Select;