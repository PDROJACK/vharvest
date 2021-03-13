import {
  Divider,
  Layout,
  TabBar,
  Input,
  Tab,
  TopNavigation,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useEffect } from "react/cjs/react.production.min";
import Map from "./Map";
import ListView from "./ListView";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function CreateCampaign({ navigation }) {
  const [value, setValue] = React.useState(initialValue);

  const [value, setValue] = React.useState(initialValue);

  const [value, setValue] = React.useState(initialValue);

  const [value, setValue] = React.useState(initialValue);

  const [value, setValue] = React.useState(initialValue);

  const [value, setValue] = React.useState(initialValue);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout>
        <Input
          style={styles.input}
          status="primary"
          placeholder="Type of Crop"
          label="Type of Crop"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />

        <Layout style={styles.rowContainer} level="1">
          <Input
            style={styles.input}
            status="success"
            placeholder="Goal"
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            style={styles.input}
            status="info"
            placeholder="date"
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
        </Layout>

        <Layout style={styles.rowContainer} level="1">
          <Input
            style={styles.input}
            status="warning"
            placeholder="Start"
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />

          <Input
            style={styles.input}
            status="danger"
            placeholder="End"
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
        </Layout>

        <Layout style={styles.rowContainer} level="1">
          <Input
            style={styles.input}
            status="basic"
            placeholder="Basic"
            {...basicInputState}
          />

          <View style={styles.controlContainer}>
            <Input
              style={styles.input}
              status="control"
              placeholder="Control"
              {...controlInputState}
            />
          </View>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    top: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: "#3366FF",
  },
});
