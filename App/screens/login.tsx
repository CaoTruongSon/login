import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground,ScrollView} from 'react-native';
import HeaderComponet from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import TextInputComponent from '../components/TextInput';
import useLogin from '../containers/login';
const LoginScreen = () => {
  const {userName, onChangeUserName,password, onChangePassword, onSubmit} = useLogin();
  return (<>
    <View style ={{flex:1}}>
      <ImageBackground source={IMAGES.nhahang} style ={styles.login}>
      <HeaderComponet
      title = 'Màn hình đăng nhập'
      />
      {/* ScrollView cuộn màn hình */}
      <View style ={styles.StyleInput}>
        
        {/* <Text style = {{color:'red'}}>Đây là trang chủ</Text> */}
        <TextInputComponent
        iconLeft={IMAGES.matkinh}
        iconRight={IMAGES.matkinh}
        placeholder='User Name'
        value={userName}
        onChangeText={(text:string) => onChangeUserName(text)}
        />
        <TextInputComponent 
        iconLeft={IMAGES.matkinh}
        iconRight={IMAGES.matkinh}
        placeholder='Password'
        value={password}
        onChangeText={(text:string) => onChangePassword(text)}
        secureTextEntry={true}
        // làm bàn phím toàn số
        keyboardType={'numeric'}
        />
        <View style ={styles.stySubmit}>
        <TouchableOpacity onPress = {onSubmit}>
          <Text style = {styles.Submit}>{'Đăng nhập'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style = {styles.Submit}>{'Đăng kí'}</Text>
        </TouchableOpacity>
        </View>
        </View>
    {/* </ScrollView> */}
      {/* flex ở view trong là 1 thì nó sẽ chiếm 100% của flex ngoài là 1 */}
      {/* <View style ={{backgroundColor:'red',flex:1}}></View> */}
      </ImageBackground>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  stySubmit:{
    flexDirection:'row',
  },
  StyleInput:{
    marginTop:20,
    flex: 1,
    alignItems: 'center',
  },
  Submit:{
    color: 'white',
    backgroundColor:'blue',
    width:80,
    height:30,
    marginTop:5,
    textAlignVertical:'center',
    textAlign:'center',
    marginRight:10,
    marginLeft:10,
  },
  login:{
    flex:1,
    height: '100%',
    width:'100%',
  }
})
export default LoginScreen;