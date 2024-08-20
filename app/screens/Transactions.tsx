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

// modals
import PCardModal from "../components/PCardModal";
import StatusModal from "../components/StatusModal";

// componnet
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import Alert from "../components/Alert";
import Header from "../components/Header";

// models
// import postedTransactions from "../models/postedTransactions";
import { RouteProp } from "@react-navigation/native";

// Define the type for route params
type RootStackParamList = {
  Transactions: { showAlert?: boolean }; // Add other params as needed
};

// Define a type for your route prop
type TransactionsRouteProp = RouteProp<RootStackParamList, "Transactions">;
const Transactions: React.FC = () => {
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const handleTransactionPress = (transaction: any) => {
    setSelectedTransaction(transaction);
    setIsStatusModalVisible(true);
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
      <FlashMessage position="top" />
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
        {transactionSlip.map((item, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={i}
            onPress={() => handleTransactionPress(item)}
            style={{
              width: "90%",
              flexDirection: "row",
              backgroundColor: Colors.white,
              paddingVertical: RFPercentage(1.4),
              paddingHorizontal: RFPercentage(1.9),
              borderWidth: RFPercentage(0.17),
              borderColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
              alignItems: "center",
              marginVertical: RFPercentage(0.3),
              justifyContent: "space-between",
              // Shadow for iOS
              shadowColor: "#000000", // Ensure color is solid enough
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2, // Adjust opacity if necessary
              shadowRadius: 2.84,
              // Shadow for Android
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
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
                    marginTop: RFPercentage(0.8),
                    color: Colors.black,
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
          </TouchableOpacity>
        ))}
      </ScrollView>

      <PCardModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectPcard={selectPcard}
        menuid={menuid}
        setmenuid={setmenuid}
      />

      <StatusModal
        isStatusModalVisible={isStatusModalVisible}
        setIsStatusModalVisible={setIsStatusModalVisible}
        selectedTransaction={selectedTransaction}
        handleReplaceImage={handleReplaceImage}
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />

      <CustomAlert
        visible={alertVisible}
        message="Receipt submitted successfully"
        onClose={handleCloseAlert}
      />
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
  zoomButton: {
    position: "absolute",
    top: RFPercentage(1),
    right: RFPercentage(1),
    backgroundColor: Colors.black,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "90%",
  },

  loginbutton: {
    marginTop: RFPercentage(1),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    color: "#1C1C1C",
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
  modalTitle: {
    color: "#1C1C1C",
    fontFamily: FontFamily.bold,
    fontSize: RFPercentage(1.6),
    marginBottom: RFPercentage(1),
  },
  loginbuttonStatus: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
