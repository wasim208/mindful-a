import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import Message from "./Message";
import { useNavigation } from "@react-navigation/core";

var id = 3;

const phoneNumber = "tel:${9821634289}";

const initialChats = [
  {
    _id: "1",
    user: true,
    msg: "Hello there, how can I help you?",
  },
];

function DocChatScreen(props) {
  const navigation = useNavigation();
  const [chats, setChats] = useState(initialChats);
  const [message, setMessage] = useState("");
  return (
    <Screen style={styles.container}>
      <View style={styles.navtigation}>
        <Image style={styles.profile} source={require("../assets/pat_1.jpg")} />
        <View style={styles.details}>
          <Text style={styles.name}>Louella Chapman</Text>
          <Text style={styles.status}>offline</Text>
        </View>
        <TouchableOpacity
          style={styles.phone}
          onPress={() => Linking.openURL(phoneNumber)}
        >
          <MaterialCommunityIcons name="phone" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.plus}
          onPress={() => navigation.navigate("Shed")}
        >
          <MaterialCommunityIcons name="plus" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.chatSection}>
        <FlatList
          data={chats}
          keyExtractor={(chat) => chat._id}
          renderItem={({ item }) => <Message chat={item} />}
        />
      </View>
      <View style={styles.inputSection}>
        <View style={styles.chatBox}>
          <TextInput
            onChangeText={(text) => setMessage(text)}
            value={message}
            placeholder="Type a message"
            multiline
            placeholderTextColor="#dbdbdb"
            style={styles.messageInput}
          />
        </View>
        <View style={styles.sendButton}>
          <TouchableOpacity
            onPress={() => {
              setChats([
                ...chats,
                {
                  _id: id.toString(),
                  user: true,
                  msg: message,
                },
              ]);
              setMessage("");
              id = id + 1;
            }}
          >
            <MaterialCommunityIcons name="send" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  chatSection: {
    flex: 10,
    padding: 10,
    backgroundColor: "#ede6e6",
  },
  message: {
    width: "100%",
  },
  messageBox: {
    backgroundColor: "#00adfc",
    padding: 5,
    margin: 5,
    maxWidth: "75%",
    borderRadius: 10,
  },
  messageText: {
    fontSize: 18,
    color: "white",
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
    right: 55,
  },
  plus: {
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
  messageInput: {
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

export default DocChatScreen;
