import React from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

const AppLine: React.FC = () => {
  return (
    <View
      style={{
        width: "100%",
        height: RFPercentage(0.1),
        backgroundColor: Colors.lightWhite,
        borderRadius: RFPercentage(0.5),
      }}
    />
  );
};
export default AppLine;
