import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  Divider,
  Layout,
  TabBar,
  Input,
  Tab,
  Button,
  TopNavigation,
} from "@ui-kitten/components";
import { StyleSheet, Text, View, Dimensions } from "react-native";

function FarmerView(props) {
  return (
      <View>
        <Text>Name: {props.farmer.name}</Text>
        <Text>Crop: {props.typeCrop}</Text>
        <Text>Goal: {props.goal}</Text>
        <Button size="tiny" tite={"Invest"} >Invest</Button>  
      </View>
  )
}

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


export default function Map(props) {
  const [campaigns, setCampaigns] = useState(campaign);

  useEffect(() => {});

  function getCampaigns() {
    return campaigns.map((marker, index) => {
      return (
        <Marker
          key={marker._id}
          coordinate={{
            latitude: marker.location.latitude,
            longitude: marker.location.longitude,
          }}
          title={marker.farmer.name}
          description={marker.description}
        >
          {/* <MyCustomMarkerView {...marker} /> */}
            {/* <Text>Hello</Text> */}
          <Callout>
            <FarmerView {...marker} />
            
             {/* <Text>hello</Text> */}
          </Callout>
        </Marker>
      );
    });
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 30.22,
          longitudeDelta: 15.421,
        }}
      >
        {getCampaigns()}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
});
