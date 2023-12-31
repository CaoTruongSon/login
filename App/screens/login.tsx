import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native';
import HeaderComponet from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import TextInputComponent from '../components/TextInput';
import useLogin from '../containers/login';
import RegisterScreen from '../containers/Register';
import CheckBox from '@react-native-community/checkbox';
const LoginScreen = () => {
  const {userName, onChangeUserName,password, onChangePassword, onSubmit,useErr,checkBox, setCheckBox,passName} = useLogin();
  const {RegisterS} = RegisterScreen();

  return (
      <ImageBackground source={IMAGES.nhahang} style ={styles.login}>
      <HeaderComponet
      title = 'Màn hình đăng nhập'
      />
      <View style ={styles.StyleInput}>
        <TextInputComponent
        iconLeft={IMAGES.taikhoan}
        placeholder='User Name'
        value={userName}
        onChangeText={(text:string) => onChangeUserName(text)}
        />
        <View style = {styles.topInput}>
        <TextInputComponent 
        iconLeft={IMAGES.matkhau}
        placeholder='Password'
        value={password}
        onChangeText={(text:string) => onChangePassword(text)}
        secureTextEntry={true}
        />     
        </View>
        <View style={styles.checkbox}>
        <CheckBox
         disabled={false}
         value={checkBox}
         onValueChange={()=> setCheckBox(!checkBox)}
         tintColors={{true:'purple'}}
        />
        <Text style={styles.textPass}>Ghi nhớ mật khẩu</Text>
        <View style ={styles.forgetpass}>
        <TouchableOpacity onPress = {passName}><Text style={{color:'blue',textDecorationLine:'underline',fontWeight:'bold'}}>Quên mật khẩu</Text></TouchableOpacity>
        </View>
        </View>
        <View style ={styles.stySubmit}>
        <TouchableOpacity onPress = {onSubmit}>
          <Text style = {styles.Submit}>{'Đăng nhập'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {RegisterS}>
          <Text style = {styles.Submit}>{'Đăng kí'}</Text>
        </TouchableOpacity>
        </View>
        <Text style ={styles.useErr}>{useErr?'Tài khoản hoặc mật khẩu không chính xác.':''}</Text>
        </View>
      </ImageBackground>
  );
};
const styles = StyleSheet.create({
  forgetpass:{
    marginLeft:41,
  },
  textPass:{
    color:'red',
    fontWeight:'bold',
  },
  checkbox:{
    flexDirection : 'row',
    alignItems:'center',
  },
  topInput:{
    marginTop:20,
  },
  useErr:{
    color:'red',
    fontWeight:'bold',
  },
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
    width:100,
    height:40,
    textAlignVertical:'center',
    textAlign:'center',
    marginRight:10,
    marginLeft:10,
    borderRadius: 10,
  },
  login:{
    flex:1,
    height: '100%',
    width:'100%',
  }
})
export default LoginScreen;