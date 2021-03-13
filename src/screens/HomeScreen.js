import { Divider, Layout, TabBar, Tab, TopNavigation } from '@ui-kitten/components';
import React, { useState } from 'react'
import { StyleSheet, View , Text, SafeAreaView} from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import Map from './Map';
import ListView from './ListView';

export default function HomeScreen ({ navigation }) {
    
    const [selectedIndex, setSelectedIndex] = useState(true);

    // #TODO: ADD api call here
    // useEffect(() => {
    //     // Call Api and render the map first

    //     return () => {
            
    //     }
    // })

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
            { selectedIndex ? <Map/> : <ListView/> }
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

