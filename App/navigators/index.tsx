import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/HomeScreen';
import SCREEN from './RouteKey';
import BottomTab from './BottomTab';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const Natigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}
            initialRouteName={SCREEN.LOGIN_SCREEN}
            >
                <Stack.Screen name ={SCREEN.LOGIN_SCREEN} component ={LoginScreen}/>
                <Stack.Screen name ={SCREEN.BOTTOM_TAB} component ={BottomTab}/>
                <Stack.Screen name ={SCREEN.HOME_SCREEN} component ={HomeScreen}/>
                <Stack.Screen name ={SCREEN.REGISTER_SCREEN} component ={Register}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Natigator;