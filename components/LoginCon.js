import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Screen from "./Screen";

const LoginCon = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <View style={styles.loginView}>
        <View style={styles.contentView}>
          <Image
            style={styles.image_login}
            source={require("../assets/call_user_dr.png")}
          />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text> You are logging in as a counsellor.</Text>
        </View>
        <View style={styles.buttonView}>
          <TextInput
            style={styles.inputs}
            name="email"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.inputs}
            secureTextEntry={true}
            name="password"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("DocHome")}
          >
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.bottomtxt}>Don't have an account?</Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
              onPress={() => navigation.navigate("SignupCon")}
            >
              <Text style={{ fontSize: 18, color: "dodgerblue" }}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 5,
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Are you a user?</Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 18, color: "dodgerblue" }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Click here
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignupUser")}
          >
            <Text style={styles.btntext}>Sign Up as User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignupCon")}
          >
            <Text style={styles.btntext}>Sign Up as Counselor</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    backgroundColor: "white",
  },
  displayText: {
    fontSize: 20,
    color: "#AEB6BF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    fontSize: 20,
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "center",
    borderColor: "blue",
  },
  btntext: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  btn: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    backgroundColor: "#9CABF7",
    alignSelf: "center",
    borderRadius: 8,
  },
  buttonView: {
    flex: 1,
  },
  image_login: {
    height: 350,
    width: 400,
  },
  signuplink: {
    color: "blue",
  },
  bottomtxt: {
    fontSize: 18,
    textAlignVertical: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomtxtl: {
    fontSize: 18,
    textAlignVertical: "center",
    alignSelf: "center",
    color: "blue",
  },
});

export default LoginCon;
