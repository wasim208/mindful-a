import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import { useNavigation } from "@react-navigation/core";

const questions = [
  {
    _id: "1",
    ques: "Little interest or pleasure in doing things",
    checked: "",
  },
  {
    _id: "2",
    ques: "Feeling down, depressed, or hopeless",
    checked: "",
  },
  {
    _id: "3",
    ques: "Trouble falling or staying asleep, or spleeing too much",
    checked: "",
  },
  {
    _id: "4",
    ques: "Feeling tired or having little energy",
    checked: "",
  },
  {
    _id: "5",
    ques: "Poor appetitle or overeating",
    checked: "",
  },
  {
    _id: "6",
    ques:
      "Feeling bad about yourself - or that you are a faliur or have let yourself or your family down",
    checked: "",
  },
  {
    _id: "7",
    ques:
      "Trouble concentrating on things, such as reading the newspaper or watching television",
    checked: "",
  },
  {
    _id: "8",
    ques: "Moving or speaking so slowly that other people could have noticed",
    checked: "",
  },
  {
    _id: "9",
    ques: "Thoughts that you would be better of dead, or of hurting youself",
    checked: "",
  },
  {
    _id: "10",
    ques: "Feeling less and less interested to talk to others",
    checked: "",
  },
];

var current_q = 1;

function Questionnaire() {
  const navigation = useNavigation();
  const [question, setquestion] = useState(questions[0]);
  const [checked, setchecked] = useState(question.checked);

  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          <Text style={styles.headBold}>Over the last 2 weeks</Text>, how often
          have been bothered by any of the following problems?
        </Text>
      </View>
      <View style={styles.quiz}>
        <View style={styles.quesBox}>
          <Text style={styles.question}>{question.ques}</Text>
        </View>
        <View>
          <RadioButton.Group
            onValueChange={(checked) => setchecked(checked)}
            value={checked}
          >
            <RadioButton.Item
              labelStyle={styles.optionsFont}
              label="Not At All"
              value="first"
            />
            <RadioButton.Item
              labelStyle={styles.optionsFont}
              label="Several Days"
              value="second"
            />
            <RadioButton.Item
              labelStyle={styles.optionsFont}
              label="More Than Half The Days"
              value="third"
            />
            <RadioButton.Item
              labelStyle={styles.optionsFont}
              label="Nearly Everyday"
              value="fourth"
            />
          </RadioButton.Group>
        </View>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            if (current_q > 1) {
              current_q = current_q - 1;
              setquestion(questions[current_q - 1]);
            }
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={50} color="white" />
        </TouchableOpacity>
        <Text style={styles.question_num}>{current_q}/10</Text>
        <TouchableOpacity
          onPress={() => {
            if (current_q < 10) {
              current_q = current_q + 1;
              setquestion(questions[current_q - 1]);
              setchecked("");
            } else {
              navigation.navigate("Result");
            }
          }}
        >
          <MaterialCommunityIcons name="arrow-right" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    justifyContent: "center",
  },
  headingText: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
  },
  headBold: {
    fontWeight: "bold",
  },
  quiz: {
    padding: 10,
    flex: 10,
    justifyContent: "space-around",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  nav: {
    backgroundColor: "tomato",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  question: {
    fontSize: 22,
    textAlign: "center",
  },
  optionsFont: {
    fontSize: 20,
  },
  question_num: {
    fontSize: 20,
    color: "white",
  },
});

export default Questionnaire;
