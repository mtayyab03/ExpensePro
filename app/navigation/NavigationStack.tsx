import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import BottomTab from "./BottomTab";
import ReceiptSubmit from "../screens/ReceiptSubmit";
import ReceiptSubmitLong from "../screens/ReceiptSubmitLong";
import ReceiptCategory from "../screens/ReceiptCategory";
import ReceitpSubmitEmployee from "../screens/ReceitpSubmitEmployee";

const Stack = createNativeStackNavigator();

const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="ReceiptSubmit"
        component={ReceiptSubmit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReceiptCategory"
        component={ReceiptCategory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReceiptSubmitLong"
        component={ReceiptSubmitLong}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReceitpSubmitEmployee"
        component={ReceitpSubmitEmployee}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default NavigationStack;
