import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
const RegisterScreen=() =>{
    const Navigation = useNavigation();
    const RegisterS = () =>{
        Navigation.navigate(SCREEN.REGISTER_SCREEN);
    };
    return {RegisterS};
};
export default RegisterScreen;