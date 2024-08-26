import React, { useState, useEffect, useRef } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Text,
  Platform,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome6, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
//screens
import Transactions from "../screens/Transactions";
import Receipts from "../screens/Receipts";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import TransactionIcon from "../../assets/svg/TransactionIcon";
import ReceiptIcon from "../../assets/svg/ReceiptIcon";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import UploadModal from "../components/UploadModal";

type RootStackParamList = {
  ReceiptSubmit: { image: string };
  ReceiptSubmitLong: { image: string };
};

// Define the type for your navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Tab = createBottomTabNavigator();
const EmptyScreen: React.FC = () => {
  return null;
};
const BottomTab: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(false);
  const navigation = useNavigation<NavigationProp>();
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
      name: "Take Photo",
    },
    {
      id: 2,
      name: "Upload from Photos",
    },
    {
      id: 3,
      name: "Upload from Files",
    },
  ];
  const [menuid, setmenuid] = useState(selectPcard[0].name);

  const handleIconPress = () => {
    setIsModalVisible(true);
  };

  const handleSelection = async (item: any) => {
    let result;

    if (item.name === "Take Photo") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
    } else if (item.name === "Upload from Photos") {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
    } else if (item.name === "Upload from Files") {
      result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Adjust the type as per your requirement
        copyToCacheDirectory: true,
      });
    }

    if (result && !result.canceled) {
      const fileUri = result.assets[0].uri;
      console.log("File URI:", fileUri);
      navigation.navigate(user ? "ReceiptSubmit" : "ReceiptSubmitLong", {
        image: fileUri,
      });
    }

    setmenuid(item.name);
    setIsModalVisible(false);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: wp("18%"),
            padding: Platform.OS === "ios" ? 20 : 5,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: -1, height: 10 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation: 5, // Android drop shadow
          },
        }}
      >
        <Tab.Screen
          name="Transactions"
          component={Transactions}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TransactionIcon width={24} height={24} focused={focused} />
                  <Text
                    style={{
                      marginTop: RFPercentage(0.5),
                      fontFamily: FontFamily.medium,
                      fontSize: RFPercentage(1),
                      color: focused ? Colors.green : Colors.darkgray,
                    }}
                  >
                    Transcations
                  </Text>
                  {focused ? (
                    <View
                      style={{
                        position: "absolute",
                        top: RFPercentage(3.9),
                        marginTop: RFPercentage(1),
                        width: RFPercentage(6.8),
                        height: RFPercentage(0.2),
                        backgroundColor: Colors.green,
                        borderRadius: RFPercentage(1),
                      }}
                    />
                  ) : null}
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TouchableOpacity
                  style={{
                    top: Platform.OS === "ios" ? -22 : -35,
                    alignItems: "center",
                  }}
                  onPress={handleIconPress}
                >
                  <View
                    style={{
                      borderWidth: RFPercentage(2),
                      borderColor: "transparent",
                      width: RFPercentage(8),
                      height: RFPercentage(8),
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: RFPercentage(0.3),
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: focused ? Colors.blue : Colors.primary,
                        width: RFPercentage(7),
                        height: RFPercentage(7),
                        borderRadius: RFPercentage(5),
                        paddingLeft: RFPercentage(0.2),
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: -5,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        elevation: 5, // Android drop shadow
                      }}
                    >
                      <FontAwesome6
                        name="plus"
                        size={32}
                        color={Colors.white}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: FontFamily.medium,
                      fontSize: RFPercentage(1),

                      color: focused ? Colors.primary : Colors.darkgray,
                    }}
                  >
                    Add Receipt
                  </Text>
                </TouchableOpacity>
              );
            },
          }}
        />

        <Tab.Screen
          name="Receipts"
          component={Receipts}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ReceiptIcon width={24} height={24} focused={focused} />
                  <Text
                    style={{
                      marginTop: RFPercentage(0.5),
                      fontFamily: FontFamily.medium,
                      fontSize: RFPercentage(1),
                      color: focused ? Colors.green : Colors.darkgray,
                    }}
                  >
                    Receipts
                  </Text>
                  {focused ? (
                    <View
                      style={{
                        position: "absolute",
                        top: RFPercentage(3.9),
                        marginTop: RFPercentage(0.5),
                        width: RFPercentage(6.8),
                        height: RFPercentage(0.2),
                        backgroundColor: Colors.green,
                        borderRadius: RFPercentage(1),
                      }}
                    />
                  ) : null}
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>

      <UploadModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectPcard={selectPcard}
        handleSelection={handleSelection}
        menuid={menuid}
      />
    </>
  );
};

const styles = StyleSheet.create({
  activeIcon: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  buttontext: {
    color: "#1C1C1C",
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
});
export default BottomTab;
