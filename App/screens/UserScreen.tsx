import React from "react";
import { Text, View } from "react-native";
import HeaderComponet from "../components/HeaderComponent";
import IMAGES from "../theme/images";

const UserScreen = ()=>{
    return(
        <>
    <View>
        <HeaderComponet title='hi' iconRight={IMAGES.back}/>
    </View>
        </>
        )
}
export default UserScreen;