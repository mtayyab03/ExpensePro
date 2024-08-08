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
import submittedReceipts from "../models/submittedReceipts";

// componnet
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Receipt from "../components/Receipt";

const Receipts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = submittedReceipts.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            color: Colors.blacktext,
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

      <Alert />

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
          <Receipt key={i} item={item} />
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
    color: Colors.black,
    fontFamily: FontFamily.regular,
  },
});
