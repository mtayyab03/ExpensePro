import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Ionicons, Feather, Fontisto } from "@expo/vector-icons";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";

const Receipts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const transactionSlip = [
    {
      id: 1,
      trendimage: icons.picslip,
      title: "Receipt 7056",
      amount: "$1,399.00",
      status: "Team Lunch",
    },
    {
      id: 2,
      trendimage: icons.picslip,
      title: "Receipt 7052",
      amount: "$62.16",
      status: "New Laptop",
    },
    {
      id: 3,
      trendimage: icons.picslip,
      title: "Receipt 7050",
      amount: "$13.50",
      status: "Lunch for me and intern",
    },
    {
      id: 4,
      trendimage: icons.picslip,
      title: "Receipt 112301",
      amount: "$15.25",
      status: "Ride to Hotel",
    },
    {
      id: 5,
      trendimage: icons.picslip,
      title: "Receipt 112302",
      amount: "$25.50",
      status: "Office Supplies",
    },
    {
      id: 5,
      trendimage: icons.picslip,
      title: "Receipt 112303",
      amount: "$25.50",
      status: "Ride To Bank",
    },
  ];
  const filteredTransactions = transactionSlip.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
          Submitted Receipts
        </Text>
        <Text
          style={{
            marginTop: RFPercentage(0.5),
            color: "rgb(89, 89, 89)",
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.6),
          }}
        >
          Receipts submitted in the last 30 days.
        </Text>
      </View>

      {/* card */}
      <View style={styles.searchmain}>
        <TextInput
          style={styles.inputtext}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search"
          placeholderTextColor="#979797"
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="mic" size={18} color={Colors.primary} />
          <View
            style={{
              height: "100%",
              width: RFPercentage(0.15),
              backgroundColor: "#979797",
              marginHorizontal: RFPercentage(1.5),
            }}
          />
          <Fontisto name="search" size={18} color={Colors.blacktext} />
        </View>
      </View>
      <View style={{ marginTop: RFPercentage(1.5) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(10),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {filteredTransactions.map((item, i) => (
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
                    color: Colors.grey,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.6),
                  }}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  color: "#1E1E1E",
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(1.6),
                }}
              >
                {item.amount}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
};

export default Receipts;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  searchmain: {
    marginTop: RFPercentage(2),
    width: "90%",
    paddingHorizontal: RFPercentage(1.5),
    borderRadius: RFPercentage(1),
    borderWidth: RFPercentage(0.15),
    borderColor: "#979797",
    backgroundColor: Colors.white,
    height: RFPercentage(5),
    marginVertical: RFPercentage(0.5),
    justifyContent: "space-between",
    flexDirection: "row",
  },

  inputtext: {
    width: "75%",
    fontSize: RFPercentage(1.8),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
  },
});
