import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import Header from "../components/Header";
import AppLine from "../components/AppLine";
import AppButton from "../components/AppButton";
const ReceiptCategory = ({ route }: any) => {
  const { image } = route.params;
  const [menuid, setmenuid] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const navigation = useNavigation();

  const handlePress = (i: number, name: string) => {
    setSelectedIndex(i);
    setSelectedName(name);
  };

  const handleNext = () => {
    if (selectedName) {
      navigation.navigate("ReceitpSubmitEmployee", { selectedName, image });
    } else {
      // Handle case when no category is selected, e.g., show an alert
      Alert.alert("Please select a category before proceeding.");
    }
  };
  const selectCategory = [
    {
      id: 1,
      name: "Advertising",
      status: "Marketing, Donations",
      icon: icons.YoutubeLogo,
    },
    {
      id: 2,
      name: "Building",
      status:
        "Repairs & Maintenance, Ground Maintenance, Security Expense, Cleaning",
      icon: icons.Buildings,
    },
    {
      id: 3,
      name: "Education",
      status: "Training Courses, Professional Licenses",
      icon: icons.Student,
    },
    {
      id: 4,
      name: "Employee Expense",
      status: "Team Building, Team Meals, Employee Gifts",
      icon: icons.Users,
    },
    {
      id: 5,
      name: "Freight",
      status: "Training Courses, Professional Licenses",
      icon: icons.Truck,
    },
    {
      id: 6,
      name: "Imports",
      status: "Team Building, Team Meals, Employee Gifts",
      icon: icons.Package,
    },
    {
      id: 7,
      name: "Job Cost",
      status: "Job-related Supplies, Subcontracting",
      icon: icons.Briefcase,
    },
    {
      id: 8,
      name: "IT",
      status: "Computers, Software Licenses",
      icon: icons.Desktop,
    },
    {
      id: 9,
      name: "Meals",
      status: "Lunch Bar Expenses, Company Event Food",
      icon: icons.ForkKnife,
    },
  ];
  return (
    <Screen style={styles.screen}>
      <Header />

      <View
        style={{
          width: "90%",
          marginVertical: RFPercentage(1.3),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.blacktext,
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(2.2),
          }}
        >
          Add Receipt
        </Text>

        <View>
          <Text
            style={{
              color: Colors.blacktext,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1),
              marginBottom: RFPercentage(0.5),
            }}
          >
            Step 2 of 3
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: RFPercentage(4),
                height: RFPercentage(0.8),
                backgroundColor: Colors.primary,
                borderRadius: RFPercentage(0.1),
              }}
            />
            <View
              style={{
                width: RFPercentage(4),
                marginLeft: RFPercentage(0.3),

                height: RFPercentage(0.8),
                backgroundColor: Colors.primary,
                borderRadius: RFPercentage(0.1),
              }}
            />
            <View
              style={{
                marginLeft: RFPercentage(0.3),
                width: RFPercentage(4),
                height: RFPercentage(0.8),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(0.1),
              }}
            />
          </View>
        </View>
      </View>

      <AppLine />

      <View
        style={{
          width: "90%",
          marginVertical: RFPercentage(1.5),
        }}
      >
        <View
          style={{
            width: "80%",
          }}
        >
          <Text
            style={{
              color: Colors.blacktext,
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(1.7),
            }}
          >
            Select Expense Category
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(0.5),
              color: Colors.grey,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.5),
            }}
          >
            Select all that apply. Categories selected assist admins with
            assigning codes.
          </Text>
        </View>
      </View>

      {/* card */}

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(7),
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {selectCategory.map((item: any, i: number) => (
          <TouchableOpacity
            onPress={() => handlePress(i, item.name)}
            activeOpacity={0.7}
            key={i}
            style={{
              width: "90%",
              borderWidth: RFPercentage(0.1),
              borderRadius: RFPercentage(1),
              borderColor:
                selectedIndex === i ? Colors.primary : Colors.lightWhite,
              padding: RFPercentage(1.5),
              paddingVertical: RFPercentage(1.8),
              alignItems: "center",
              flexDirection: "row",
              backgroundColor:
                selectedIndex === i ? "#DFEEEC" : Colors.ilightwhite,
              marginVertical: RFPercentage(0.5),
            }}
          >
            <View
              style={{
                width: RFPercentage(2),
                height: RFPercentage(2),
                borderWidth: RFPercentage(0.15),
                borderRadius: RFPercentage(0.4),
                borderColor: Colors.grey,
                backgroundColor:
                  selectedIndex === i ? Colors.green : Colors.white,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedIndex === i && (
                <View
                  style={{
                    backgroundColor: Colors.green,
                    borderRadius: RFPercentage(0.2),
                  }}
                >
                  <Entypo name="check" size={16} color={Colors.white} />
                </View>
              )}
            </View>
            <Image
              source={item.icon}
              // source={image}
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
                marginLeft: RFPercentage(1.5),
              }}
            />
            <View style={{ marginLeft: RFPercentage(1.5) }}>
              <Text
                style={{
                  color: Colors.blacktext,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.6),
                }}
              >
                {item.name}
              </Text>

              <View style={{ width: RFPercentage(30) }}>
                <Text
                  style={{
                    marginTop: RFPercentage(0.5),
                    color: Colors.grey,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.4),
                  }}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* buttons */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: RFPercentage(5),
          backgroundColor: Colors.white,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: "48%",
            paddingVertical: RFPercentage(1.5),
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.15),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: Colors.blacktext,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.7),
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.loginbutton, { paddingVertical: 0 }]}
          activeOpacity={0.7}
        >
          <AppButton title="Next" buttonColor={Colors.primary} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default ReceiptCategory;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  loginbutton: {
    paddingVertical: RFPercentage(1.5),
    width: "55%",
    alignItems: "center",
    justifyContent: "center",
  },
});
