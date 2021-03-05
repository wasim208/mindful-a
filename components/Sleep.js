import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Screen from "./Screen";

const Sleep = (navigation, check) => {
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.card}>
          <Image
            style={styles.image_sleep}
            source={require("../assets/sleeping.jpg")}
          />
          <Text style={styles.cardtext}>
            Adults should get as close to 8 hours of sleep per night as they
            can. Although every individual's body differs, sleep is essential
            for learning and improving daily productivity.
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 10,
  },
  image_sleep: {
    alignSelf: "center",
    height: 300,
    width: 318,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardtext: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    color: "gray",
  },
});

export default Sleep;
