import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { Ionicons } from "@expo/vector-icons";

interface AlertProps {
    title?: string;
    buttonColor?: string;
}

const Alert: React.FC<AlertProps> = () => {
    return (
        <View
            style={{
                width: "90%",
                flexDirection: "row",
                backgroundColor: "#FFFBE6",
                padding: RFPercentage(1.2),
                borderWidth: RFPercentage(0.1),
                borderColor: Colors.lyellow,
                borderRadius: RFPercentage(1),
                alignItems: "center",
                marginVertical: RFPercentage(1.8),
            }}
        >
            <Ionicons name='alert-circle' size={26} color={Colors.yellow} />
            <View style={{ marginLeft: RFPercentage(1.3) }}>
                <Text
                    style={{
                        color: Colors.blacktext,
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.9),
                    }}
                >
                    Receipts due Mar 19
                </Text>
                <Text
                    style={{
                        marginTop: RFPercentage(.4),
                        color: Colors.blacktext,
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.6),
                    }}
                >
                    You have{" "}
                    <Text
                        style={{
                            color: Colors.blacktext,
                            fontFamily: FontFamily.bold,
                            fontSize: RFPercentage(1.6),
                        }}
                    >
                        3
                    </Text>{" "}
                    outstanding transactions
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    buttontext: {
        color: Colors.white,
        fontSize: RFPercentage(1.8),
        fontFamily: FontFamily.regular,
    },
});
export default Alert;
