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
} from "react-native";
import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import Screen from "./Screen";

const SignupCon = ({ navigation, check }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [expert, setExpert] = useState("");
  const [date, setDate] = useState({ date: "1990-01-01" });
  return (
    <Screen>
      <View style={styles.signupPage}>
        <View style={styles.heading}>
          <Text style={styles.text}>Want to register as a counselor?</Text>
          <Text style={styles.text}>Fill up the info to get started.</Text>
        </View>
        <View style={styles.signupForm}>
          <TextInput
            style={styles.inputs}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.inputs}
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.radio}>
            <Text style={styles.inputG}>DOB</Text>
            <DatePicker
              style={{ width: 200 }}
              date={date.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => setDate({ date: date })}
            />
          </View>
          <Text style={styles.inputG}>Gender</Text>
          <View style={styles.radio}>
            <Text style={styles.radiolabel}>Male</Text>
            <RadioButton
              style={styles.radioBtn}
              value="Male"
              status={gender === "Male" ? "checked" : "unchecked"}
              onPress={() => setGender("Male")}
            />
            <Text style={styles.radiolabel}>Female</Text>
            <RadioButton
              style={styles.radioBtn}
              value="Female"
              status={gender === "Female" ? "checked" : "unchecked"}
              onPress={() => setGender("Female")}
            />
          </View>
          <TextInput
            style={styles.inputs}
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={qualification}
            onChangeText={(text) => setQualification(text)}
          />
          <TextInput
            style={styles.inputs}
            type="text"
            name="Expert"
            placeholder="Expertise"
            value={expert}
            onChangeText={(text) => setExpert(text)}
          />
          <TextInput
            style={styles.inputs}
            secureTextEntry={true}
            name="Password"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity>
            <Text style={styles.sigupBtn}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
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
  radio: {
    flexDirection: "row",
    alignContent: "center",
  },
  inputG: {
    fontSize: 20,
    padding: 5,
    margin: 5,
  },
  radioBtn: {
    alignContent: "center",
  },
  radiolabel: {
    fontSize: 15,
    padding: 5,
    margin: 5,
    textAlignVertical: "center",
    alignContent: "center",
  },
  sigupBtn: {
    fontSize: 20,
    backgroundColor: "#9CABF7",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    textAlign: "center",
  },
});

export default SignupCon;
