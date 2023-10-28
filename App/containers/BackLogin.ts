import {useNavigation} from '@react-navigation/native';
const BackScreen=() =>{
    const Navigation = useNavigation();
    const Back = () =>{
        Navigation.goBack();
    };
    return {Back};
};
export default BackScreen;