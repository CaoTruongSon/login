import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import ItemViewDish from "../components/ItemViewDish";
import IMAGES from "../theme/images";
import HeaderComponet from "../components/HeaderComponent";
import { useIsFocused } from '@react-navigation/native';

const MyNetworkScreen = ({route,navigation})=>{
    const [listFilter,setListFilter] = useState([]);
    const listProduct = [
        {
            imageProduct:IMAGES.monan1,
            title:'Mì Spaghetti',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.monan2,
            title:'Wiener Schnitzel',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.monan3,
            title:'Rosti',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.monan4,
            title:'Carbonnade Flamande',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.monan5,
            title:'Cozido',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.monan6,
            title:'Súp tỏi',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        
    ]
    const listProduct2 = [
        {
            imageProduct:IMAGES.douong1,
            title:'Nước chanh',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.douong2,
            title:'Nước ép nho',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.douong3,
            title:'Trà',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.douong4,
            title:'Cà phê',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.douong5,
            title:'Nước ép táo',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.douong6,
            title:'Nước ép dâu tây',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        
    ]

    const listProduct3 = [
        {
            imageProduct:IMAGES.banh1,
            title:'Bánh macaron',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.banh2,
            title:'Bánh kem dâu',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.banh3,
            title:'Bánh quy',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.banh4,
            title:'Bánh xèo',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.banh5,
            title:'Bánh socola',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.banh6,
            title:'Bánh sừng bò',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        
    ]

    const listProduct4 = [
        {
            imageProduct:IMAGES.ruou1,
            title:'Vodka',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.ruou2,
            title:'Rượu Whisky',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.ruou3,
            title:'Rượu Tequila',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.ruou4,
            title:'Rượu Brandy',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.ruou5,
            title:'Rượu Rum',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        {
            imageProduct:IMAGES.ruou6,
            title:'Rượu nếp',
            imageLike: IMAGES.shop,
            title1: '20.000 VND',
        },
        
    ]
    const render = ({item}) =>{
        return(
            <ItemViewDish
            imageLike={item?.imageLike}
            title={item?.title}
            imageProduct={item?.imageProduct}
            title1={item?.title1}
            />
        )
    }

    useEffect(() => {
        onSearch();
      },[]);
    console.log('listFilter',listFilter);
    const onSearch =()=>{
        const value=typeof route?.params === 'string' ? route?.params?.toString() : '&&:!,&&-&';
        const filterdata = listProduct.filter?.(
            item =>
              item?.title?.toLowerCase().indexOf?.(value?.toLowerCase()) !== -1 
          );
          const filterdata2 = listProduct2.filter?.(
            item =>
              item?.title?.toLowerCase().indexOf?.(value?.toLowerCase()) !== -1 
          );
          const filterdata3 = listProduct3.filter?.(
            item =>
              item?.title?.toLowerCase().indexOf?.(value?.toLowerCase()) !== -1 
          );
          const filterdata4 = listProduct4.filter?.(
            item =>
              item?.title?.toLowerCase().indexOf?.(value?.toLowerCase()) !== -1 
          );
          const dataFilter = [...filterdata,...filterdata2,...filterdata3,...filterdata4]
          navigation.setParams('');

         dataFilter.length>0?setListFilter(dataFilter):setListFilter(null)
        }
   
    return(<>
        <View>
       
        <HeaderComponet
      title = 'Danh sách thực đơn'
      />
      {listFilter? <View>
                <FlatList
                data={listFilter}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                
                />
            </View>
            :
            <ScrollView>
        <View style ={styles.bar1}><Text style ={styles.text}>Món ăn</Text></View>
        
            <View style={{flexDirection:'row'}}>
                <FlatList
                data={listProduct}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
        
        <View style ={styles.bar}><Text style ={styles.text}>Đồ uống</Text></View>
       
            <View style={{flexDirection:'row'}}>
                <FlatList
                data={listProduct2}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
       

        <View style ={styles.bar}><Text style ={styles.text}>Bánh</Text></View>
        
            <View style={{flexDirection:'row'}}>
                <FlatList
                data={listProduct3}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
       

        <View style ={styles.bar}><Text style ={styles.text}>Rượu</Text></View>
        
            <View style={{flexDirection:'row'}}>
                <FlatList
                data={listProduct4}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
       
        <View style = {styles.bottom0}></View>
        </ScrollView>
            }
     
        
        </View>
    </>)
}

const styles = StyleSheet.create({
    bar:{
        height: 40,
        width:'100%',  
        color:'#000000',
        justifyContent: 'center',
    },
    bar1:{
        height: 40,
        width:'100%',
        color:'#000000',
        // marginTop: 23,
        justifyContent: 'center',
    },
    text:{
        marginLeft:5,
        fontSize: 26,
        fontWeight: 'bold',
    },
    bottom0:{
        height:60,
    }
})
export default MyNetworkScreen;