import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default NavigationStack;
