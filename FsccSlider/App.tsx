import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SliderFscc from "./src/components/SliderFscc";

export default function App() {
  const handleSlider = (newValue: number[]) => {
    console.log("Changing slider", newValue);
  };

  return (
    <View style={styles.container}>
      <Text>FSCC SLIDER!</Text>
      {/* <StatusBar style="auto" /> */}
      <SliderFscc
        initialValue={0.5}
        min={0}
        max={100}
        step={1}
        onChange={handleSlider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
