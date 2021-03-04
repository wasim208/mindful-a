import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "./Screen";
import TaskCard from "./TaskCard";

const initailTasks = [
  {
    _id: "1",
    title: "Jogging",
    time: "6.30PM",
  },
  {
    _id: "2",
    title: "Meditation",
    time: "7.30PM",
  },
  {
    _id: "3",
    title: "Read a book",
    time: "9.30PM",
  },
];

function Tasks(props) {
  const [tasks, setTasks] = useState(initailTasks);
  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>Your tasks for today.</Text>
      </View>
      <View style={styles.tasks}>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task._id}
          renderItem={({ item }) => <TaskCard task={item} />}
        />
      </View>
      <View style={styles.submit}>
        <TouchableOpacity style={styles.submit_btn}>
          <Text style={styles.submit_txt}>Submit</Text>
        </TouchableOpacity>
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
  headingTitle: {
    fontSize: 20,
  },
  tasks: {
    flex: 10,
  },
  submit: {
    flex: 1,
    justifyContent: "flex-end",
  },
  submit_btn: {
    backgroundColor: "dodgerblue",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
  },
  submit_txt: {
    color: "white",
    fontSize: 20,
  },
});

export default Tasks;
