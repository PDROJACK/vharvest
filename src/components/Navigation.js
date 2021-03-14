import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from "@ui-kitten/components";
import HomeScreen from "../screens/HomeScreen";
import Map from "../screens/Map";
import Profile from "../screens/Profile";
import CreateCampaign from "../screens/CreateCampaign";
import AsyncStorage from "@react-native-community/async-storage";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import SignUp from "../screens/Signup";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Create" />
    <BottomNavigationTab title="Campaign" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const LoginBottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab navigation title="Login" />
    <BottomNavigationTab title="Signup" />
    {/* <Screen name="Create" navigation component={CreateCampaign} />
    <Screen name="Campaign" component={HomeScreen} />
    <Screen name="Profile" component={Profile} /> */}
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Create" component={CreateCampaign} />
    <Screen name="Campaign" component={HomeScreen} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

const LoginNavigator = () => (
  <Navigator tabBar={(props) => <LoginBottomTabBar {...props} />}>
    <Screen name="Login" navigation component={Login} />
    <Screen name="SignUp" component={SignUp} />
  </Navigator>
);

export const AppNavigator = () => {
  const [isLoading, setisLoading] = useState(true);
  const [userToken, setuserToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const token = await AsyncStorage.getItem("token");
      setuserToken(token);
    }
    fetchToken();
  }, []);

  return (
    <NavigationContainer>
      {userToken ? 
      <TabNavigator />
      :
      <LoginNavigator /> }
    </NavigationContainer>
  );
};
