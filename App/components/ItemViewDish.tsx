import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IMAGES from "../theme/images";

const ItemViewDish = (
    {
        imageProduct,
        title,
        imageLike,
        title1,
    }:{
        imageProduct:any,
        title:string,
        imageLike:any,
        title1:string,
    }
) =>{
    return (
    <>
    <TouchableOpacity style = {styles.container}>
        <Image source={imageProduct} resizeMode = 'cover' style ={{width:'100%',height:100}}/>
        <Text style ={styles.text1}>{title}</Text>
        <View style = {styles.flex}>
        <TouchableOpacity>
        <Image source={imageLike} resizeMode = 'contain' style ={{width:20,height:20}}/>
        </TouchableOpacity>
        <Text style ={styles.text}>{title1}</Text>
        </View>
    </TouchableOpacity>
    </>)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:160,
        width:200,
        padding:5,
        borderWidth:1,
        margin:5,
    },
    flex:{
        flexDirection: 'row',
        marginTop:5,
    },
    text:{
        textAlign:'center',
        marginLeft:10,
    },
    text1:{
        textAlign:'center',
        marginTop:2,
    }
})
export default ItemViewDish;