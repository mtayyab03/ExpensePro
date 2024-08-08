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
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import Header from "../components/Header";
import AppLine from "../components/AppLine";
import TitleField from "../components/TitleField";
import AppButton from "../components/AppButton";

const ReceiptSubmit = ({ route }: any) => {
  const [supplier, setSupplier] = useState("MEDITERRANEAN CAFE");
  const [amount, setAmount] = useState("$ 62.16");
  const [date, setDate] = useState("03-06-2024");
  const [meal, setMeal] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: any) => {
    hideDatePicker();
    const formattedDate = `${selectedDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(selectedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${selectedDate.getFullYear()}`;
    setDate(formattedDate);
    setSelectedDate(selectedDate);
  };
  const { image: initialImage } = route.params;
  // const initialimage = icons.picslip;
  const [image, setImage] = useState(initialImage);
  const handleReplaceImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
    }
  };

  return (
    <Screen style={styles.screen}>
      <Header />

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(1),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            marginVertical: RFPercentage(1.3),
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
        </View>
        <AppLine />

        <View
          style={{
            width: "90%",
            marginVertical: RFPercentage(1.5),
          }}
        >
          <Text
            style={{
              color: Colors.blacktext,
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(1.7),
            }}
          >
            Enter Receipt Details
          </Text>
        </View>

        {/* image replace */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(1),
            backgroundColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              // source={image}
              style={{
                width: "100%",
                height: RFPercentage(16),
                backgroundColor: Colors.black,
              }}
            />
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

        {/* auto filled detail area  */}
        <View
          style={{
            width: "90%",
            backgroundColor: "#F5F5F5",
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1.5),
            marginTop: RFPercentage(1),
            overflow: "hidden",
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
                fontSize: RFPercentage(1.6),
              }}
            >
              Autofilled Details (required) -
            </Text>
            <Text
              style={{
                marginHorizontal: RFPercentage(0.5),
                color: Colors.grey,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.5),
              }}
            >
              Verify information
            </Text>
          </View>
          <TitleField
            title="Supplier"
            value={supplier}
            onChangeText={setSupplier}
            subtitle="e.g Supplier name"
          />

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: RFPercentage(0.5),
            }}
          >
            <View style={{ width: "48%" }}>
              <Text
                style={{
                  marginVertical: RFPercentage(1),
                  fontSize: RFPercentage(1.5),
                  color: Colors.blacktext,
                  fontFamily: FontFamily.regular,
                }}
              >
                Transaction Total
              </Text>
              <View style={styles.doublefield}>
                <TextInput
                  onChangeText={setAmount}
                  value={amount}
                  placeholder="$ 0.00"
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
            </View>
            <View style={{ width: "48%" }}>
              <Text
                style={{
                  marginVertical: RFPercentage(1),
                  fontSize: RFPercentage(1.5),
                  color: Colors.blacktext,
                  fontFamily: FontFamily.regular,
                }}
              >
                Date of Purchase
              </Text>
              <View style={styles.doublefield}>
                <TextInput
                  onChangeText={setDate}
                  value={date}
                  placeholder="e.g 01-01-2024"
                  placeholderTextColor={Colors.placeholder}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={showDatePicker}
                  style={{ position: "absolute", right: RFPercentage(1.5) }}
                >
                  <Feather name="calendar" size={20} color={Colors.grey} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {isDatePickerVisible && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                if (date) handleConfirm(date);
              }}
            />
          )}
        </View>

        {/* meal area */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(1),
            borderWidth: RFPercentage(0.1),
            borderRadius: RFPercentage(1),
            borderColor: Colors.grey,
            padding: RFPercentage(1.5),
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "48%" }}>
            <Text
              style={{
                fontSize: RFPercentage(1.5),
                color: Colors.blacktext,
                fontFamily: FontFamily.regular,
              }}
            >
              Meal Attendance Count (if applicable)
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "30%",
              backgroundColor: Colors.white,
              borderWidth: RFPercentage(0.1),
              borderColor: Colors.grey,
              padding: RFPercentage(1.5),
              alignItems: "center",
              borderRadius: RFPercentage(1),
              justifyContent: "flex-start",
            }}
          >
            <TextInput
              onChangeText={setMeal}
              value={meal}
              placeholder="#"
              placeholderTextColor={Colors.placeholder}
            />
          </View>
        </View>

        <>
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              marginTop: RFPercentage(1),
            }}
          >
            <Text
              style={{
                marginVertical: RFPercentage(1),
                fontSize: RFPercentage(1.5),
                color: Colors.blacktext,
                fontFamily: FontFamily.regular,
              }}
            >
              Short Description of Purchase (required)
            </Text>
          </View>

          <View
            style={{
              width: "90%",
              height: RFPercentage(7),
              borderRadius: RFPercentage(1),
              borderWidth: RFPercentage(0.1),
              borderColor: error ? Colors.red : Colors.grey,
              justifyContent: "flex-start",
              padding: RFPercentage(1),
              marginBottom: RFPercentage(1.5),
            }}
          >
            <TextInput
              style={{ width: "90%" }}
              onChangeText={setDescription}
              value={description}
              placeholder="Enter Description"
              placeholderTextColor={Colors.placeholder}
              multiline
            />
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </>

        {/* buttons */}
        <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
          <AppButton title="Submit Receipt" buttonColor={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "90%",
            paddingVertical: RFPercentage(1.5),
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.15),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttontext}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};

export default ReceiptSubmit;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  loginbutton: {
    paddingVertical: RFPercentage(1.5),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    color: "#1C1C1C",
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.regular,
  },
  doublefield: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.grey,
    color: Colors.blacktext,
    padding: RFPercentage(1.5),
    alignItems: "center",
    borderRadius: RFPercentage(1),
    justifyContent: "flex-start",
  },
  error: {
    color: Colors.red,
    fontSize: RFPercentage(1.5),
    marginTop: RFPercentage(0.5),
  },
});
