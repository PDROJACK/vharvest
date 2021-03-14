import AsyncStorage from "@react-native-community/async-storage";
import {
  Divider,
  Layout,
  Card,
  TabBar,
  List,
  Tab,
  ListItem,
  TopNavigation,
  Icon,
  Button,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

const data = {
  name: "Sean",
  email: "sea@gmail.com",
  phone: "911",
  profile: "photo.jpg",
};

const listData = [
  {
    typeCrop: "wheat",
    email: "singhpd",
    phone: "911",
    goal: "$5000",
  },
  {
    typeCrop: "barley",
    email: "singhpd",
    phone: "911",
    goal: "$4000",
  },
  {
    typeCrop: "potato",
    email: "singhpd",
    phone: "911",
    goal: "$2000",
  },
];

function Profile({navigation}) {

  const renderItemIcon = (props) => (
    <Icon {...props} name='list'/>
  );

  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.typeCrop}`} description={`${item.goal}`} accessoryLeft={renderItemIcon}></ListItem>
  );

    async function onLogout () {
      await AsyncStorage.removeItem("token");
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Profile" alignment="center" />
      <Divider />

      {/* MY INFORMATION */}
      <Layout style={styles.mainArea}>
        <Layout style={styles.information}>
          <Card
            style={{
              width: 350,
              height: 200,
              marginTop: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.profile}
                source={require("./assets/farmer.png")}
              />
              <View style={{ justifyContent: "center" }}>
                <Text>Name: {data.name}</Text>
                <Text category="s1">Email: {data.email}</Text>
                <Text category="s1">Phone: {data.phone}</Text>
              </View>
            </View>
          </Card>
        </Layout>
        
        {/* LOGOUT BUTTON */}
        <Button onPress={onLogout}>Logout</Button>
        
        <Text>MY CAMPAIGNS</Text>
        {/* MY CAMPAIGNS */}
        <Layout style={styles.campaigns}>
          <List
            style={styles.container}
            data={listData}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </Layout>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  information: {
    flexDirection: "column",
    flex: 1,
  },
  container: {
    maxHeight: 200,
  },
  campaigns: {
    flex: 1,
    width: 350,
    height: 500,
    borderColor: "blue",
    borderWidth: 3,
    borderRadius: 5,
    padding: 6
  },
  profile: {
    width: 120,
    height: 150,
    marginRight: 40,
  },
});

export default Profile;
