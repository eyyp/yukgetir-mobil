import React,{useEffect, useState} from 'react';
import { View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CircleDash from '../assets/svg/circle-dash.svg'
import CirclePlus from '../assets/svg/circle-plus.svg'
import ChevronDown from '../assets/svg/chevron-down'
import ChevronRight from '../assets/svg/chevron-right'
const OneSelect =  props => {

    const{data,clear,title,error} = props;
    const[selected,setSelected] = useState('');
    const[visible,setVisible] = useState(false);

    useEffect(()=>{
        setSelected([])
    },[clear])

    useEffect(()=>{
        props.onChange(selected)
    },[selected])
    useEffect(()=>{
        setSelected(data[0].name)
    },[])
    return(
        <>
            <TouchableOpacity onPress={()=>setVisible(!visible)} style={[styles.selectRow,{borderColor: !!error ? '#E30A17':'white'}]}>
                <View style={styles.elementRow}> 
                    { !!selected ? <Text style={styles.Text}>{selected}</Text> : <Text style={styles.title}>{title}</Text> }
                </View>
                {visible 
                    ? <ChevronDown style={styles.arrowIcon}/>
                    : <ChevronRight style={styles.arrowIcon}/>
                }
            </TouchableOpacity>
            { !!error &&  <Text style={styles.errorText}>{error}</Text>}
            <ScrollView style={[styles.multiRow,{display:visible ? 'flex':'none'}]}>
                {data?.map((item,index) => {
                        return(
                            <TouchableOpacity key= {index} onPress={() => {selected.includes(item.name) ? setSelected('') : setSelected(item.name)}} style={styles.multiElementRow}>
                                <Text style={[styles.multiElementText,{color:selected.includes(item.name) ? '#868A9A' : 'black'}]}>{item.name}</Text>
                                {selected == item.name
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
    selectRow:{
        flexDirection:'row',
        marginTop:8,
        borderRadius:10,
        minHeight:50,
        minWidth:310,
        backgroundColor:'white',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'white'
    },
    arrowIcon:{
        alignSelf:'center',
        marginRight:10
    },

    elementRow:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        maxWidth:'80%',
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

    title:{
        ...Text16,
        marginLeft:10,
        width:280
    },
    Text:{
        ...Text16,
        marginLeft:10,
        color:'black',
    },
    errorText:{
        color:'#E30A17'
    }
});
export default OneSelect;