import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useNotification } from "../appContext/NotificationContext";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { MaterialIcons } from "@expo/vector-icons";

const Header: React.FC = () => {
  const navigation = useNavigation<any>();
  const { notificationCount } = useNotification();
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View
      style={{
        width: "100%",
        padding: RFPercentage(1.2),
        paddingVertical: RFPercentage(1.5),
        backgroundColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: Colors.white,
          fontFamily: FontFamily.bold,
          fontSize: RFPercentage(1.8),
        }}
      >
        Receipt Submitter
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setIsPressed(true);
            // Navigate to NotificationScreen or perform other actions
            navigation.navigate("NotificationScreen");
          }}
          onPressOut={() => setIsPressed(false)} // Reset the pressed state when touch is released
          style={{
            position: "relative",
            width: RFPercentage(3.2),
            height: RFPercentage(3.2),
            borderRadius: RFPercentage(0.5),
            backgroundColor: isPressed ? "#C4DCE1" : Colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="notifications-none"
            size={24}
            color={isPressed ? Colors.black : Colors.white}
          />
          {notificationCount > 0 && ( // Show the number only if there are notifications
            <View
              style={{
                position: "absolute",
                right: 0, // Position the number to the top-right corner of the icon
                top: 1,
                backgroundColor: "red",
                borderRadius: RFPercentage(2),
                width: RFPercentage(1.5),
                height: RFPercentage(1.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: RFPercentage(1.2),
                  fontFamily: FontFamily.bold,
                }}
              >
                {notificationCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={{ marginRight: RFPercentage(1) }} />
        <Text
          style={{
            marginHorizontal: RFPercentage(0.5),
            color: Colors.white,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.6),
          }}
        >
          szatkovich
        </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color={Colors.white}
        />
      </View>
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
export default Header;
