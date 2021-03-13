import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map() {
    const [campaigns, setCampaigns] = useState(); 

    useEffect(()=>{

    });

    return (
        <View style={styles.container}>
        <MapView style={styles.map} >

        </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
  },
});