import React, { useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Text,
  Platform,
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

//screens
import Transactions from "../screens/Transactions";
import Receipts from "../screens/Receipts";
import AppLine from "../components/AppLine";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import icons from "../config/icons";
import { FontFamily } from "../config/font";

const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};
export default function BottomTab() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleIconPress = () => {
    setIsModalVisible(true);
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
            background: "#fff",
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
                  {focused ? (
                    <Image
                      source={icons.dollar}
                      resizeMode="contain"
                      style={{
                        height: 24,
                        width: 24,
                      }}
                    />
                  ) : (
                    <Image
                      source={icons.dollarb}
                      resizeMode="contain"
                      style={{
                        height: 24,
                        width: 24,
                      }}
                    />
                  )}

                  <Text
                    style={{
                      marginTop: RFPercentage(0.5),
                      fontFamily: FontFamily.medium,
                      fontSize: RFPercentage(1),
                      color: focused ? Colors.blue : Colors.grey,
                    }}
                  >
                    Transcations
                  </Text>
                  {focused ? (
                    <View
                      style={{
                        marginTop: RFPercentage(0.5),
                        width: RFPercentage(0.5),
                        height: RFPercentage(0.5),
                        backgroundColor: Colors.blue,
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
                      borderColor: "#fff",
                      width: RFPercentage(8),
                      height: RFPercentage(8),

                      borderRadius: RFPercentage(5),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: focused ? Colors.blue : Colors.primary,
                        width: RFPercentage(6),
                        height: RFPercentage(6),

                        borderRadius: RFPercentage(5),
                      }}
                    >
                      <FontAwesome6
                        name="plus"
                        size={24}
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
                  <MaterialCommunityIcons
                    name="receipt"
                    size={24}
                    color={focused ? Colors.blue : Colors.grey}
                  />
                  <Text
                    style={{
                      marginTop: RFPercentage(0.5),
                      fontFamily: FontFamily.medium,
                      fontSize: RFPercentage(1),
                      color: focused ? Colors.blue : Colors.grey,
                    }}
                  >
                    Receipts
                  </Text>
                  {focused ? (
                    <View
                      style={{
                        marginTop: RFPercentage(0.5),
                        width: RFPercentage(0.5),
                        height: RFPercentage(0.5),
                        backgroundColor: Colors.blue,
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
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: RFPercentage(1.3),
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Entypo name="cross" size={28} color="#1C1C1C" />
              </TouchableOpacity>
            </View>

            <AppLine />

            {/* button */}
            <View style={{ marginTop: RFPercentage(1) }} />
            <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
              <AppButton title="New Receipt" buttonColor={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
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
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    backgroundColor: Colors.third,
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
