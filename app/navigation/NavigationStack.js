import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="BottomTab"
    >
      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
