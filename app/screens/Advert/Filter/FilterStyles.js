import { StyleSheet } from "react-native";

const Text16 ={
    fontFamily:'Proxima Nova',
    fontWeight:'400',
    fontSize:16,
    lineHeight:16,
}
export const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
    },
    Container:{
        padding: 20
    },
    backButton:{ 
        flexDirection: 'row', 
    },
    Body_f_Grow:{
        flexGrow: 1
    },
    line:{
        height: 0.5, 
        flex: 1, 
        backgroundColor: '#EBEBEB', 
        width: '90%', 
        alignSelf: 'center', 
        marginTop: 8
    },
    tittle:{
        color: '#0069B4', 
        fontSize: 16,
        fontWeight:'600', 
        fontFamily: "Proxima Nova", 
        marginLeft: 20, 
        marginTop: 10
    },
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

    down:{
        alignSelf:'flex-end'
    },
    buttonRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:8,
    },

    doubleInput:{
        justifyContent:'space-between',
        marginTop:8,
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

    multiNonElementText:{
        ...Text16,
        color:'#868A9A',
    },

    multiElementText:{
        ...Text16,
        color:'black'
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

    button:{
        backgroundColor:'white',
        width:170,
        height:50,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#0069B4',
        justifyContent:'center',
        alignItems:'center',
    },

    clearButton:{
        backgroundColor:'#F39200',
        width:170,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:21
    },

    filterButton:{
        backgroundColor:'#0069B4',
        width:170,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:21
    },

    clearButtonText:{
        ...Text16,
        color:'white'
    },

    buttonText:{
        fontSize:16,
        fontFamily:'Proxima Nova',
        fontWeight:'400',
        color:'#868A9A'
    },
    fD_row:{
        flexDirection:'row'
    },

    w_48:{
        width:'48%'
    },

    w_48_mL_10:{
        width:'48%',
        marginLeft:10
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

     dateButtonText:{
        ...Text16,
        color:'white',
     },

     calendar:{
        borderRadius:10,
        elevation:2,
        marginHorizontal:19,
        marginBottom:15
     }
});