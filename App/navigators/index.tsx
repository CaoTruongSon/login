import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/HomeScreen';
import SCREEN from './RouteKey';
import BottomTab from './BottomTab';
import Register from '../screens/Register';
import LayPass from '../screens/LayPass';
import TextPass from '../screens/TextPass';

const Stack = createNativeStackNavigator();

const Natigator = () =>{
    return (
        // <Stack.Navigator screenOption = {{headerShowm: false, navigationBarColor:'red'}}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false,navigationBarColor:'transparent'}}
            initialRouteName={SCREEN.BOTTOM_TAB}
            >
                <Stack.Screen name ={SCREEN.LOGIN_SCREEN} component ={LoginScreen}/>
                <Stack.Screen name ={SCREEN.BOTTOM_TAB} component ={BottomTab}/>
                <Stack.Screen name ={SCREEN.HOME_SCREEN} component ={HomeScreen}/>
                <Stack.Screen name ={SCREEN.REGISTER_SCREEN} component ={Register}/>
                <Stack.Screen name ={SCREEN.LAYPASS_SCREEN} component ={LayPass}/>
                <Stack.Screen name ={SCREEN.TEXTPASS_SCREEN} component ={TextPass}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Natigator;