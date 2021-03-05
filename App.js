import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Calendar from "expo-calendar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./components/Landing";
import Login from "./components/Login";
import SignupCon from "./components/SignupCon";
import SignupUser from "./components/SignupUser";
import Tips from "./components/Tips";
import Sleep from "./components/Sleep";
import Home from "./components/Home";
import DoctorList from "./components/DoctorList";
import ChatScreen from "./components/ChatScreen";
import Questionnaire from "./components/Questionnaire";
import QuizResult from "./components/QuizResult";
import Tasks from "./components/Tasks";
import LoginCon from "./components/LoginCon";
import DocHome from "./components/DocHome";
import DocChatScreen from "./components/DocChatScreen";
import CounSched from "./components/CounSched";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTintColor: "white",
      headerStyle: { backgroundColor: "white" },
    }}
  >
    <Stack.Screen name="Landing">
      {(props) => <Landing {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Home">{(props) => <Home {...props} />}</Stack.Screen>
    <Stack.Screen name="Login">{(props) => <Login {...props} />}</Stack.Screen>
    <Stack.Screen name="SignupUser">
      {(props) => <SignupUser {...props} />}
    </Stack.Screen>
    <Stack.Screen name="SignupCon">
      {(props) => <SignupCon {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Doctorlist">
      {(props) => <DoctorList {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Chat">
      {(props) => <ChatScreen {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Tips">{(props) => <Tips {...props} />}</Stack.Screen>
    <Stack.Screen name="Sleep">{(props) => <Sleep {...props} />}</Stack.Screen>
    <Stack.Screen name="Questionnaire">
      {(props) => <Questionnaire {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Result">
      {(props) => <QuizResult {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Tasks">{(props) => <Tasks {...props} />}</Stack.Screen>
    <Stack.Screen name="LoginCon">
      {(props) => <LoginCon {...props} />}
    </Stack.Screen>
    <Stack.Screen name="DocHome">
      {(props) => <DocHome {...props} />}
    </Stack.Screen>
    <Stack.Screen name="DocChat">
      {(props) => <DocChatScreen {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Shed">
      {(props) => <CounSched {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
