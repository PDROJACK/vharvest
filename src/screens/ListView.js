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

function ListView(props) {
  const [campaigns, setCampaigns] = useState(props.data);

  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.farmer.name}`} description={`${item.typeCrop}`} />
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
    maxHeight: 200,
  },

  campaigns: {
    flex: 1,
    width: 200,
    height: 400,
  },
});

export default ListView;
