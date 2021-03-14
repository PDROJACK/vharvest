import { Divider, Layout, TabBar, Tab, TopNavigation } from '@ui-kitten/components';
import React, { useState , useEffect} from 'react'
import { StyleSheet, View , Text, SafeAreaView} from 'react-native';
// import { useEffect } from 'react/cjs/react.production.min';
import Map from './Map';
import ListView from './ListView';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import config from '../config';

export default function HomeScreen ({ navigation }) {
    
    const [selectedIndex, setSelectedIndex] = useState(true);
    const [loaded, setloaded] = useState(null);
    const [campaign, setcampaign] = useState(null);

    // #TODO: ADD api call here
    useEffect(() => {
        const token  = AsyncStorage.getItem("token")
        const header = {
            "Authorization": token
        }
        console.log(`${config["development"].BACKEND}`)
        axios.get(`${config["development"].BACKEND}/campaigns/`, {header})
        .then((response) => {
            // console.log(response.data)
            // response.json()
            setcampaign(response.data)
        })
        // .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setloaded(true));

        // getCampaigns();
    },[])

    return (
        <SafeAreaView style={{flex:1}}>
            <TopNavigation title="Vharvest" alignment="center" />
            <TabBar
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title='List'/>
                <Tab title='Map' />
            </TabBar>
            <Divider/>
            <Layout style={styles.mainArea}>
            { loaded ? (selectedIndex ? <Map  data={campaign}/> : <ListView data={campaign} />): null }
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

