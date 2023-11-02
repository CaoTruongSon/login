import { Text, View } from "react-native";
import HeaderComponet from "../components/HeaderComponent";
import IMAGES from "../theme/images";
import layLaiPass from "../containers/layLaiPass";

const TextPass = () =>{
    const {PassXuat} = layLaiPass();
    return(
        <View>
            <HeaderComponet title = 'Lấy lại mật khẩu' iconRight={IMAGES.back}/>
            <View><Text>Mật khẩu của bạn là:</Text></View>
            <View><Text>{PassXuat}</Text></View>
        </View>
    )
}
export default TextPass;