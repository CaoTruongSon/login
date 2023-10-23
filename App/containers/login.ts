import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
const useLogin=() =>{
    const Navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onChangeUserName = (value:string) =>{
        setUserName(value);
    };
    const onChangePassword = (value:string) =>{
        setPassword(value);
    };
    const onSubmit = () =>{
        Navigation.navigate(SCREEN.BOTTOM_TAB);
        setUserName('');
        setPassword('');
    };
    return {userName, onChangeUserName,password,onChangePassword,onSubmit};
};
export default useLogin;