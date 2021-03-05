import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Screen from "./Screen";

function QuizResult({ navigation }) {
  return (
    <Screen>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.home}> Go To Home </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeading}>
          <Text style={styles.title_one}>Your Test Score Was</Text>
          <Text style={styles.title_two}>Minimal Depression</Text>
        </View>
        <View>
          <Text style={styles.result_text}>
            {">"} Your result indicates that you have none, or veryfew symptoms
            of depression.
          </Text>
          <Text style={styles.result_text}>
            {">"} If you notice that your symptoms aren’t improving, you may
            want to bring them up with someone you trust.
          </Text>
          <Text style={styles.result_text}>
            {">"} Want some ideas on how to impore your mental health? Checkout
            the activities tab.
          </Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: "flex-end",
    height: 50,
  },
  home: {
    color: "dodgerblue",
    fontSize: 18,
    marginLeft: 3,
  },
  content: {
    padding: 10,
  },
  contentHeading: {
    alignItems: "center",
    marginBottom: 60,
  },
  title_one: {
    fontSize: 20,
  },
  title_two: {
    fontSize: 25,
    fontWeight: "bold",
  },
  result_text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default QuizResult;
