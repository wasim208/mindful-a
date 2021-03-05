import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

import Screen from "../components/Screen";

const Landing = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.landingView}>
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
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Login")}
          ></Button>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  landingView: {
    flex: 1,
    backgroundColor: "white",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  image_meditation: {
    height: 300,
    width: 400,
  },
});

export default Landing;
