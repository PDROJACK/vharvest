import { Divider, Layout, TabBar, Tab, TopNavigation } from '@ui-kitten/components';
import React, { useState } from 'react'
import { StyleSheet, View , Text, SafeAreaView} from 'react-native';

function Profile() {
    return (
        <SafeAreaView style={{flex:1}}>
            <TopNavigation title="Profile" alignment="center" />
            <Divider/>
            <Layout style={styles.mainArea}>
                <View>
                    <Text>This is Profile</Text>
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

export default Profile
