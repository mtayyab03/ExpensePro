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
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";

// icon
import ZoomIcon from "../../assets/svg/ZoomIcon";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
// componnet
import PrimaryButton from "../components/PrimaryButton";
import AppLine from "../components/AppLine";
import SidedText from "../components/SidedText";
import StatusTag from "./StatusTag";
import CloseIcon from "../../assets/svg/CloseIcon";
import TitleField from "../components/TitleField";
import CheckSelected from "./CheckSelected";

const ViewModal = ({
  isStatusModalVisible,
  setIsStatusModalVisible,
  selectedTransaction,
  handleReplaceImage,
  toggleModal,
  modalVisible,
}: any) => {
  const [isSelectedName, setisSelectedName] = useState("Meal"); // Example initial category
  const [isCategoryVisible, setIsCategoryVisible] = useState(true); // Track visibility

  const handleRemoveCategory = () => {
    setIsCategoryVisible(false);
    setisSelectedName(""); // Optionally clear the selected name
  };
  const navigation = useNavigation();
  const route = useRoute();
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
      // Close the modal
      setIsStatusModalVisible(false);

      // Add a slight delay to ensure the modal closes before setting params
      setTimeout(() => {
        // Update the screen's parameters to trigger the alert
        navigation.setParams({ showAlert: true });
      }, 300); // Adjust the delay as needed
    } else {
      Alert.alert("Please fill all Fields");
    }
  };
  const renderModalContent = () => {
    if (!selectedTransaction) return null;

    const { status, title, amount, trendimage: image } = selectedTransaction;

    if (status === "Pending") {
      return (
        <>
          {/* image replace */}
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              paddingBottom: RFPercentage(1),
            }}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", height: "70%" }}
          >
            <View
              style={{
                width: "90%",
                marginTop: RFPercentage(1),
                borderRadius: RFPercentage(1),
                borderWidth: 1,
                borderColor: "#00000026",
                backgroundColor: Colors.lightgray,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                minHeight: 272,
                position: "relative",
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
                      backgroundColor: Colors.gray,
                      borderTopLeftRadius: RFPercentage(1),
                      borderTopRightRadius: RFPercentage(1),
                      minHeight: 230,
                    }}
                  />
                  <TouchableOpacity
                    style={styles.zoomButton}
                    onPress={toggleModal}
                    activeOpacity={0.7}
                  >
                    <ZoomIcon />
                    <Text style={styles.zoomText}>Press to zoom</Text>
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
                  backgroundColor: Colors.lightwhite,
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
                padding: RFPercentage(1.2),
                marginTop: RFPercentage(1.9),
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
                    color: Colors.darkgray,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.6),
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
                      fontSize: RFPercentage(1.6),
                      color: Colors.blacktext,
                      fontFamily: FontFamily.regular,
                    }}
                  >
                    Transaction Total
                  </Text>
                  <View
                    style={[
                      styles.doublefield,
                      error.amount && styles.errorBorder,
                    ]}
                  >
                    <TextInput
                      onChangeText={(text: any) => {
                        setAmount(text);
                        setError((prev) => ({
                          ...prev,
                          amount: false,
                        }));
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
                      fontSize: RFPercentage(1.6),
                      color: Colors.blacktext,
                      fontFamily: FontFamily.regular,
                    }}
                  >
                    Date of Purchase
                  </Text>
                  <View
                    style={[
                      styles.doublefield,
                      error.date && styles.errorBorder,
                    ]}
                  >
                    <TextInput
                      onChangeText={(text) => {
                        setDate(text);
                        setError((prev) => ({
                          ...prev,
                          date: false,
                        }));
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
                      <Feather name="calendar" size={20} color={Colors.gray} />
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
                  onChange={(event: any, date: any) => {
                    if (date) handleConfirm(date);
                  }}
                />
              )}
            </View>

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
                    fontSize: RFPercentage(1.6),
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
                    setError((prev) => ({
                      ...prev,
                      description: false,
                    }));
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
            <View style={{ marginTop: RFPercentage(1) }} />
            <CheckSelected title="Tax charged on Receipt" />
            <View style={{ marginBottom: RFPercentage(1) }} />

            {/* meal area */}
            <View
              style={{
                width: "90%",
                backgroundColor: Colors.white,
                borderRadius: RFPercentage(1),
                borderWidth: RFPercentage(0.1),
                borderColor: Colors.borderColorSecondary,
                shadowColor: "#000000", // Ensure color is solid enough
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.05, // Adjust opacity if necessary
                shadowRadius: 0.5,
                // Shadow for Android
                elevation: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.lightgray,
                  borderRadius: RFPercentage(1),
                  padding: RFPercentage(1.6),
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: RFPercentage(1.6),
                        color: Colors.blacktext,
                        fontFamily: FontFamily.regular,
                      }}
                    >
                      Category(required):
                    </Text>
                    {isCategoryVisible && (
                      <View
                        style={{
                          flexDirection: "row",

                          paddingHorizontal: RFPercentage(0.7),
                          paddingVertical: RFPercentage(0.5),
                          alignItems: "center",
                          borderRadius: RFPercentage(0.5),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFPercentage(1.6),
                            color: Colors.blacktext,
                            fontFamily: FontFamily.medium,
                          }}
                        >
                          Meal
                        </Text>
                      </View>
                    )}
                  </View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={16}
                    color={Colors.blacktext}
                  />
                </View>

                {/* category end */}

                <CheckSelected title=" Shipped to Another State" />
                <CheckSelected title="Charge Multiple Companies" />
              </View>
            </View>
            <View style={{ marginTop: RFPercentage(2) }} />
            <AppLine />
          </ScrollView>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <PrimaryButton title="Save Changes" buttonColor={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => setIsStatusModalVisible(false)}
            activeOpacity={0.7}
          >
            <View
              style={{
                width: "90%",
                paddingVertical: RFPercentage(1.4),
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
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#E2F2F8",
              padding: RFPercentage(1.2),
              borderWidth: RFPercentage(0.1),
              borderColor: "#A5C3CA",
              borderRadius: RFPercentage(1),
              alignItems: "center",
              marginVertical: RFPercentage(1),
            }}
          >
            <Ionicons name="alert-circle" size={26} color="#52838F" />
            <View style={{ marginLeft: RFPercentage(1.3), width: "80%" }}>
              <Text
                style={{
                  color: Colors.blacktext,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.6),
                }}
              >
                Receipt is attached to a transaction that is complete
              </Text>
            </View>

            <TouchableOpacity
              style={{
                marginLeft: RFPercentage(1),
                width: RFPercentage(2),
                height: RFPercentage(2),
              }}
            >
              <CloseIcon />
            </TouchableOpacity>
          </View>
          {/* image view */}
          <View
            style={{
              width: "90%",
              borderRadius: RFPercentage(1),
              borderWidth: 1,
              borderColor: "#00000026",
              backgroundColor: Colors.lightgray,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              minHeight: 230,
              position: "relative",
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
                    backgroundColor: Colors.gray,
                    borderTopLeftRadius: RFPercentage(1),
                    borderTopRightRadius: RFPercentage(1),
                    minHeight: 230,
                  }}
                />
                <TouchableOpacity
                  style={styles.zoomButton}
                  onPress={toggleModal}
                  activeOpacity={0.7}
                >
                  <ZoomIcon />
                  <Text style={styles.zoomText}>Press to zoom</Text>
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
              marginVertical: RFPercentage(0.9),
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "#F5F5F5",
                borderRadius: RFPercentage(1),
                padding: RFPercentage(1.4),
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
                name="Short Description of Purchase"
                title="Ride to Airport"
              />
            </View>
          </View>
        </>
      );
    }
  };

  return (
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
              marginTop: RFPercentage(1),
              marginBottom: RFPercentage(1.9),
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
                {selectedTransaction?.title || "No Title"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {selectedTransaction && <StatusTag item={selectedTransaction} />}
              <TouchableOpacity
                onPress={() => setIsStatusModalVisible(false)}
                style={{ marginLeft: 22, paddingRight: 8 }}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>
          </View>
          <AppLine />

          {renderModalContent()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  zoomButton: {
    flexDirection: "row",
    position: "absolute",
    top: RFPercentage(1),
    right: RFPercentage(12),
    left: RFPercentage(12),
    backgroundColor: Colors.black,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(16),
  },
  zoomText: {
    marginLeft: RFPercentage(0.9),
    color: Colors.white,
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
  errorText: {
    color: Colors.red,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.6),
    marginTop: RFPercentage(0.5),
  },

  doublefield: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.gray,
    color: Colors.blacktext,
    padding: RFPercentage(1.6),
    alignItems: "center",
    borderRadius: RFPercentage(1),
    justifyContent: "flex-start",
  },
  error: {
    color: Colors.red,
    fontSize: RFPercentage(1.6),
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
    marginVertical: RFPercentage(1.6),
  },
  subTitle: {
    color: Colors.blacktext,
    fontFamily: FontFamily.bold,
    fontSize: RFPercentage(2),
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1.6),
    width: "90%",
    height: RFPercentage(22),
    borderRadius: RFPercentage(1),
    backgroundColor: Colors.lightgray,
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
    color: Colors.gray,
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
    borderBottomColor: Colors.lightgray,
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
    borderColor: Colors.gray,
    justifyContent: "flex-start",
    paddingHorizontal: RFPercentage(1.4),
    paddingVertical: RFPercentage(0.6),
  },
  textInputDescription: {
    color: Colors.blacktext,
    padding: 0,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.8),
  },

  cancelButton: {
    width: "90%",
    alignItems: "center",
    marginVertical: RFPercentage(2),
  },
});

export default ViewModal;
