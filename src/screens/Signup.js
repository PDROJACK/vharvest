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

export default function SignUp({ navigation }) {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [phone, setphone] = useState();

  function onSignUp() {
    // #TODO: Sphone Signup request to server
    const res = {
      typeCrop,
      goal,
      password,
      phone,
    };
    console.log(res);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.mainArea}>
        <Layout style={styles.form}>
          <Input
            style={styles.input}
            status="primary"
            placeholder="Name"
            value={name}
            onChangeText={(nextValue) => setname(nextValue)}
          />

          <Input
            style={styles.input}
            status="success"
            placeholder="Email"
            value={email}
            onChangeText={(nextValue) => setemail(nextValue)}
          />

          {/* <Layout style={styles.rowContainer} level="1"> */}
          <Input
            style={styles.input}
            status="primary"
            placeholder="Password"
            value={password}
            onChangeText={(nextValue) => setpassword(nextValue)}
          />

          <Input
            style={styles.input}
            status="primary"
            placeholder="phone"
            value={phone}
            onChangeText={(nextValue) => setphone(nextValue)}
          />
          <Button title={"Login"} style={styles.input} onPress={onSignUp}>Sign Up</Button>
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
