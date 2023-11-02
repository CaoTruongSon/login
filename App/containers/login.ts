import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useLogin=() =>{
    const Navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [useErr, setUseErr] = useState(false);
    const [showHide, setShowHide] = useState(false);
    
    const onChangeUserName = (value:string) =>{
        setUserName(value);
    };

    const onChangePassword = (value:string) =>{
        setPassword(value);
    };
    const passName = () =>{
        Navigation.navigate(SCREEN.LAYPASS_SCREEN);
    }
    const getUser = async  ()  =>{
        const username1 = await AsyncStorage.getItem('savedUserName');
        const password1 = await AsyncStorage.getItem('savedPassword');
        setUserName(username1);
        setPassword(password1);
    }
    useEffect(() => {
        getUser();
    },[]);
    const passshow = () =>{
    setShowHide(!showHide);
    }
    const onSubmit = () =>{
        setUseErr(false);
        axios.get('https://653a3aeae3b530c8d9e958c7.mockapi.io/api/register/account')
        .then((respone)=>{
            const foundAccount = respone.data.find((account:any) => account.name === userName && account.password === password);
            if (foundAccount){
                Alert.alert('Hi',`Chào mừng ${userName} đến với cửa hàng của chúng tôi.`);
                if (checkBox) {
                    AsyncStorage.setItem('savedPassword', password);
                    AsyncStorage.setItem('savedUserName', userName);
                  }
                  else{
                    AsyncStorage.setItem('savedPassword', '');
                    AsyncStorage.setItem('savedUserName', '');
                  }
                Navigation.navigate(SCREEN.BOTTOM_TAB);
            }
            else{
                setUseErr(true);
            }
        }) 
        .catch((err) => {
            Alert.alert('Lỗi', 'Đăng nhập không thành công. Vui lòng thử lại sau.');
        });    
    };
    return {showHide, setShowHide,passshow,passName,checkBox, setCheckBox,userName, onChangeUserName,password,onChangePassword,onSubmit,useErr,setUserName,setPassword};
};
export default useLogin;