import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
    NavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Home from "./Home";

import { useColorScheme } from "@/hooks/useColorScheme";
import Receipts from "./receipts";
import TabBar from "@/components/TabBar";

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const navigationRef = useNavigationContainerRef();
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        DMSans: require("../assets/fonts/DMSans-Regular.ttf"),
        DMSansBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMSansSemiBold: require("../assets/fonts/DMSans-SemiBold.ttf"),
        DMSansLight: require("../assets/fonts/DMSans-Light.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    options={{ headerShown: false }}
                    component={Home}
                />
                <Stack.Screen
                    name='Receipts'
                    options={{ headerShown: false }}
                    component={Receipts}
                />
            </Stack.Navigator>
        </ThemeProvider>
    );
}
