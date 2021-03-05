import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/core";
import { Title } from "react-native-paper";

const CounSched = () => {
  const navigation = useNavigation();
  const [Activity1, setActivity1] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.signupPage}>
      <View style={styles.heading}>
        <Text style={styles.text}>Create a schedule</Text>
      </View>
      <View style={styles.signupForm}>
        <View>
          <TextInput
            style={styles.inputs}
            type="text"
            name="Activity1"
            placeholder="Activity 1"
            value={Activity1}
            onChangeText={(text) => setActivity1(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={showTimepicker}>
            <Text style={styles.btntext}>Set time</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            Alert.alert("Message", "Schedule has been sent to the user", [
              {
                text: "Go Back to Home",
                onPress: () => navigation.navigate("DocHome"),
              },
            ])
          }
        >
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupPage: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  signupForm: {
    flex: 3,
    backgroundColor: "white",
  },
  inputs: {
    fontSize: 20,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "center",
    borderColor: "blue",
  },
  inputG: {
    fontSize: 20,
    padding: 5,
    margin: 5,
  },
  btntext: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  btn: {
    padding: 5,
    margin: 5,
    fontSize: 20,
    backgroundColor: "#9CABF7",
    alignSelf: "center",
    borderRadius: 5,
  },
  timeBtn: {
    padding: 5,
    margin: 5,
    fontSize: 10,
    backgroundColor: "#9CABF7",
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default CounSched;
