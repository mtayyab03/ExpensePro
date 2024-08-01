import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import AppLine from "../components/AppLine";
import Alert from "../components/Alert";
import Header from "../components/Header";
import postedTransactions from "../models/postedTransactions";
import Transaction from "../components/Transaction";

const Transactions: React.FC = () => {
    const transactionSlip = [
        {
            id: 1,
            trendimage: icons.plusdot,
            title: "Amazon",
            amount: "$1,399.00",
            status: "Missing Receipt",
            textcolor: "#874D00",
            bgcolor: "#FFFBE6",
        },
        {
            id: 2,
            trendimage: icons.plusdot,
            title: "MEDITERRANEAN CA...",
            amount: "$62.16",
            status: "Missing Receipt",
            textcolor: "#874D00",
            bgcolor: "#FFFBE6",
        },
        {
            id: 3,
            trendimage: icons.plusdot,
            title: "Chipotle",
            amount: "$13.50",
            status: "Missing Receipt",
            textcolor: "#874D00",
            bgcolor: "#FFFBE6",
        },
        {
            id: 4,
            trendimage: icons.picslip,
            title: "Lyft",
            amount: "$15.25",
            status: "Pending",
            textcolor: "#385F68",
            bgcolor: "#E2F2F8",
        },
        {
            id: 5,
            trendimage: icons.picslip,
            title: "Chick-fil-At",
            amount: "$25.50",
            status: "Complete",
            textcolor: "#206152",
            bgcolor: "#DFEEEC",
        },
        {
            id: 6,
            trendimage: icons.plusdot,
            title: "Amazon",
            amount: "$1,399.00",
            status: "Missing Receipt",
            textcolor: "#874D00",
            bgcolor: "#FFFBE6",
        },
        {
            id: 7,
            trendimage: icons.plusdot,
            title: "MEDITERRANEAN CA...",
            amount: "$62.16",
            status: "Missing Receipt",
            textcolor: "#874D00",
            bgcolor: "#FFFBE6",
        },
        {
            id: 8,
            trendimage: icons.plusdot,
            title: "Chipotle",
            amount: "$13.50",
            status: "Missing Receipt",
            textcolor: "#874D00",
            bgcolor: "#FFFBE6",
        },
        {
            id: 9,
            trendimage: icons.picslip,
            title: "Lyft",
            amount: "$15.25",
            status: "Pending",
            textcolor: "#385F68",
            bgcolor: "#E2F2F8",
        },
        {
            id: 10,
            trendimage: icons.picslip,
            title: "Chick-fil-At",
            amount: "$25.50",
            status: "Complete",
            textcolor: "#206152",
            bgcolor: "#DFEEEC",
        },
    ];
    return (
        <Screen style={styles.screen}>
            <Header />

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: RFPercentage(1.3),
                }}
            >
                <Text
                    style={{
                        color: "#1C1C1C",
                        fontFamily: FontFamily.medium,
                        fontSize: RFPercentage(1.6),
                    }}
                >
                    You are currently using
                </Text>
                <Text
                    style={{
                        marginHorizontal: RFPercentage(0.5),
                        color: Colors.primary,
                        fontFamily: FontFamily.medium,
                        fontSize: RFPercentage(1.6),
                    }}
                >
                    Sarah’s PCard
                </Text>
                <MaterialIcons
                    name='keyboard-arrow-down'
                    size={24}
                    color={Colors.primary}
                />
            </View>

            <AppLine />

            <Alert />

            <View
                style={{
                    width: "90%",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: RFPercentage(0.5),
                }}
            >
                <Text
                    style={{
                        color: "#262626",
                        fontFamily: FontFamily.bold,
                        fontSize: RFPercentage(2.2),
                    }}
                >
                    Posted Transactions
                </Text>

                <View
                    style={{
                        marginLeft: RFPercentage(1),
                        backgroundColor: "rgb(235, 235, 235)",
                        padding: RFPercentage(0.7),
                        paddingHorizontal: RFPercentage(1.2),
                        borderRadius: RFPercentage(1),
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "rgb(89, 89, 89)",
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(1.7),
                        }}
                    >
                        Mar 4-17
                    </Text>
                </View>
            </View>

            {/* card */}
            <View style={{ marginTop: RFPercentage(1.5) }} />
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={{ width: "100%" }}
                
            >
                {postedTransactions.map((item, i) => (
                    <Transaction key={i} item={item} />
                ))}
            </ScrollView>
        </Screen>
    );
};

export default Transactions;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
});
