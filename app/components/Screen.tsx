import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ViewStyle,
} from "react-native";
//config
import Colors from "../config/Colors";
interface ScreenProps {
  children: any;
  statusBarColor?: string;
  style?: ViewStyle;
}
const Screen: React.FC<ScreenProps> = ({
  children,
  statusBarColor = Colors.primary,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? (
        <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
      ) : null}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
