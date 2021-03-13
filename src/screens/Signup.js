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
    const [typeCrop, setTypeCrop] = useState();
    const [goal, setGoal] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
  
    function onSignUp(){
  
      // #TODO: Send Signup request to server
        const res = {
          typeCrop, goal, start, end
        }
        console.log(res)
    }
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainArea}>
          <Layout style={styles.form}>
            <Input
              style={styles.input}
              status="primary"
              placeholder="Type of Crop"
              value={typeCrop}
              onChangeText={(nextValue) => setTypeCrop(nextValue)}
            />
  
            <Input
              style={styles.input}
              status="success"
              placeholder="Goal"
              value={goal}
              onChangeText={(nextValue) => setGoal(nextValue)}
            />
  
            {/* <Layout style={styles.rowContainer} level="1"> */}
              <Input
                style={styles.input}
                status="primary"
                placeholder="Start"
                value={start}
                onChangeText={(nextValue) => setStart(nextValue)}
              />
  
              <Input
                style={styles.input}
                status="primary"
                placeholder="End"
                value={end}
                label="End"
                onChangeText={(nextValue) => setEnd(nextValue)}
              />
                     <Button
            title={'Login'}
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
      marginTop: 100
    },
    input: {
    },
    form: {
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  