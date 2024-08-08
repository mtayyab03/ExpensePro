import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Transaction from "../components/Transaction";

// models
import postedTransactions from "../models/postedTransactions";

const Transactions: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
  const transactionSlip = [
    {
      id: 1,
      trendimage: icons.plusdot,
      title: "Amazon",
      amount: "$1,399.00",
      status: "Missing Receipt",
      textcolor: "#874D00",
      bgcolor: "#FFFBE6",
    },
    {
      id: 2,
      trendimage: icons.plusdot,
      title: "MEDITERRANEAN CA...",
      amount: "$62.16",
      status: "Missing Receipt",
      textcolor: "#874D00",
      bgcolor: "#FFFBE6",
    },
    {
      id: 3,
      trendimage: icons.plusdot,
      title: "Chipotle",
      amount: "$13.50",
      status: "Missing Receipt",
      textcolor: "#874D00",
      bgcolor: "#FFFBE6",
    },
    {
      id: 4,
      trendimage: icons.picslip,
      title: "Lyft",
      amount: "$15.25",
      status: "Pending",
      textcolor: "#385F68",
      bgcolor: "#E2F2F8",
    },
    {
      id: 5,
      trendimage: icons.picslip,
      title: "Chick-fil-At",
      amount: "$25.50",
      status: "Complete",
      textcolor: "#206152",
      bgcolor: "#DFEEEC",
    },
    {
      id: 6,
      trendimage: icons.plusdot,
      title: "Amazon",
      amount: "$1,399.00",
      status: "Missing Receipt",
      textcolor: "#874D00",
      bgcolor: "#FFFBE6",
    },
    {
      id: 7,
      trendimage: icons.plusdot,
      title: "MEDITERRANEAN CA...",
      amount: "$62.16",
      status: "Missing Receipt",
      textcolor: "#874D00",
      bgcolor: "#FFFBE6",
    },
    {
      id: 8,
      trendimage: icons.plusdot,
      title: "Chipotle",
      amount: "$13.50",
      status: "Missing Receipt",
      textcolor: "#874D00",
      bgcolor: "#FFFBE6",
    },
    {
      id: 9,
      trendimage: icons.picslip,
      title: "Lyft",
      amount: "$15.25",
      status: "Pending",
      textcolor: "#385F68",
      bgcolor: "#E2F2F8",
    },
    {
      id: 10,
      trendimage: icons.picslip,
      title: "Chick-fil-At",
      amount: "$25.50",
      status: "Complete",
      textcolor: "#206152",
      bgcolor: "#DFEEEC",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <Header />

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

      <AppLine />

      <Alert />

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(0.5),
        }}
      >
        <Text
          style={{
            color: "#262626",
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(2.2),
          }}
        >
          Posted Transactions
        </Text>

        <View
          style={{
            marginLeft: RFPercentage(1),
            backgroundColor: "rgb(235, 235, 235)",
            padding: RFPercentage(0.7),
            paddingHorizontal: RFPercentage(1.2),
            borderRadius: RFPercentage(1),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "rgb(89, 89, 89)",
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.7),
            }}
          >
            Mar 4-17
          </Text>
        </View>
      </View>

      {/* card */}
      <View style={{ marginTop: RFPercentage(1.5) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {postedTransactions.map((item, i) => (
          <Transaction key={i} item={item} />
        ))}
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
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
          {/* Your modal content */}
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

            {/* button */}
            <View style={{ marginTop: RFPercentage(1) }} />

            {selectPcard.map((item) => (
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
    </Screen>
  );
};

export default Transactions;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  loginbutton: {
    paddingVertical: RFPercentage(1.5),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1),
    backgroundColor: "#DFEEEC",
  },
  buttontext: {
    color: "#1C1C1C",
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
});
