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
            }, 5000); // Hide alert after 2 seconds

            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <Modal visible={visible} transparent={true} animationType='fade'>
            <View style={styles.modalContainer}>
                <View style={styles.alertBox}>
                    <AntDesign name='checkcircle' size={22} color='#52C41A' />
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
        paddingTop: RFPercentage(10),
    },
    alertBox: {
        width: "70%",
        backgroundColor: "white",
        padding: RFPercentage(1.6),
        borderRadius: RFPercentage(1),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        shadowColor: "#000000", // Ensure color is solid enough
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3, // Adjust opacity if necessary
        shadowRadius: 16,
        // Shadow for Android
        elevation: 5,
    },
    message: {
        marginLeft: RFPercentage(1),
        color: Colors.blacktext,
        fontSize: RFPercentage(1.6),
        textAlign: "center",
    },
});

export default CustomAlert;
