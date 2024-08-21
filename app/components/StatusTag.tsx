import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { PostedTransaction } from "../models/types";

interface TagProps {
    item: PostedTransaction;
}

const StatusTag: React.FC<TagProps> = ({ item }) => {
    const bgColor =
        item.status === "Missing Receipt"
            ? "#FFFBE6"
            : item.status === "Pending"
            ? "#E2F2F8"
            : "#DFEEEC";
    const textColor =
        item.status === "Missing Receipt"
            ? "#874D00"
            : item.status === "Pending"
            ? "#385F68"
            : "#206152";
    return (
        <View
            style={{
                marginLeft: RFPercentage(1),
                backgroundColor: bgColor,
                padding: RFPercentage(0.5),
                paddingHorizontal: RFPercentage(0.9),
                borderWidth: RFPercentage(0.16),
                borderColor: textColor,
                borderRadius: RFPercentage(0.7),
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    color: textColor,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.6),
                }}
            >
                {item.status}
            </Text>
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
export default StatusTag;
