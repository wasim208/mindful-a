import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  AntDesign,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.childView}>
        <Image style={styles.image} source={require("../assets/tree.png")} />
      </View>
      <View style={styles.childView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Doctorlist")}
        >
          <Text style={styles.btn_txt}>Counsult a doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Questionnaire")}
        >
          <Text style={styles.btn_txt}>Take Questionnaire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tips")}
        >
          <Text style={styles.btn_txt}>Activity Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tasks")}
        >
          <Text style={styles.btn_txt}>Your Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  childView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 400,
  },
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 5,
  },
  btn_txt: {
    padding: 4,
    color: "white",
    fontSize: 18,
  },
});

export default Home;
