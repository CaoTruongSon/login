import React from "react";
import {Image,TextInput,View,StyleSheet,TouchableOpacity, StatusBar} from 'react-native'
import IMAGES from '../theme/images';
const SearchComponent = ({
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
        <View style={styles.containerHeader}>
        <StatusBar translucent backgroundColor='violet'/>
        <View style = {styles.StyleInput}>
            {iconLeft && <Image source={iconLeft} style ={styles.icon}/>}
            <TextInput style ={styles.tpcontainer} placeholder={placeholder} value ={value} onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
            {iconRight && (
                <TouchableOpacity onPress={onPressImRight}>
                <Image source={iconRight} style ={styles.icon}/>
                </TouchableOpacity>
            )}
        </View>
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
        marginTop:10,
    },
    icon:{
        width:20,
        height:20,
        // 2 icon cách đều trái,phải
        marginHorizontal:20,
    },
    // cách icon ra 2 bên trong input
    tpcontainer:{
     height:20,
     
    },
    containerHeader:{
        backgroundColor: 'blue',
        paddingTop: StatusBar.currentHeight + 10 || 10,
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    imgLeft:{
        width:25,
        height:25,
        marginBottom:7,
      
    },
    textCenter:{
        color:'white',
        textAlign:'center',
        flex:1,
        fontWeight:'bold',
    }
})
export default SearchComponent;