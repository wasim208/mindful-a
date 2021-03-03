import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";

function ChatScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.navtigation}>
        <Image style={styles.profile} source={require("../assets/doc_1.jpg")} />
        <View style={styles.details}>
          <Text style={styles.name}>Dr. Rachel Douglas</Text>
          <Text style={styles.status}>offline</Text>
        </View>
        <MaterialCommunityIcons
          style={styles.phone}
          name="phone"
          size={30}
          color="white"
        />
      </View>
      <View style={styles.chatSection}></View>
      <View style={styles.inputSection}>
        <View style={styles.chatBox}>
          <TextInput
            placeholder="Type a message"
            multiline
            placeholderTextColor="#dbdbdb"
            style={styles.message}
          />
        </View>
        <View style={styles.sendButton}>
          <MaterialCommunityIcons name="send" size={30} color="white" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  chatSection: {
    flex: 10,
    backgroundColor: "#ede6e6",
  },
  details: {
    padding: 5,
    justifyContent: "space-evenly",
  },
  name: {
    color: "white",
    fontSize: 18,
  },
  status: {
    color: "white",
    fontStyle: "italic",
  },
  phone: {
    position: "absolute",
    right: 10,
  },
  navtigation: {
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f4f4f",
  },
  inputSection: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#d4f2fc",
  },
  profile: {
    position: "absolute",
    left: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  chatBox: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    left: 3,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#6b6b6b",
    width: "80%",
  },
  message: {
    position: "absolute",
    left: 10,
    fontSize: 20,
    color: "white",
  },
  sendButton: {
    borderRadius: 50,
    padding: 7,
    position: "absolute",
    right: 20,
    backgroundColor: "#6b6b6b",
  },
});

export default ChatScreen;
