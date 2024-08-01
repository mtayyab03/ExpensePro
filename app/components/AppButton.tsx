import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

interface AppButtonProps {
  title: string;
  buttonColor: string;
}
const AppButton: React.FC<AppButtonProps> = ({ title, buttonColor }) => {
  return (
    <View
      style={{
        width: "90%",
        paddingVertical: RFPercentage(1.5),
        borderRadius: RFPercentage(1),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: buttonColor,
      }}
    >
      <Text style={styles.buttontext}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
});
export default AppButton;
