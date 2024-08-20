import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { RFPercentage } from "react-native-responsive-fontsize";

const TitleField = ({
    title,
    subtitle,
    keyboardType = "default",
    value,
    onChangeText,
    error = false,
}: any) => {
    return (
        <>
            <View
                style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: RFPercentage(1),
                }}
            >
                <Text
                    style={{
                        marginVertical: RFPercentage(1),
                        fontSize: RFPercentage(1.5),
                        color: Colors.blacktext,
                        fontFamily: FontFamily.regular,
                    }}
                >
                    {title}
                </Text>
            </View>

            <View
                style={[
                    styles.inputcontainer,
                    error && styles.errorBorder, // Apply error style if there's an error
                ]}
            >
                <TextInput
                    style={{
                        width: RFPercentage(45),
                        fontSize: RFPercentage(1.5),
                    }}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder='e.g Meditarean supplier'
                    placeholderTextColor={Colors.gray}
                    keyboardType={keyboardType}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    errorBorder: {
        borderColor: Colors.red, // Change border color to red if there's an error
        borderWidth: RFPercentage(0.1), // Slightly thicker border for visibility
    },
    errorText: {
        color: Colors.red,
        fontSize: RFPercentage(1.5),
        marginTop: RFPercentage(0.5),
    },

    inputcontainer: {
        width: "100%",
        borderRadius: RFPercentage(1),
        borderWidth: RFPercentage(0.1),
        borderColor: "#B7B7B7",
        backgroundColor: Colors.white,
        justifyContent: "center",
        padding: RFPercentage(1.5),
    },
});

export default TitleField;
