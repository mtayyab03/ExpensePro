import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { PostedTransaction } from "../models/types";
import StatusTag from "./StatusTag";

interface TransactionProps {
    item: PostedTransaction; // Update the prop name and type
    handleTransactionPress: (item: PostedTransaction) => void;
}

const Transaction: React.FC<TransactionProps> = ({
    item,
    handleTransactionPress,
}) => {
    const truncateTitle = (title: string) => {
        if (title.length > 15) {
            return title.substring(0, 15) + "...";
        }
        return title;
    };

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleTransactionPress(item)}
            style={[
                styles.shadow,
                {
                    backgroundColor: Colors.white,
                    borderWidth: RFPercentage(0.17),
                    borderColor: Colors.lightWhite,
                    borderRadius: RFPercentage(1),
                    padding: 0,
                    marginVertical: RFPercentage(0.5),
                    width: "90%",
                },
            ]}
        >
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: Colors.lightgray,
                    paddingVertical: RFPercentage(1.6),
                    paddingHorizontal: RFPercentage(1.9),
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        maxWidth: "60%",
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
                    <View style={{ marginLeft: 8 }}>
                        <Text
                            style={{
                                color: "#1E1E1E",
                                fontFamily: FontFamily.bold,
                                fontSize: RFPercentage(1.6),
                            }}
                        >
                            {truncateTitle(item.title)}
                        </Text>
                        <Text
                            style={{
                                marginTop: RFPercentage(0.8),
                                color: Colors.black,
                                fontFamily: FontFamily.regular,
                                fontSize: RFPercentage(1.6),
                            }}
                        >
                            {item.amount}
                        </Text>
                    </View>
                </View>
                <StatusTag item={item} />
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
    shadow: {
        shadowColor: "#000000", // Ensure color is solid enough
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05, // Adjust opacity if necessary
        shadowRadius: 2,
        // Shadow for Android
        elevation: 5,
    },
});
export default Transaction;
