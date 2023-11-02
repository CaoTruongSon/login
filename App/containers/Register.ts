import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import useLogin from './login';
const RegisterScreen=() =>{
    const {setShowHide} = useLogin();
    const Navigation = useNavigation();
    const RegisterS = () =>{
        Navigation.navigate(SCREEN.REGISTER_SCREEN);
        setShowHide(false);
    };
    return {RegisterS};
};
export default RegisterScreen;