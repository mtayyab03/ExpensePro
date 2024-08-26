import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

const SidedText = ({ name, title }: any) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: RFPercentage(1),
      }}
    >
      <View style={{ width: "50%" }}>
        <Text
          style={{
            color: Colors.darkgray,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.6),
          }}
        >
          {name}
        </Text>
      </View>

      <Text
        style={{
          color: Colors.blacktext,
          fontFamily: FontFamily.bold,
          fontSize: RFPercentage(1.6),
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SidedText;
