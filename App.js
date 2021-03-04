import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Calendar from "expo-calendar";

import Questionnaire from "./components/Questionnaire";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        console.log("Access granted!");
      }
    })();
  }, []);
  return <Questionnaire />;
}

const styles = StyleSheet.create({});
