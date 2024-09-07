import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

// modals
import PCardModal from "./PCardModal";

const PCardSelection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isModalVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [isModalVisible]);
  const selectPcard = [
    {
      id: 1,
      name: "Sarah’s PCard",
      status: "Company Name | Department",
    },
    {
      id: 2,
      name: "Steve’s PCard",
      status: "Company Name | Department",
    },
  ];
  const [menuid, setmenuid] = useState(selectPcard[0].name);
  const handleIconPress = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: RFPercentage(1.3),
        }}
      >
        <Text
          style={{
            color: "#1C1C1C",
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.6),
          }}
        >
          You are currently using
        </Text>
        <Text
          style={{
            marginHorizontal: RFPercentage(0.5),
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.6),
          }}
        >
          {menuid}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handleIconPress}>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>

      <PCardModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectPcard={selectPcard}
        menuid={menuid}
        setmenuid={setmenuid}
      />
    </>
  );
};

export default PCardSelection;
