import React, { useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Text,
  Platform,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome6, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

//screens
import Transactions from "../screens/Transactions";
import Receipts from "../screens/Receipts";
import AppLine from "../components/AppLine";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import icons from "../config/icons";
import { FontFamily } from "../config/font";
import TransactionIcon from "../../assets/svg/TransactionIcon";
import ReceiptIcon from "../../assets/svg/ReceiptIcon";

const Tab = createBottomTabNavigator();
const EmptyScreen: React.FC = () => {
  return null;
};
const BottomTab: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

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
    let result: any;
    if (item.name === "Take Photo") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
    } else if (
      item.name === "Upload from Photos" ||
      item.name === "Upload from Files"
    ) {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
    }

    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      console.log("Image URI:", imageUri);
      navigation.navigate("ReceiptSubmit", { image: imageUri });
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
                      color: focused ? Colors.green : Colors.grey,
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

                      color: focused ? Colors.primary : Colors.grey,
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
                      color: focused ? Colors.green : Colors.grey,
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
            {selectPcard.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleSelection(item)}
                style={{
                  paddingVertical: RFPercentage(2),
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
                </View>
              </TouchableOpacity>
            ))}

            {/* <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginVertical: RFPercentage(1.3),
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
                                    Attach Receipt -
                                </Text>
                                <Text
                                    style={{
                                        marginHorizontal: RFPercentage(0.5),
                                        color: Colors.grey,
                                        fontFamily: FontFamily.regular,
                                        fontSize: RFPercentage(1.7),
                                    }}
                                >
                                    Amazon
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Entypo
                                    name='cross'
                                    size={28}
                                    color='#1C1C1C'
                                />
                            </TouchableOpacity>
                         </View>
 
                          <AppLine />

                          
                         <View style={{ marginTop: RFPercentage(1) }} />
                         <TouchableOpacity
                            style={styles.loginbutton}
                            activeOpacity={0.7}
                         >
                            <AppButton
                                title='New Receipt'
                                buttonColor={Colors.primary}
                            />
                         </TouchableOpacity>
                         <TouchableOpacity
                            style={styles.loginbutton}
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
                                <Text style={styles.buttontext}>
                                    Previously Submitted Receipt
                                </Text>
                            </View>
                         </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
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
