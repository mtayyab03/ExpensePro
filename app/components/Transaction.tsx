import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { PostedTransaction } from "../models/types";

interface TransactionProps {
    item: PostedTransaction; // Update the prop name and type
}

const Transaction: React.FC<TransactionProps> = ({ item }) => {
    return (
        <View
            style={{
                width: "90%",
                flexDirection: "row",
                backgroundColor: Colors.lightgray,
                paddingVertical: RFPercentage(1.4),
                paddingHorizontal: RFPercentage(1.9),
                borderWidth: RFPercentage(0.17),
                borderColor: "rgb(235, 235, 235)",
                borderRadius: RFPercentage(1),
                alignItems: "center",
                marginVertical: RFPercentage(0.3),
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
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
                            marginTop: RFPercentage(.8),
                            color: Colors.black,
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(1.6),
                        }}
                    >
                        {item.amount}
                    </Text>
                </View>
            </View>

            <View
                style={{
                    marginLeft: RFPercentage(1),
                    backgroundColor: item.bgcolor,
                    padding: RFPercentage(0.5),
                    paddingHorizontal: RFPercentage(1.2),
                    borderWidth: RFPercentage(0.16),
                    borderColor: item.textcolor,
                    borderRadius: RFPercentage(0.7),
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: item.textcolor,
                        fontFamily: FontFamily.regular,
                        fontSize: RFPercentage(1.4),
                    }}
                >
                    {item.status}
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
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.03 + 0.02 + 0.02,
        shadowRadius: 4,

        // Elevation for Android
        elevation: 3,
    },
});
export default Transaction;
