import {
  Divider,
  Layout,
  TabBar,
  Tab,
  List,
  ListItem,
  TopNavigation,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const campaign = [
    {
      "_id": "604df751311f789336b9f7ef",
      "typeCrop": "wheat",
      "goal": 11000,
      "start": "2021-03-14T11:28:18.000Z",
      "end": "2021-03-14T11:28:18.000Z",
      "location": {
          "latitude": 20.100,
          "longitude": 79.100
      },
      "farmer": {
          "_id": "604d451eb0e756eb59c266a9",
          "name": "tim",
          "email": "singhpd75@gmail.com",
          "createdAt": "2021-03-13T23:05:02.913Z",
          "updatedAt": "2021-03-13T23:05:02.913Z",
          "__v": 0
      }
    },
    {
      "_id": "604df751311f789336b9f7eg",
      "typeCrop": "barley",
      "goal": 15000,
      "start": "2021-03-14T11:28:18.000Z",
      "end": "2021-03-14T11:28:18.000Z",
      "location": {
          "latitude": 19.30,
          "longitude": 76.10
      },
      "farmer": {
          "_id": "604d451eb0e756eb59c266a9",
          "name": "sean",
          "email": "singhpd75@gmail.com",
          "createdAt": "2021-03-13T23:05:02.913Z",
          "updatedAt": "2021-03-13T23:05:02.913Z",
          "__v": 0
      }
    },
    {
      "_id": "604df751311f789336b9f7eh",
      "typeCrop": "rice",
      "goal": 20000,
      "start": "2021-03-14T11:28:18.000Z",
      "end": "2021-03-14T11:28:18.000Z",
      "location": {
          "latitude": 24.11,
          "longitude": 73.99
      },
      "farmer": {
          "_id": "604d451eb0e756eb59c266a9",
          "name": "nico",
          "email": "singhpd75@gmail.com",
          "createdAt": "2021-03-13T23:05:02.913Z",
          "updatedAt": "2021-03-13T23:05:02.913Z",
          "__v": 0
      }
    },
    {
      "_id": "604df751311f789336b9f7ei",
      "typeCrop": "maize",
      "goal": 10000,
      "start": "2021-03-14T11:28:18.000Z",
      "end": "2021-03-14T11:28:18.000Z",
      "location": {
          "latitude": 20.12,
          "longitude": 78.311
      },
      "farmer": {
          "_id": "604d451eb0e756eb59c266ak",
          "name": "george",
          "email": "singhpd75@gmail.com",
          "createdAt": "2021-03-13T23:05:02.913Z",
          "updatedAt": "2021-03-13T23:05:02.913Z",
          "__v": 0
      }
    },  
  ];
  


function ListView(props) {
  const [campaigns, setCampaigns] = useState(campaign);

  const renderItem = ({ item, index }) => (
    <ListItem style={styles.listIten} title={`${item.farmer.name}`} description={`${item.typeCrop}`} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.mainArea}>
        <Text>CAMPAIGNS</Text>
        {/* MY CAMPAIGNS */}
        <Layout style={styles.campaigns}>
          <List
            style={styles.container}
            data={campaigns}
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
    justifyContent: "center",
    alignItems: "center",
  },
  container: {

    // width: 00
  },

  listIten: {
    borderColor: "blue",
    borderWidth: 2
  },    

  campaigns: {
    flex: 1,
    width: 400,
    height: 400,
  },
});

export default ListView;
