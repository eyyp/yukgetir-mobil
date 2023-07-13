import React,{useEffect, useState} from 'react';
import { View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import ChevronDown from '../assets/svg/chevron-down'
import ChevronRight from '../assets/svg/chevron-right'

const FilterElements =  props => {
    const {Icon,Element,style,Title} = props;
    const [visible,setVisible] = useState(true);
    return(
        <View style={[styles.inputRow,!!style && style]}> 
            <View style={styles.inputTabBar}>
                <View style={styles.fD_row}>
                    {!!Icon && Icon}
                    <Text style = {[styles.inputTitle,{marginLeft:0}]}>{Title}</Text>
                </View>
                <TouchableOpacity style={styles.arrowButton} onPress={()=>{setVisible(!visible)}}>
                    {visible 
                        ? <ChevronDown style={styles.down}/>
                        : <ChevronRight style={styles.down}/>
                    }
                </TouchableOpacity>
            </View>
            <View style={{display:visible ? 'flex':'none'}}>
                {!!Element && {...Element}}
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

    arrowButton:{
        width:30,
        height:30,
        alignSelf:'flex-end'
    }
});
export default FilterElements;