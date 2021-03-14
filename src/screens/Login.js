import {
  Divider,
  Layout,
  TabBar,
  Input,
  Tab,
  Button,
  TopNavigation,
} from "@ui-kitten/components";
import React, { useState } from "react";
import codePush from 'react-native-code-push';
import { StyleSheet, View, Text, Image, SafeAreaView,KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import config from "../config";
import CodePush from "react-native-code-push";

let Config = config[process.env.NODE_ENV];

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function onLogin() {
    // #TODO: Send Login request to server
    try {
      const data = {
        email,
        password,
      };

      console.log(`${Config.BACKEND}/users/login`);

      const headers = {
        "Content-Type": "application/json",
      };

      const res = await axios.post(`${Config.BACKEND}/users/login`, data, {
        headers,
      });
      console.log(res.data);
      await AsyncStorage.setItem("token", res.data.token);

    } catch (error) {
      console.log(error);
    }
  }

  return (
          <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.mainArea}>
        <Layout style={styles.form}>
          <Image
            style={styles.logo}
            source={require("./assets/logo.png")}
          />
          <Input
            style={styles.input}
            status="primary"
            placeholder="Email"
            value={email}
            onChangeText={(nextValue) => setEmail(nextValue)}
          />

          <Input
            style={styles.input}
            status="primary"
            placeholder="Password"
            value={password}
            onChangeText={(nextValue) => setPassword(nextValue)}
          />

          <Button title={"Login"} style={styles.input} onPress={onLogin}>
            Login
          </Button>
        </Layout>
        {/* </Layout> */}
      </Layout>
    </SafeAreaView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainArea: {
    top: 10,
    alignItems: "center",
  },
  input: {
    width: 200
  },  
  logo: {
    width: 250,
    height: 100,
    marginBottom: 20 
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 800,
  },
});
