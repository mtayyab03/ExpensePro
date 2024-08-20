import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Animated,
  Easing,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo, Feather, Fontisto } from "@expo/vector-icons";
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
import PCardModal from "../components/PCardModal";

const Receipts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = submittedReceipts.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
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

      <PCardModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectPcard={selectPcard}
        menuid={menuid}
        setmenuid={setmenuid}
      />
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
