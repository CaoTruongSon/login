import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import axios from 'axios';
import { Alert } from 'react-native';
const useLogin=() =>{
    const Navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [useErr, setUseErr] = useState(false);
    const onChangeUserName = (value:string) =>{
        setUserName(value);
    };
    const onChangePassword = (value:string) =>{
        setPassword(value);
    };
    const onSubmit = () =>{
        setUseErr(false);
        axios.get('https://653a3aeae3b530c8d9e958c7.mockapi.io/api/register/account')
        .then((respone)=>{
            const foundAccount = respone.data.find((account:any) => account.name === userName && account.password === password);
            if (foundAccount){
                Alert.alert('Hi',`Chào mừng ${userName} đến với cửa hàng của chúng tôi.`);
                setUserName('');
                setPassword('');
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
    return {checkBox, setCheckBox,userName, onChangeUserName,password,onChangePassword,onSubmit,useErr};
};
export default useLogin;