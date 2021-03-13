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


export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function onLogin() {
    // #TODO: Send Login request to server
    const res = {
      email,
      password,
    };
    console.log(res);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainArea}>
        <Layout style={styles.form}>
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

          <Button
            title={"Login"}
            style={styles.input}
            onPress={createCampaign}
          />
        </Layout>
        {/* </Layout> */}
      </View>
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
});
