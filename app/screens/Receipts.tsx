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
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// models
import submittedReceipts from "../models/submittedReceipts";
// componnet
import CustomAlert from "../components/CustomAlert";
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";
import Alert from "../components/Alert";
import Header from "../components/Header";
import ViewModal from "../components/ViewModal";
import PCardModal from "../components/PCardModal";
import Receipt from "../components/Receipt";
type RootStackParamList = {
  Transactions: { showAlert?: boolean }; // Add other params as needed
};

// Define a type for your route prop
type TransactionsRouteProp = RouteProp<RootStackParamList, "Transactions">;
const Receipts: React.FC = () => {
  const route = useRoute<TransactionsRouteProp>();
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    if (route.params?.showAlert) {
      setAlertVisible(true);
    }
  }, [route.params]);

  const handleCloseAlert = () => {
    setAlertVisible(false);
    // You can perform any other actions needed after the alert closes
  };
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = submittedReceipts.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // const filteredTransactions: any = [];
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

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const handleTransactionPress = (transaction: any) => {
    setSelectedTransaction(transaction);
    setIsStatusModalVisible(true);
  };
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);

  useEffect(() => {
    if (isModalVisible || isStatusModalVisible) {
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
  }, [isModalVisible || isStatusModalVisible]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [image, setImage] = useState("");
  const handleReplaceImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      setIsStatusModalVisible(false);
    }
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
          <View
            style={{
              height: "100%",
              width: RFPercentage(0.15),
              backgroundColor: "#979797",
              marginHorizontal: RFPercentage(1.6),
            }}
          />
          <Fontisto name="search" size={18} color={Colors.blacktext} />
        </View>
      </View>
      <View style={{ marginTop: RFPercentage(1.6) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(10),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((item: any, i: any) => (
            <Receipt
              key={i}
              item={item}
              onpress={() => handleTransactionPress(item)}
            />
          ))
        ) : (
          <View
            style={{
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: RFPercentage(0.15),
              borderColor: Colors.lightWhite,
              borderRadius: RFPercentage(2),
              paddingVertical: RFPercentage(10),
              paddingHorizontal: RFPercentage(4),
            }}
          >
            <Image
              source={icons.noevent}
              style={{
                width: RFPercentage(16),
                height: RFPercentage(10),
              }}
            />
            <Text
              style={{
                marginTop: RFPercentage(5),
                fontSize: RFPercentage(1.6),
                color: "#1C1C1C",
              }}
            >
              No results.
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(1),
                textAlign: "center",
                fontSize: RFPercentage(1.6),
                color: "#1C1C1C",
              }}
            >
              Update the search parameters and try again.
            </Text>
          </View>
        )}
      </ScrollView>

      <PCardModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectPcard={selectPcard}
        menuid={menuid}
        setmenuid={setmenuid}
      />
      <ViewModal
        isStatusModalVisible={isStatusModalVisible}
        setIsStatusModalVisible={setIsStatusModalVisible}
        selectedTransaction={selectedTransaction}
        handleReplaceImage={handleReplaceImage}
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />
      <CustomAlert
        visible={alertVisible}
        message="Receipt Chages Saved"
        onClose={handleCloseAlert}
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
    paddingHorizontal: RFPercentage(1.6),
    borderRadius: RFPercentage(1),
    borderWidth: RFPercentage(0.15),
    borderColor: Colors.gray,
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
