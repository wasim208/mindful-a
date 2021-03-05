import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

function CounChatCard({ user }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("DocChat")}
    >
      <Image style={styles.profile_pic} source={user.profile}></Image>
      <View style={styles.details}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.newMessage}>New message</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    margin: 7,
    overflow: "hidden",
    backgroundColor: "#fafaf5",
    padding: 10,
    flexDirection: "row",
    elevation: 10,
  },
  details: {
    paddingLeft: 15,
  },
  profile_pic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
  },
  newMessage: {
    fontStyle: "italic",
    color: "#8f8f8f",
  },
});

export default CounChatCard;
