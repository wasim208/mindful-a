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

function DoctorCard({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.profile_pic} source={item.image}></Image>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.qualification}>{item.qualification}</Text>
        <Text style={styles.experience}>Experience: {item.exp}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Chat")}
        >
          <MaterialCommunityIcons name="chat" size={20} color="white" />
          <Text style={styles.buttonText}> Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginTop: 4,
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    padding: 3,
  },
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
  },
  qualification: {
    fontSize: 14,
    color: "grey",
  },
  experience: {
    fontSize: 14,
    paddingTop: 2,
    color: "#5c5c58",
  },
  buttonText: {
    color: "white",
  },
});

export default DoctorCard;
