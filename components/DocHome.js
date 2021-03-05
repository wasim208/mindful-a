import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import CounChatCard from "./CounChatCard";
import Screen from "./Screen";

const users = [
  {
    _id: "1",
    name: "Louella Chapman",
    profile: require("../assets/pat_1.jpg"),
  },
  {
    _id: "2",
    name: "Steve Jensen",
    profile: require("../assets/pat_2.jpg"),
  },
  {
    _id: "3",
    name: "Amber Lewis",
    profile: require("../assets/pat_3.jpg"),
  },
];

function DocHome(props) {
  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Your Patients</Text>
      </View>
      <View style={styles.chat}>
        <FlatList
          data={users}
          keyExtractor={(user) => user._id}
          renderItem={({ item }) => <CounChatCard user={item} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 18,
  },
  chat: {
    flex: 6,
  },
});

export default DocHome;
