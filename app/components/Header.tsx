import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { MaterialIcons } from "@expo/vector-icons";

const Header: React.FC = () => {
    return (
        <View
            style={{
                width: "100%",
                padding: RFPercentage(1.2),
                paddingVertical: RFPercentage(2),
                backgroundColor: Colors.primary,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Text
                style={{
                    color: Colors.white,
                    fontFamily: FontFamily.bold,
                    fontSize: RFPercentage(1.8),
                }}
            >
                Receipt Submitter
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                    name='notifications-none'
                    size={24}
                    color={Colors.white}
                />
                <View style={{ marginRight: RFPercentage(1) }} />
                <Text
                    style={{
                        marginHorizontal: RFPercentage(0.5),
                        color: Colors.white,
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.6),
                    }}
                >
                    szatkovich
                </Text>
                <MaterialIcons
                    name='keyboard-arrow-down'
                    size={24}
                    color={Colors.white}
                />
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
export default Header;
