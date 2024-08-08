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
  validation,
}: any) => {
  const [error, setError] = useState("");

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
        style={{
          width: "100%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.1),
          borderColor: error ? Colors.red : "#B7B7B7",
          backgroundColor: Colors.white,
          justifyContent: "center",
          padding: RFPercentage(1.5),
        }}
      >
        <TextInput
          style={{ width: RFPercentage(45), fontSize: RFPercentage(1.5) }}
          onChangeText={onChangeText}
          value={value}
          placeholder={subtitle}
          placeholderTextColor={Colors.lightgrey}
          keyboardType={keyboardType}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: Colors.red,
    fontSize: RFPercentage(1.5),
    marginTop: RFPercentage(0.5),
  },
});

export default TitleField;
