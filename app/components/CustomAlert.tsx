import React, { useEffect } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
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
      }, 5000); // Hide alert after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.alertBox}>
          <Feather name="info" size={30} color={Colors.primary} />
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <FontAwesome5 name="times" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertBox: {
    width: "80%",
    backgroundColor: "white",
    padding: RFPercentage(2),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    flexDirection: "row",
    position: "relative",
  },
  message: {
    flex: 1,
    marginLeft: RFPercentage(1),
    color: Colors.blacktext,
    fontSize: RFPercentage(1.8),
    textAlign: "center",
  },
});

export default CustomAlert;
