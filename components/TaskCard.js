import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TaskCard({ task }) {
  const [completed, setcompleted] = useState(false);
  const [done, setDone] = useState(false);
  const [miss, setMiss] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskTime}>{task.time}</Text>
      </View>
      {!completed && (
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setcompleted(true);
              setDone(true);
            }}
          >
            <MaterialCommunityIcons name="check" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setcompleted(true);
              setMiss(true);
            }}
          >
            <MaterialCommunityIcons
              name="window-close"
              size={28}
              color="white"
            />
          </TouchableOpacity>
        </View>
      )}
      {done && (
        <View style={styles.buttons}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="check-circle"
              size={33}
              color="#28a745"
            />
          </TouchableOpacity>
        </View>
      )}
      {miss && (
        <View style={styles.buttons}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="close-circle"
              size={33}
              color="#dc3545"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
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
    justifyContent: "space-between",
    elevation: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskTime: {
    fontSize: 14,
    color: "gray",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 2,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
});

export default TaskCard;
