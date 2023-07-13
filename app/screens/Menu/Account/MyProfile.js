import React from "react";
import { View,Text,TouchableOpacity} from "react-native";

const MyProfil = (props) =>{
    return(
        <View>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}><Text>Geri</Text></TouchableOpacity>
            <Text>asdfsadf</Text>
        </View>
    )
}
export default MyProfil;
