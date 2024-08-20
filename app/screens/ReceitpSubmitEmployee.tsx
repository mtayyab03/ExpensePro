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
  FontAwesome5,
  Entypo,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";

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
const ReceitpSubmitEmployee = ({ navigation, route }: any) => {
  const { image: initialImage, selectedName } = route.params;

  console.log("Received image URI:", initialImage);
  console.log("Selected category name:", selectedName);
  const [isSelectedName, setisSelectedName] = useState(selectedName); // Example initial category
  const [isCategoryVisible, setIsCategoryVisible] = useState(true); // Track visibility

  const handleRemoveCategory = () => {
    setIsCategoryVisible(false);
    setisSelectedName(""); // Optionally clear the selected name
  };
  const [supplier, setSupplier] = useState("MEDITERRANEAN CAFE");
  const [amount, setAmount] = useState("$ 62.16");
  const [date, setDate] = useState("03-06-2024");
  const [meal, setMeal] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    supplier: false,
    amount: false,
    date: false,
    description: false,
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected((prev) => !prev);
  };

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
  const [image, setImage] = useState(initialImage);
  // const image = icons.picslip;
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
  const validateFields = () => {
    const newError = {
      supplier: supplier.trim() === "",
      amount: amount.trim() === "",
      date: date.trim() === "",
      description: description.trim() === "",
    };

    setError(newError);

    // Check if all fields are valid (no errors)
    return !Object.values(newError).includes(true);
  };

  const handleSubmit = () => {
    if (validateFields()) {
      navigation.navigate("BottomTab", {
        screen: "Transactions", // Navigate to the specific tab screen
        params: { showAlert: true },
      });
      // Proceed with the submission process
    } else {
      Alert.alert("Please fill all Fields");
    }
  };
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
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
              Step 3 of 3
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
                  backgroundColor: Colors.primary,
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
            <>
              <Image
                source={{ uri: image }}
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
                    source={{ uri: image }}
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
            onChangeText={(text: any) => {
              setSupplier(text);
              setError((prev) => ({ ...prev, supplier: false }));
            }}
            subtitle="e.g Supplier name"
            error={error.supplier}
          />
          {error.supplier && (
            <Text style={styles.errorText}>
              Please enter the supplier name.
            </Text>
          )}

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
              <View
                style={[styles.doublefield, error.amount && styles.errorBorder]}
              >
                <TextInput
                  onChangeText={(text) => {
                    setAmount(text);
                    setError((prev) => ({ ...prev, amount: false }));
                  }}
                  value={amount}
                  placeholder="$ 0.00"
                  placeholderTextColor={Colors.placeholder}
                  style={styles.textInput}
                />
              </View>
              {error.amount && (
                <Text style={styles.errorText}>
                  Please enter the transaction total.
                </Text>
              )}
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
              <View
                style={[styles.doublefield, error.date && styles.errorBorder]}
              >
                <TextInput
                  onChangeText={(text) => {
                    setDate(text);
                    setError((prev) => ({ ...prev, date: false }));
                  }}
                  value={date}
                  placeholder="e.g 01-01-2024"
                  placeholderTextColor={Colors.placeholder}
                  style={styles.textInput}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={showDatePicker}
                  style={styles.calendarIcon}
                >
                  <Feather name="calendar" size={20} color={Colors.grey} />
                </TouchableOpacity>
              </View>
              {error.date && (
                <Text style={styles.errorText}>
                  Please select the date of purchase.
                </Text>
              )}
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

        {/* description */}
        <View style={{ width: "90%" }}>
          <View
            style={{
              width: "100%",
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
            style={[
              styles.descriptionInputContainer,
              error.description && styles.errorBorder,
            ]}
          >
            <TextInput
              style={styles.textInputDescription}
              onChangeText={(text) => {
                setDescription(text);
                setError((prev) => ({ ...prev, description: false }));
              }}
              value={description}
              placeholder="Enter Description"
              placeholderTextColor={Colors.placeholder}
              multiline
            />
          </View>
          {error.description && (
            <Text style={styles.errorText}>
              Please enter a short description.
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.7}
          style={{
            width: "90%",
            borderWidth: RFPercentage(0.1),
            borderRadius: RFPercentage(1),
            borderColor: Colors.lightWhite,
            padding: RFPercentage(1.5),
            paddingVertical: RFPercentage(1.8),
            alignItems: "center",
            flexDirection: "row",

            marginVertical: RFPercentage(1),
          }}
        >
          <View
            style={{
              width: RFPercentage(2),
              height: RFPercentage(2),
              borderRadius: RFPercentage(0.3),
              borderWidth: RFPercentage(0.1),
              borderColor: Colors.grey,
              backgroundColor: isSelected ? Colors.green : Colors.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isSelected && (
              <Entypo name="check" size={16} color={Colors.white} />
            )}
          </View>

          <View style={{ marginLeft: RFPercentage(1.5) }}>
            <Text
              style={{
                color: Colors.blacktext,
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.6),
              }}
            >
              Tax charged on Receipt
            </Text>
          </View>
        </TouchableOpacity>

        {/* meal area */}
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
          {/* category */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: RFPercentage(1),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(1.5),
                color: Colors.blacktext,
                fontFamily: FontFamily.regular,
              }}
            >
              Category(s)
            </Text>

            <MaterialIcons
              name="arrow-forward-ios"
              size={16}
              color={Colors.blacktext}
            />
          </View>

          {isCategoryVisible && (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: RFPercentage(0.5),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: RFPercentage(0.1),
                  borderColor: Colors.grey,
                  paddingHorizontal: RFPercentage(0.7),
                  paddingVertical: RFPercentage(0.5),
                  alignItems: "center",
                  borderRadius: RFPercentage(0.5),
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(1.3),
                    color: Colors.blacktext,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  {selectedName}
                </Text>
                <TouchableOpacity onPress={handleRemoveCategory}>
                  <Entypo name="cross" size={16} color={Colors.blacktext} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* category end */}

          <View
            style={{
              width: "100%",
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
        </View>

        {/* buttons */}
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: RFPercentage(2),
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
            <Text style={styles.buttontext}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={handleSubmit}
            activeOpacity={0.7}
          >
            <AppButton title="Submit Receipt" buttonColor={Colors.primary} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ReceitpSubmitEmployee;
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
    width: "54%",
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
  titleContainer: {
    width: "90%",
    marginVertical: RFPercentage(1.3),
  },
  title: {
    color: Colors.blacktext,
    fontFamily: FontFamily.bold,
    fontSize: RFPercentage(2.2),
  },
  subTitleContainer: {
    width: "90%",
    marginVertical: RFPercentage(1.5),
  },
  subTitle: {
    color: Colors.blacktext,
    fontFamily: FontFamily.bold,
    fontSize: RFPercentage(2),
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1.5),
    width: "90%",
    height: RFPercentage(22),
    borderRadius: RFPercentage(1),
    backgroundColor: Colors.lightgrey,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: RFPercentage(1),
  },
  replaceButton: {
    marginTop: RFPercentage(2),
    flexDirection: "row",
    alignItems: "center",
  },
  replaceButtonText: {
    marginLeft: RFPercentage(0.5),
    color: Colors.primary,
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.medium,
  },
  autoFillContainer: {
    width: "90%",
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(3),
  },
  autoFillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  autoFillHeaderText: {
    color: Colors.blacktext,
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(1.8),
  },
  verifyText: {
    color: Colors.grey,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.6),
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
  halfWidth: {
    width: "48%",
  },
  label: {
    color: Colors.blacktext,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.6),
  },

  textInput: {
    color: Colors.blacktext,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.8),
  },
  calendarIcon: {
    marginLeft: RFPercentage(1),
  },
  errorBorder: {
    borderColor: Colors.red,
  },
  mealContainer: {
    width: "90%",
    marginTop: RFPercentage(2),
  },
  mealInputContainer: {
    marginTop: RFPercentage(1),
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
  },
  descriptionContainer: {
    width: "90%",
    marginTop: RFPercentage(2),
  },
  descriptionInputContainer: {
    width: "100%",
    height: RFPercentage(7),
    borderRadius: RFPercentage(1),
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.grey,
    justifyContent: "flex-start",
    padding: RFPercentage(1),
  },
  textInputDescription: {
    color: Colors.blacktext,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.8),
  },
  errorText: {
    color: Colors.red,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.6),
    marginTop: RFPercentage(0.5),
  },

  cancelButton: {
    width: "90%",
    alignItems: "center",
    marginVertical: RFPercentage(2),
  },
});