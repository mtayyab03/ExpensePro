import React, { useEffect } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { RFPercentage } from "react-native-responsive-fontsize";

interface CustomAlertProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  message,
  onClose,
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500); // Hide alert after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.alertBox}>
          <AntDesign name="checkcircle" size={22} color="#52C41A" />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingTop: RFPercentage(10),
  },
  alertBox: {
    width: "60%",
    backgroundColor: "white",
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    flexDirection: "row",
  },
  message: {
    marginLeft: RFPercentage(1),
    color: Colors.blacktext,
    fontSize: RFPercentage(1.5),
    textAlign: "center",
  },
});

export default CustomAlert;
