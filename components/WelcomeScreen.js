import React from "react";
import Screen from "./Screen";
import { View, Text, StyleSheet, Button, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <Screen>
      <View style={styles.contentView}>
        <Text style={styles.text}>Get Help</Text>
        <Text style={styles.text}>From Experts.</Text>
      </View>
      <View style={styles.contentView}>
        <Image
          style={styles.image_meditation}
          source={require("../assets/meditation.png")}
        />
      </View>
      <View style={styles.contentView}>
        <Button title="Get Started"></Button>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image_meditation: {
    height: 300,
    width: 400,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default WelcomeScreen;
