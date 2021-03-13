import { Divider, Layout, TabBar, Tab, TopNavigation } from '@ui-kitten/components';
import React, { useState } from 'react'
import { StyleSheet, View , Text,  SafeAreaView} from 'react-native';

function ListView() {

    const [campaigns, setCampaigns] = useState();

    
    
    return (
        <SafeAreaView style={{flex:1}}>
            <Layout style={styles.mainArea}>
                <View>
                    <Text>This is ListView</Text>
                </View>
            </Layout>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default ListView
