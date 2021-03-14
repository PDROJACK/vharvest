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
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import config from "../config";

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
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.mainArea}>
        <Layout style={styles.form}>
          <Image
            style={styles.profile}
            source={require("./assets/farmer.png")}
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
  form: {
    justifyContent: "center",
    width: 200,
    height: 800,
  },
});
