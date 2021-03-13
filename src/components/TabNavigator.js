import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Map from '../screens/Map';

const {Navigator, Screen} = createStackNavigator();

const TabNavigation = () => (
    <Navigator headerMode='none'>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='Map' component={Map}/>
        
    </Navigator>
)

export const TabNavigator = () => {
    return (
        <NavigationContainer>
            <HomeNavigator/>
        </NavigationContainer>
    )
};