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
