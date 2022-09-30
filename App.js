import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [weightText, setWeightText] = useState("");
  const [heightText, setHeightText] = useState("");
  const [inchesText, setInchesText] = useState("");

  //is the Switch on or not
  const [isEnabled, setIsEnabled] = useState(false);
  //should display the extra Input or
  const [shouldShow, setShouldShow] = useState(false);

  //content of the input placeholders for Height and Weight
  const [weightLabel, setWeightLabel] = useState("Kilograms...");
  const [heightLabel, setHeightLabel] = useState("Centimeters...");

  const [resultLabel, setResultLabel] = useState(
    "Enter your weight and height!"
  );

  var weight = 0;
  var height = 0;
  var bmi = 0.0;

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    changeLabelsValues();
  };

  //updating labels, inputs and placeholders
  const changeLabelsValues = () => {
    setWeightLabel(isEnabled ? "Kilograms..." : "Pounds...");
    setHeightLabel(isEnabled ? "Centimeters..." : "Feets...");
    setShouldShow(!shouldShow);
    setWeightText("");
    setHeightText("");
    setInchesText("");
    setResultLabel("Enter your weight and height!");
  };

  const calculateBMI = () => {
    //setting the weight and height values from the TextInputs
    weight = Number(weightText);
    height = Number(heightText);

    //Imperial System scenario
    if (isEnabled) {
      weight = weight / 2.2;
      height = (height * 12 + Number(inchesText)) * 2.54;
    }

    //calculating BMI and updating the result label
    var metres = height / 100;
    bmi = weight / (metres * metres);
    setResultLabel(
      "Your BMI is: " +
        bmi.toFixed(2) +
        "\n\nCategory: " +
        getWeightCategory(bmi)
    );
  };

  const getWeightCategory = (bmiValue) => {
    switch (true) {
      case bmiValue <= 18.5:
        return "Underweight";
      case bmiValue <= 24.9:
        return "Normal Weight";
      case bmiValue <= 29.9:
        return "Overweight";
      default:
        return "Obesity";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BMI Calculator</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.metricOptions}>Metric System</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#281E5D" : "#D9D9D9"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.metricOptions}>Imperial System</Text>
      </View>

      <View style={styles.columnContainer}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          placeholder={weightLabel}
          keyboardType="numeric"
          onChangeText={setWeightText}
          maxLength={4}
          value={weightText}
        />
      </View>

      <View style={styles.columnContainer}>
        <Text>Height</Text>
        <TextInput
          style={styles.input}
          placeholder={heightLabel}
          keyboardType="numeric"
          onChangeText={setHeightText}
          maxLength={4}
          value={heightText}
        />
      </View>

      <View style={styles.vanishingComponent}>
        {shouldShow ? (
          <TextInput
            style={styles.input}
            placeholder="Inches..."
            keyboardType="numeric"
            onChangeText={setInchesText}
            maxLength={4}
          />
        ) : null}
      </View>

      <View style={styles.button}>
        <Button title="Calculate!" color="#ffffff" onPress={calculateBMI} />
      </View>

      <Text style={styles.headerText}>{resultLabel}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-top",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "flex-start",
    margin: 50,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },

  button: {
    backgroundColor: "#281E5D",
    borderRadius: 5,
    width: 150,
    margin: 50,
  },
  metricOptions: {
    margin: 10,
    textAlign: "left",
  },
  columnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  vanishingComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
});
