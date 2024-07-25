import AddReceiptIcon from "@/assets/svg/AddReceiptIcon";
import ReceiptIcon from "@/assets/svg/ReceiptIcon";
import TransactionIcon from "@/assets/svg/TransactionIcon";
import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import { ThemedText } from "./ThemedText";

const { width, height } = Dimensions.get("window");

const TabBar = ({ state, descriptors, navigation }: any) => {
    const primaryColor = "#1677FF";
    const secondaryColor = "#000000A6";

    const isFocused = (index: number) => state.index === index;

    const onPress = (route: any, index: number) => {
        const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused(index) && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
        }
    };
    console.log(state.routes);

    return (
        <>
            <Image
                style={{
                    position: "absolute",
                    bottom: -25,
                    left: -10,
                    width: width + 20,
                    height: 162,
                }}
                resizeMode='contain'
                source={require("../assets/tab-menu.png")}
            />
            <View style={styles.tabBar}>
                <TouchableOpacity
                    accessibilityRole='button'
                    accessibilityState={isFocused(0) ? { selected: true } : {}}
                    accessibilityLabel='transactions button'
                    onPress={() => onPress(state.routes[0], 0)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <TransactionIcon
                            width={24}
                            height={24}
                            focused={isFocused(0)}
                        />
                        <ThemedText
                            fontSize={12}
                            style={{
                                color: isFocused(0)
                                    ? primaryColor
                                    : secondaryColor,
                            }}
                        >
                            Transactions
                        </ThemedText>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    accessibilityRole='button'
                    accessibilityLabel='add receipt button'
                    accessibilityState={isFocused(1) ? { selected: true } : {}}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        top: -18,
                        shadowColor: "none",
                    }}
                >
                    <AddReceiptIcon width={54} height={54} />

                    <ThemedText
                        fontSize={12}
                        style={{ paddingTop: 6, color: secondaryColor }}
                    >
                        Add Receipt
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    accessibilityRole='button'
                    accessibilityState={isFocused(1) ? { selected: true } : {}}
                    accessibilityLabel='receipts button'
                    onPress={() => onPress(state.routes[1], 1)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-end",
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <ReceiptIcon
                            width={24}
                            height={24}
                            focused={isFocused(1)}
                        />
                        <ThemedText
                            fontSize={12}
                            style={{
                                color: isFocused(1)
                                    ? primaryColor
                                    : secondaryColor,
                            }}
                        >
                            Receipts
                        </ThemedText>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: -15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        marginHorizontal: 0,
        paddingVertical: 16,
        paddingHorizontal: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
    },
    tabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TabBar;
