import React, { useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import DoctorCard from "./DoctorCard";
import Screen from "./Screen";

const doctors = [
  {
    _id: 1,
    image: require("../assets/doc_1.jpg"),
    name: "Dr. Rachel Douglas",
    qualification: "M.D",
    exp: "3 years",
  },
  {
    _id: 2,
    image: require("../assets/doc_2.jpg"),
    name: "Dr. Carlos Holland",
    qualification: "MBBS",
    exp: "2 years",
  },
  {
    _id: 3,
    image: require("../assets/doc_3.jpg"),
    name: "Dr. Chris Flemings",
    qualification: "M.D",
    exp: "3 years",
  },
  {
    _id: 4,
    image: require("../assets/doc_4.jpg"),
    name: "Dr. Mae Carr",
    qualification: "M.D",
    exp: "4 years",
  },
];

function DoctorList(props) {
  const [refreshing, setRefresing] = useState(false);
  return (
    <Screen>
      <Text style={styles.heading}>Doctors Available</Text>
      <FlatList
        data={doctors}
        keyExtractor={(doctor) => doctor._id.toString()}
        renderItem={({ item }) => <DoctorCard item={item} />}
        refreshing={refreshing}
        onRefresh={() => {
          console.log("refresh");
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 10,
  },
});

export default DoctorList;
