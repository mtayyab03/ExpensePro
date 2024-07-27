import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";

const Transactions = () => {
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
  ];
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "100%",
          padding: RFPercentage(1.2),
          paddingVertical: RFPercentage(2),
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
          <MaterialIcons
            name="notifications-none"
            size={24}
            color={Colors.white}
          />
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
          Sarah’s PCard
        </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color={Colors.primary}
        />
      </View>

      <AppLine />

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          backgroundColor: "#FFFBE6",
          padding: RFPercentage(1.5),
          borderWidth: RFPercentage(0.1),
          borderColor: Colors.lyellow,
          borderRadius: RFPercentage(1),
          alignItems: "center",
          marginVertical: RFPercentage(1.8),
        }}
      >
        <Ionicons name="alert-circle" size={32} color={Colors.yellow} />
        <View style={{ marginLeft: RFPercentage(1.5) }}>
          <Text
            style={{
              color: Colors.blacktext,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.8),
            }}
          >
            Receipts due Mar 19
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(1),
              color: Colors.blacktext,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.6),
            }}
          >
            You have{" "}
            <Text
              style={{
                color: Colors.blacktext,
                fontFamily: FontFamily.bold,
                fontSize: RFPercentage(1.6),
              }}
            >
              3
            </Text>{" "}
            outstanding transactions
          </Text>
        </View>
      </View>

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
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {transactionSlip.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              flexDirection: "row",
              backgroundColor: "rgb(245, 245, 245)",
              padding: RFPercentage(1.5),
              borderWidth: RFPercentage(0.17),
              borderColor: "rgb(235, 235, 235)",
              borderRadius: RFPercentage(1),
              alignItems: "center",
              marginVertical: RFPercentage(0.3),
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={item.trendimage}
                resizeMode="contain"
                style={{
                  height: RFPercentage(6),
                  width: RFPercentage(6),
                }}
              />
              <View style={{ marginLeft: RFPercentage(1.5) }}>
                <Text
                  style={{
                    color: "#1E1E1E",
                    fontFamily: FontFamily.bold,
                    fontSize: RFPercentage(1.6),
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: RFPercentage(1),
                    color: Colors.blacktext,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.6),
                  }}
                >
                  {item.amount}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginLeft: RFPercentage(1),
                backgroundColor: item.bgcolor,
                padding: RFPercentage(0.5),
                paddingHorizontal: RFPercentage(1.2),
                borderWidth: RFPercentage(0.16),
                borderColor: item.textcolor,
                borderRadius: RFPercentage(0.7),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: item.textcolor,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.4),
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
};

export default Transactions;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
