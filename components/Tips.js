import React from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "./Screen";

const Tips = ({ navigation, check }) => {
  return (
    <Screen>
      <View style={styles.tipspage}>
        <Text style={styles.title}>
          Here are some activities that can help to improve your overall
          psychological well-being.
        </Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Sleep")}
        >
          <View style={styles.cardlayout}>
            <Text style={styles.cardtxt}>Get plenty of sleep.</Text>
            <Text style={styles.cardtxt}> &gt; </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardlayout}>
            <Text style={styles.cardtxt}>Enjoy small aspects of the day.</Text>
            <Text style={styles.cardtxt}> &gt; </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardlayout}>
            <Text style={styles.cardtxt}>Exercise.</Text>
            <Text style={styles.cardtxt}> &gt; </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardlayout}>
            <Text style={styles.cardtxt}>Yoga.</Text>
            <Text style={styles.cardtxt}> &gt; </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardlayout}>
            <Text style={styles.cardtxt}>Deep breathing exercises.</Text>
            <Text style={styles.cardtxt}> &gt; </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  tipspage: {
    flex: 1,
  },
  card: {
    padding: 10,
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
  },
  cardtxt: {
    fontSize: 20,
  },
  cardlayout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "grey",
  },
});

export default Tips;
