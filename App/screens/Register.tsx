import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native';
import HeaderComponet from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import TextInputComponent from '../components/TextInput';
import AccountRegister from '../containers/AccountRegister';
const Register = () => {
  const {againName,Register,name,password,passwordagain,setName,setPassword,setpasswordagain,checkName,checkPassword,checkPasswordAgain} = AccountRegister();
  
  return (<>
    <View style ={{flex:1}}>
      <ImageBackground source={IMAGES.nhahang} style ={styles.login}>
      <HeaderComponet
      title = 'Màn hình đăng kí'
      iconRight={IMAGES.back}
      />
      <View style ={styles.StyleInput}>
        
        <TextInputComponent
        iconLeft={IMAGES.taikhoan}
        placeholder='User Name'
        value={name}
        onChangeText={(value:string) => setName(value)}
        />
        <Text style ={styles.checkName}>{checkName?'Tên không được để trống.':''}</Text>
        <TextInputComponent 
        iconLeft={IMAGES.matkhau}
        placeholder='Password'
        value={password}
        onChangeText={(value:string) => setPassword(value)}
        secureTextEntry={true}
        />
        <Text style ={styles.checkName}>{checkPassword?'Mật khẩu không được ít hơn 6 kí tự.':''}</Text>
        <TextInputComponent 
        iconLeft={IMAGES.matkhauagain}
        placeholder='Password again'
        value ={passwordagain}
        onChangeText={(value:string) => setpasswordagain(value)}
        secureTextEntry={true}
        />
        <Text style ={styles.checkName}>{checkPasswordAgain?'Mật khẩu lặp lại sai.':''}</Text>
        <View style ={styles.stySubmit}>
        <TouchableOpacity onPress={Register}>
          <Text style = {styles.Submit}>{'Đăng kí'}</Text>
        </TouchableOpacity>
        </View>
        <Text style ={styles.checkName}>{againName?'Tài khoản đã tồn tại.':''}</Text>
        </View>
      </ImageBackground>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  checkName:{
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
    borderRadius: 10,
  },
  login:{
    flex:1,
    height: '100%',
    width:'100%',
  }
})
export default Register;