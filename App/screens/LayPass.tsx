import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native';
import HeaderComponet from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import TextInputComponent from '../components/TextInput';
import CheckBox from '@react-native-community/checkbox';
import layLaiPass from '../containers/layLaiPass';
const LayPass = () => {
  const {Name,setName,Gmail,setGmail,onChangeName,onChangeGmail,onSave,KoTrung} = layLaiPass();
  return (<>
    <View style ={{flex:1}}>
      <ImageBackground source={IMAGES.nhahang} style ={styles.login}>
      <HeaderComponet
      title = 'Lấy lại mật khẩu'
      iconRight={IMAGES.back}
      />
      <View style ={styles.StyleInput}>
        <TextInputComponent
        iconLeft={IMAGES.taikhoan}
        placeholder='User Name'
        value={Name}
        onChangeText={(text:string) => onChangeName(text)}
        />
       
        <View style = {styles.topInput}>
        <TextInputComponent 
        iconLeft={IMAGES.matkhau}
        placeholder='Gmail'
        value={Gmail}
        onChangeText={(text:string) => onChangeGmail(text)}
        />
        </View>
        <Text style ={styles.useErr}>{KoTrung?'Tài khoản và gmail không khớp.':''}</Text>
        <View style ={styles.stySubmit}>
        <TouchableOpacity onPress = {onSave}>
          <Text style = {styles.Submit}>{'Gửi'}</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
      
    </View>
    </>
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
export default LayPass;