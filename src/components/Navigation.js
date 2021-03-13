import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import HomeScreen from '../screens/HomeScreen';
import Map from '../screens/Map';
import Profile from '../screens/Profile';
import CreateCampaign from '../screens/CreateCampaign';


const {Navigator, Screen} = createBottomTabNavigator();

// const HomeNavigator = () => (
//     <Navigator headerMode='none'>
//         <Screen name='Home' component={HomeScreen}/>
//         <Screen name='Map' component={Map}/>
//     </Navigator>
// )

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Create'/>
      <BottomNavigationTab title='Campaign'/>
      <BottomNavigationTab title='Profile'/>
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Create' component={CreateCampaign}/>
        <Screen name='Campaign' component={HomeScreen}/>
        <Screen name='Profile' component={Profile}/>
    </Navigator>
);

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
};