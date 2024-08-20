import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { SubmittedReceipt } from "../models/types";

interface ReceiptProps {
    item: SubmittedReceipt;
}

const Receipt: React.FC<ReceiptProps> = ({ item }) => {
    return (
        <TouchableOpacity
            style={{
                width: "90%",
                backgroundColor: Colors.white,
                borderWidth: RFPercentage(0.17),
                borderColor: "rgb(235, 235, 235)",
                borderRadius: RFPercentage(1),
                marginVertical: RFPercentage(0.5),
                shadowColor: "#000000", // Ensure color is solid enough
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.05, // Adjust opacity if necessary
                shadowRadius: 2,
                // Shadow for Android
                elevation: 5,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: Colors.lightgray,
                    paddingVertical: RFPercentage(1.4),
                    paddingHorizontal: RFPercentage(1.9),
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={item.trendimage}
                        resizeMode='contain'
                        style={{
                            height: RFPercentage(6),
                            width: RFPercentage(6),
                        }}
                    />
                    <View style={{ marginLeft: RFPercentage(1.5) }}>
                        <Text
                            style={{
                                color: "#1E1E1E",
                                fontFamily: FontFamily.bold,
                                fontSize: RFPercentage(1.6),
                            }}
                        >
                            {item.title}
                        </Text>
                        <Text
                            style={{
                                marginTop: RFPercentage(0.8),
                                color: Colors.gray,
                                fontFamily: FontFamily.regular,
                                fontSize: RFPercentage(1.6),
                            }}
                        >
                            {item.status}
                        </Text>
                    </View>
                </View>

                <View>
                    <Text
                        style={{
                            color: "#1E1E1E",
                            fontFamily: FontFamily.bold,
                            fontSize: RFPercentage(1.6),
                        }}
                    >
                        {item.amount}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttontext: {
        color: Colors.white,
        fontSize: RFPercentage(1.8),
        fontFamily: FontFamily.regular,
    },
});
export default Receipt;
