import React from "react";
import {Image,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native'
const TextInputComponent = ({
    iconLeft,
    iconRight,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    secureTextEntry = false,
    onPressImRight,
}:{
    iconLeft?: any;
    iconRight?: any;
    value: string;
    onChangeText: any;
    placeholder: string;
    keyboardType?: any;
    secureTextEntry?:boolean;
    onPressImRight?: any;
}) =>{
    
    return(
        <View style = {styles.StyleInput}>
            {iconLeft && <Image source={iconLeft} style ={styles.icon}/>}
            <TextInput style ={styles.tpcontainer} placeholder={placeholder} value ={value} onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
            {iconRight && (
                <TouchableOpacity onPress={onPressImRight}>
                <Image source={iconRight} style ={styles.icon}/>
                </TouchableOpacity>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    StyleInput:{
        borderWidth: 1,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        width:'80%',
        alignSelf:'center',
        borderRadius:10,
    },
    icon:{
        width:20,
        height:20,
        // 2 icon cách đều trái,phải
        marginHorizontal:20,
    },
    // cách icon ra 2 bên trong input
    tpcontainer:{
     flex:1,
    }
})
export default TextInputComponent;