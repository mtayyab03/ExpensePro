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
import SidedText from "../components/SidedText";

// models
// import postedTransactions from "../models/postedTransactions";

const Transactions: React.FC = () => {
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
  const renderModalContent = () => {
    if (!selectedTransaction) return null;

    const { status, title, amount, trendimage: image } = selectedTransaction;

    if (status === "Missing Receipt") {
      return (
        <View
          style={{
            width: "100%",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#F5F5F5",
              borderRadius: RFPercentage(1),
              padding: RFPercentage(1.5),
              marginVertical: RFPercentage(1),
              overflow: "hidden",
            }}
          >
            <Text style={styles.modalTitle}>Transaction Details</Text>

            <SidedText name="Supplier" title={title} />
            <SidedText name="Total" title={amount} />
            <SidedText name="Transaction date" title="06-03-2024" />
          </View>
          <AppLine />

          <TouchableOpacity
            onPress={handleReplaceImage}
            style={styles.loginbuttonStatus}
            activeOpacity={0.7}
          >
            <AppButton title="Attch Receipt" buttonColor={Colors.primary} />
          </TouchableOpacity>
        </View>
      );
    } else if (status === "Pending") {
      return (
        <>
          {/* image replace */}
          {/* image replace */}
          <View
            style={{
              width: "90%",
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.grey,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginTop: RFPercentage(1),
            }}
          >
            {image && (
              <>
                <Image
                  source={image}
                  // source={image}
                  style={{
                    width: "100%",
                    height: RFPercentage(16),
                    backgroundColor: Colors.black,
                  }}
                />
                <TouchableOpacity
                  style={styles.zoomButton}
                  onPress={toggleModal}
                  activeOpacity={0.7}
                >
                  <FontAwesome5
                    name="search-plus"
                    size={20}
                    color={Colors.white}
                  />
                </TouchableOpacity>
                <Modal visible={modalVisible} transparent={true}>
                  <TouchableOpacity
                    style={styles.modalContainer}
                    onPress={toggleModal}
                  >
                    <Image
                      source={image}
                      style={styles.modalImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </Modal>
              </>
            )}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleReplaceImage}
              style={{
                width: "100%",
                backgroundColor: Colors.ilightwhite,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: RFPercentage(2),
                flexDirection: "row",
                borderWidth: RFPercentage(0.1),
                borderColor: Colors.lightWhite,
              }}
            >
              <FontAwesome5
                name="exchange-alt"
                size={20}
                color={Colors.primary}
              />
              <Text
                style={{
                  marginLeft: RFPercentage(1),
                  color: Colors.blacktext,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.7),
                }}
              >
                Replace
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "#F5F5F5",
                borderRadius: RFPercentage(1),
                padding: RFPercentage(1.5),
                marginVertical: RFPercentage(1),
                overflow: "hidden",
              }}
            >
              <Text style={styles.modalTitle}>Transaction Details</Text>

              <SidedText name="Supplier" title={title} />
              <SidedText name="Total" title={amount} />
              <SidedText name="Transaction date" title="06-03-2024" />
              <View style={{ marginTop: RFPercentage(0.5) }} />
              <AppLine />
              <View style={{ marginBottom: RFPercentage(0.5) }} />

              <SidedText name="Expense Category" title="Travel" />
              <SidedText
                name="Short Description
                of Purchase"
                title="Ride to Airport"
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setIsStatusModalVisible(false)}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <AppButton title="Edit" buttonColor={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => setIsStatusModalVisible(false)}
            activeOpacity={0.7}
          >
            <View
              style={{
                width: "90%",
                paddingVertical: RFPercentage(1.5),
                borderRadius: RFPercentage(1),
                borderWidth: RFPercentage(0.15),
                borderColor: "#B7B7B7",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.buttontext}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </>
      );
    } else if (status === "Complete") {
      return (
        <>
          {/* image replace */}
          <View
            style={{
              width: "90%",
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.grey,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginTop: RFPercentage(1),
            }}
          >
            {image && (
              <>
                <Image
                  source={image}
                  // source={image}
                  style={{
                    width: "100%",
                    height: RFPercentage(16),
                  }}
                />
                <TouchableOpacity
                  style={styles.zoomButton}
                  onPress={toggleModal}
                  activeOpacity={0.7}
                >
                  <FontAwesome5
                    name="search-plus"
                    size={20}
                    color={Colors.white}
                  />
                </TouchableOpacity>
                <Modal visible={modalVisible} transparent={true}>
                  <TouchableOpacity
                    style={styles.modalContainer}
                    onPress={toggleModal}
                  >
                    <Image
                      source={image}
                      style={styles.modalImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </Modal>
              </>
            )}
          </View>

          <View
            style={{
              width: "100%",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "#F5F5F5",
                borderRadius: RFPercentage(1),
                padding: RFPercentage(1.5),
                marginVertical: RFPercentage(1),
                overflow: "hidden",
              }}
            >
              <Text style={styles.modalTitle}>Transaction Details</Text>

              <SidedText name="Supplier" title={title} />
              <SidedText name="Total" title={amount} />
              <SidedText name="Transaction date" title="06-03-2024" />
              <View style={{ marginTop: RFPercentage(0.5) }} />
              <AppLine />
              <View style={{ marginBottom: RFPercentage(0.5) }} />

              <SidedText name="Expense Category" title="Travel" />
              <SidedText
                name="Short Description
of Purchase"
                title="Ride to Airport"
              />
            </View>
          </View>
        </>
      );
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

      {/* render receipt stsus modal */}
      <Modal
        visible={isStatusModalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setIsStatusModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
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
                marginVertical: RFPercentage(1),
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
                  Transaction Details
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {selectedTransaction && (
                  <View
                    style={{
                      marginRight: RFPercentage(1),
                      backgroundColor: "#FFFBE6",
                      padding: RFPercentage(0.5),
                      paddingHorizontal: RFPercentage(1.2),
                      borderWidth: RFPercentage(0.16),
                      borderColor: "#874D00",
                      borderRadius: RFPercentage(0.7),
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#874D00",
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.4),
                      }}
                    >
                      {selectedTransaction.status}
                    </Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={() => setIsStatusModalVisible(false)}
                >
                  <Entypo name="cross" size={28} color="#1C1C1C" />
                </TouchableOpacity>
              </View>
            </View>
            <AppLine />

            {/* Render modal content based on selected transaction */}
            {renderModalContent()}
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
