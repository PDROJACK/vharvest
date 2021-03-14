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

// const data = [
//   {
//     name: "teenu",
//     location: {
//       latitude: 37.78825,
//       longitude: -122.4324,
//     },
//     id: "1",
//     description: "hello",
//   },
//   {
//     name: "pdro",
//     location: {
//       latitude: 37.76125,
//       longitude: -122.5224,
//     },
//     id: "2",
//     description: "no",
//   },
// ];

function FarmerView(props) {
  return (
      <View>
        <Text>{props.farmer.name}</Text>
        <Text>{props.typeCrop}</Text>
        <Button tite={"Invest"} >Invest</Button>  
      </View>
  )
}


export default function Map(props) {
  const [campaigns, setCampaigns] = useState(props.data);

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
