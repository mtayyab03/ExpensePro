import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import FlashMessage from "react-native-flash-message";
import * as ImagePicker from "expo-image-picker";
import CustomAlert from "../components/CustomAlert";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";
import { useRoute, useNavigation } from "@react-navigation/native";

const CustomModal = ({
  isModalVisible,
  setIsModalVisible,
  selectPcard,
  menuid,
  setmenuid,
}: any) => {
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="none"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        {/* Modal content */}
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: RFPercentage(1),
            paddingBottom: RFPercentage(5),
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: RFPercentage(1.3),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#1C1C1C",
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(1.9),
                }}
              >
                PCard User
              </Text>
            </View>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Entypo name="cross" size={28} color="#1C1C1C" />
            </TouchableOpacity>
          </View>

          {/* Button */}
          <View style={{ marginTop: RFPercentage(1) }} />

          {selectPcard.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setmenuid(item.name);
                setIsModalVisible(false);
              }}
              style={{
                paddingVertical: RFPercentage(1.5),
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: RFPercentage(1),
                backgroundColor: menuid === item.name ? "#DFEEEC" : undefined,
              }}
              activeOpacity={0.7}
            >
              <View style={{ width: "90%" }}>
                <Text
                  style={{
                    color: "#1C1C1C",
                    fontFamily: FontFamily.bold,
                    fontSize: RFPercentage(1.6),
                  }}
                >
                  {item.name}
                </Text>
                <View style={{ marginTop: RFPercentage(0.6) }}>
                  <Text
                    style={{
                      color: "#1C1C1C",
                      fontFamily: FontFamily.regular,
                      fontSize: RFPercentage(1.6),
                    }}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
