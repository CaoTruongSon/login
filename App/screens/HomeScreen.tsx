import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import HeaderComponet from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import ItemViewDish from '../components/ItemViewDish';
import SCREEN from '../navigators/RouteKey';

// Component Tìm kiếm
const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const listProduct = [
    {
        imageProduct:IMAGES.monan1,
        title:'Mì Spaghetti',
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
    imageProduct:IMAGES.ruou6,
    title:'Rượu nếp',
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
  imageProduct:IMAGES.ruou5,
  title:'Rượu Rum',
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
const listProduct1 = [
  {
      imageProduct:IMAGES.monan1,
      title:'Mì Spaghetti',
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
  imageProduct:IMAGES.ruou2,
  title:'Rượu Whisky',
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
  const handleSearch = () => {
    // Xử lý tìm kiếm ở đây
    console.log('Đang tìm kiếm:', searchText);
    navigation.navigate(SCREEN.BOTTOM_TAB,{screen:SCREEN.MY_NETWORK_SCREEN, params:searchText})
  };

  return (
    <View style={{flex: 1}}>
      <HeaderComponet
      title = 'Phổ biến'
      />
    <View style={styles.top}>
    <View style={styles.searchContainer}>
      <TextInput
        style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, padding: 8 }}
        placeholder="Nhập từ khóa..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {(
        <TouchableOpacity onPress={handleSearch}>
        <Image source={IMAGES.timkiem} style = {styles.icon}/>
        </TouchableOpacity>
      )}
      </View>
    </View>
    <View style ={styles.bar}><Text style ={styles.text}>Món đã xem</Text></View>
    <View style={styles.phobien1}>
                <FlatList
                data={listProduct1}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
    <View style ={styles.bar}><Text style ={styles.text}>Món phổ biến</Text></View>
    <ScrollView>
    <View style={styles.phobien}>
                <FlatList
                data={listProduct}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                />
            </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  top:{
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon:{
    height:20,
    width:20,
  },
  searchContainer: {
    borderWidth: 1,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    width:'100%',
    alignSelf:'center',
    borderRadius:10,
    marginTop:10,
  },
  phobien:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom:150,
  },
  phobien1:{
    flexDirection:'row',
  },
  bar:{
    height: 40,
    width:'100%',  
    color:'#000000',
    justifyContent: 'center',
},
text:{
  marginLeft:5,
  fontSize: 26,
  fontWeight: 'bold',
},
})
export default HomeScreen;