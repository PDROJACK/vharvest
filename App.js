import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Icon, Button, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './src/screens/HomeScreen';
import { AppNavigator } from './src/components/Navigation';
import Login from './src/screens/Login';

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
    {isLoggedIn?
    ( <>
        <Login/>
      </>
      ):(
        <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />  
        </ApplicationProvider>
        </>
      )
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
