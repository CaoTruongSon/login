import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyNetworkScreen from '../screens/MyNetworkScreen';
import MessagesScreen from '../screens/MessagesScreen';
import UserScreen from '../screens/UserScreen';
import HomeScreen from '../screens/HomeScreen';
import SCREEN from './RouteKey';
import { Image, Text } from 'react-native';
import IMAGES from '../theme/images';

const Tab = createBottomTabNavigator();

const BottomTab = () =>{
    return (
        <Tab.Navigator screenOptions={{headerShown:false,unmountOnBlur: true,}}>
            <Tab.Screen component={HomeScreen} name = {SCREEN.HOME_SCREEN}
            
            options={{
                tabBarLabel:({focused}) => <Text style={{color:focused?'#FF0000':'#000000'}}>{'Phổ biến'}</Text>,
                tabBarIcon: ({focused}) =>(
                    focused? (<Image source={IMAGES.noibat} style={{width:20,height:20}}/>
                    ):(
                        <Image source={IMAGES.noibat} style={{width:20,height:20}}/>
                    )
                ),
            }}/>
            
            <Tab.Screen component={MyNetworkScreen} name = {SCREEN.MY_NETWORK_SCREEN} options={{
                tabBarLabel:({focused}) => <Text style={{color:focused?'#FF0000':'#000000'}}>{'Thực đơn'}</Text>,
                tabBarIcon: ({focused}) =>(
                    focused? (<Image source={IMAGES.food} style={{width:20,height:20}}/>
                    ):(
                        <Image source={IMAGES.food} style={{width:20,height:20}}/>
                    )
                ),
                
               
            }}
           />

            <Tab.Screen component={MessagesScreen} name = {SCREEN.MESSAGES_SCREEN} options={{
                tabBarLabel:({focused}) => <Text style={{color:focused?'#FF0000':'#000000'}}>{'Hỗ trợ'}</Text>,
                tabBarIcon: ({focused}) =>(
                    focused? (<Image source={IMAGES.nhanvien2} style={{width:20,height:20}}/>
                    ):(
                        <Image source={IMAGES.nhanvien2} style={{width:20,height:20}}/>
                    )
                ),
               
            }}/>

            <Tab.Screen component={UserScreen} name = {SCREEN.USER_SCREEN} options={{
                tabBarLabel:({focused}) => <Text style={{color:focused?'#FF0000':'#000000'}}>{'Cá nhân'}</Text>,
                tabBarIcon: ({focused}) =>(
                    focused? (<Image source={IMAGES.canhan1} style={{width:20,height:20}}/>
                    ):(
                        <Image source={IMAGES.canhan1} style={{width:20,height:20}}/>
                    )
                ),
               
            }}/>
        </Tab.Navigator>
    );
};
export default BottomTab;
