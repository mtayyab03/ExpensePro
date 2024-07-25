import { Tabs } from "expo-router";
import React, { useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBar from "@/components/TabBar";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const routes = useNavigationState((state) => state.routes);

    useEffect(() => {
        console.log(routes);
    }, [routes]);

    return (
        <Tabs
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: true,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: "Transactions",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='receipts'
                options={{
                    title: "Receipts",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "code-slash" : "code-slash-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
