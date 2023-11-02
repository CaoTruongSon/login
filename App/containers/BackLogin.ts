import {useNavigation} from '@react-navigation/native';
import useLogin from './login';
const BackScreen=() =>{
    const Navigation = useNavigation();
    const {setShowHide} = useLogin();
    const Back = () =>{
        Navigation.goBack();
        setShowHide(false);
    };
    return {Back};
};
export default BackScreen;