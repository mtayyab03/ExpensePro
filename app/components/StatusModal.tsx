import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
// componnet
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import SidedText from "../components/SidedText";

const StatusModal = ({
  isStatusModalVisible,
  setIsStatusModalVisible,
  selectedTransaction,
  handleReplaceImage,
  toggleModal,
  modalVisible,
}: any) => {
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
              <TouchableOpacity onPress={() => setIsStatusModalVisible(false)}>
                <Entypo name="cross" size={28} color="#1C1C1C" />
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

export default StatusModal;
