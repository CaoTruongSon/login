import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native';
import HeaderComponet from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import TextInputComponent from '../components/TextInput';
import AccountRegister from '../containers/AccountRegister';
import CheckBox from '@react-native-community/checkbox';
const Register = () => {
  const {selectedOption, setSelectedOption,checkEmail,setEmail,email,againName,Register,name,password,passwordagain,setName,setPassword,setpasswordagain,checkName,checkPassword,checkPasswordAgain} = AccountRegister();
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
        iconLeft={IMAGES.email}
        placeholder='Email'
        value={email}
        onChangeText={(value:string) => setEmail(value)}
        />
        <Text style ={styles.checkName}>{checkEmail?'Sai định dạng email.':''}</Text>
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
        <View style={styles.checkbox}>
        <CheckBox
         disabled={false}
         value={selectedOption}
         onValueChange={()=> setSelectedOption(!selectedOption)}
         tintColors={{true:'purple'}}
        />
        <Text style={styles.textPass}>Dành cho chủ cửa hàng, khách hàng hãy bỏ qua</Text>
        </View>
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
  textPass:{
    color:'yellow',
    fontWeight:'bold',
  },
  checkbox:{
    flexDirection : 'row',
    alignItems:'center',
  },
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
    marginTop:20,
  },
  login:{
    flex:1,
    height: '100%',
    width:'100%',
  },
  selectInputContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    width: '80%',
    borderRadius: 10,
  },
  option: {
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'blue',
    color: 'white',
  },
  optionText: {
    textAlign: 'center',
  },
})
export default Register;