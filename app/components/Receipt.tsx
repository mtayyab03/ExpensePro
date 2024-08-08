import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { SubmittedReceipt } from "../models/types";

interface ReceiptProps {
    item: SubmittedReceipt;
}

const Receipt: React.FC<ReceiptProps> = ({ item }) => {
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
                            color: Colors.grey,
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
