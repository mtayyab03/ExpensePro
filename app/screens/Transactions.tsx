import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as ImagePicker from "expo-image-picker";
import CustomAlert from "../components/CustomAlert";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { useRoute } from "@react-navigation/native";

// modals
import StatusModal from "../components/StatusModal";

// componnet
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";
import Alert from "../components/Alert";
import Header from "../components/Header";
import PCardSelection from "../components/PCardSelection";

// models
import postedTransactions from "../models/postedTransactions";
import { RouteProp } from "@react-navigation/native";
import Transaction from "../components/Transaction";

// Define the type for route params
type RootStackParamList = {
  Transactions: { showAlert?: boolean; selectedTransactionTitle?: string };
};

// Define a type for your route prop
type TransactionsRouteProp = RouteProp<RootStackParamList, "Transactions">;
const Transactions: React.FC = () => {
  const route = useRoute<TransactionsRouteProp>();
  const [alertVisible, setAlertVisible] = useState(false);
  const { selectedTransactionTitle } = route.params || {};
  useEffect(() => {
    if (selectedTransactionTitle) {
      // Open the appropriate modal based on the transaction title
      if (selectedTransactionTitle === "Chipotle") {
        setIsStatusModalVisible(true);
      }
    }
  }, [selectedTransactionTitle]);
  useEffect(() => {
    if (route.params?.showAlert) {
      setAlertVisible(true);
    }

    if (route.params?.selectedTransactionTitle) {
      const transaction: any = postedTransactions.find(
        (item) => item.title === route.params.selectedTransactionTitle
      );
      if (transaction) {
        setSelectedTransaction(transaction);
        setIsStatusModalVisible(true);
      }
    }
  }, [route.params]);

  const handleCloseAlert = () => {
    setAlertVisible(false);
    // You can perform any other actions needed after the alert closes
  };
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isStatusModalVisible) {
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
  }, [isStatusModalVisible]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
      <Header />
      <PCardSelection />

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
            paddingVertical: RFPercentage(0.2),
            paddingHorizontal: RFPercentage(0.9),
            borderRadius: 4,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.darkgray,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.9),
            }}
          >
            Mar 4-17
          </Text>
        </View>
      </View>

      {/* card */}
      <View style={{ marginTop: RFPercentage(1.6) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {postedTransactions.map((item, i) => (
          <Transaction
            key={i}
            item={item}
            handleTransactionPress={handleTransactionPress}
          />
        ))}
      </ScrollView>

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
