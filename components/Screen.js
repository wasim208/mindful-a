import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
  },
});

export default Screen;
