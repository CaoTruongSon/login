import React from 'react';
import {TouchableOpacity,Image,View,Text,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import SCREEN from '../navigators/RouteKey';
// const HeaderComponet = ({title, iconLeft}: {title: string; iconLeft?: any}) =>{
//     return(
//         <View style={{backgroundColor: 'blue',
//                       paddingTop:200,
//                       }}>
//             <StatusBar translucent backgroundColor='transparent'/>
//             <Image source={iconLeft} width={20} height={20}/>
//             <Text>{title}</Text>
//         </View>
//     )
// }

// cách tạo style khác
const HeaderComponet = ({title, iconRight}: {title: string; iconRight?: any}) =>{
    const Navigation = useNavigation();
    return(
        <View style={styles.containerHeader}>
            {/* StatusBar thanh chứa cột sóng điện thoại */}
            {/* transparent làm màu giống với màu style trong view */}
            <StatusBar translucent={true} backgroundColor='transparent'/>
            {/* Image chỉnh hình dạng icon.ảnh */}
            <TouchableOpacity onPress = {() => Navigation.navigate(SCREEN.LOGIN_SCREEN)}>
            <Image source={iconRight} style={styles.imgLeft}/>
            </TouchableOpacity>
            <View style ={styles.textCenter}><Text style ={styles.textCenter1}>{title}</Text></View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor: '#FFFF00',
        paddingTop: StatusBar.currentHeight + 10 || 10,
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    imgLeft:{
        width:20,
        height:20,
        marginBottom:7,
        marginLeft:5,
    },
    textCenter:{
        flex:1,
        textAlignVertical: 'center',
    },
    textCenter1:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#000000',
    },

}); 

export default HeaderComponet;