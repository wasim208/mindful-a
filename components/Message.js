import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Message({ chat }) {
  return (
    <View>
      <View style={[styles.messageBox, chat.user && styles.messageAlign]}>
        <View style={styles.message}>
          <Text style={styles.messageText}>{chat.msg}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  messageAlign: {
    alignSelf: "flex-end",
  },
});

export default Message;
