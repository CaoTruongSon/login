import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import axios from 'axios';
import { Alert } from 'react-native';
const AccountRegister = () => {
    const Navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordagain, setpasswordagain] = useState('');
  const [checkName, setCheckName] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkPasswordAgain, setCheckPasswordAgain] = useState(false);
  const [againName, setAgainName] = useState(false)
  const Register = () =>{
    let formData = {
      name:name,
      password:password,
    }
    setCheckName(false);
    setCheckPassword(false);
    setCheckPasswordAgain(false);
    setAgainName(false);
    if (!name.trim()){
        setCheckName(true);
    }
    if (password.length<6){
        setCheckPassword(true);
    }
    if (password !== passwordagain){
        setCheckPasswordAgain(true);
    }
    if (!name.trim() || password.length<6 || password !== passwordagain){
        return;
    }
    axios.get('https://653a3aeae3b530c8d9e958c7.mockapi.io/api/register/account')
    .then((respone)=>{
        const again = respone.data.find((account:any)=> account.name === name);
        if (again){
            setAgainName(true);
        }
        else{
            axios.post('https://653a3aeae3b530c8d9e958c7.mockapi.io/api/register/account', formData)
            .then((respone)=>{
                if (respone.data){
                    Alert.alert('XIN CHÀO',`Chúc mừng ${respone.data.name} đã đăng kí thành công.`);
                    setName('');
                    setPassword('');
                    setpasswordagain('');
                    Navigation.navigate(SCREEN.LOGIN_SCREEN);
                }
            })
            .catch((err)=>{
                Alert.alert('Lỗi', 'Đăng ký không thành công. Vui lòng thử lại sau.');
            })
        }
    })
    .catch((err)=>{
        Alert.alert('Lỗi.');
    })
}
    return {againName,Register,name,password,passwordagain,setName,setPassword,setpasswordagain,checkName, setCheckName,checkPassword, setCheckPassword,checkPasswordAgain, setCheckPasswordAgain};
};
export default AccountRegister;