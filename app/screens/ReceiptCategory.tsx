import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
    TextInput,
    Platform,
    Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
    Feather,
    MaterialIcons,
    FontAwesome5,
    Entypo,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// componnet
import Screen from "../components/Screen";
import Header from "../components/Header";
import AppLine from "../components/AppLine";
import PrimaryButton from "../components/PrimaryButton";

// Define the parameter types for your stack navigator
type RootStackParamList = {
    ReceiptCategory: { image: any };
    ReceitpSubmitEmployee: { selectedName: string; image: any };
};

// Define the navigation prop type
type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "ReceiptCategory"
>;

// Define the route prop type

const ReceiptCategory = ({ route }: any) => {
    const { image } = route.params;
    const [menuid, setmenuid] = useState("");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProp>();

    const handlePress = (i: number, name: string) => {
        setSelectedIndex(i);
        setSelectedName(name);
    };

    const handleNext = () => {
        if (selectedName) {
            navigation.navigate("ReceitpSubmitEmployee", {
                selectedName,
                image,
            });
        } else {
            // Handle case when no category is selected, e.g., show an alert
            Alert.alert("Please select a category before proceeding.");
        }
    };
    const selectCategory = [
        {
            id: 1,
            name: "Advertising",
            status: "Marketing, Donations",
            icon: icons.YoutubeLogo,
        },
        {
            id: 2,
            name: "Building",
            status: "Repairs & Maintenance, Ground Maintenance, Security Expense, Cleaning",
            icon: icons.Buildings,
        },
        {
            id: 3,
            name: "Education",
            status: "Training Courses, Professional Licenses",
            icon: icons.Student,
        },
        {
            id: 4,
            name: "Employee Expense",
            status: "Team Building, Team Meals, Employee Gifts",
            icon: icons.Users,
        },
        {
            id: 5,
            name: "Freight",
            status: "Training Courses, Professional Licenses",
            icon: icons.Truck,
        },
        {
            id: 6,
            name: "Imports",
            status: "Team Building, Team Meals, Employee Gifts",
            icon: icons.Package,
        },
        {
            id: 7,
            name: "Job Cost",
            status: "Job-related Supplies, Subcontracting",
            icon: icons.Briefcase,
        },
        {
            id: 8,
            name: "IT",
            status: "Computers, Software Licenses",
            icon: icons.Desktop,
        },
        {
            id: 9,
            name: "Meals",
            status: "Lunch Bar Expenses, Company Event Food",
            icon: icons.ForkKnife,
        },
    ];
    return (
        <Screen style={styles.screen}>
            <Header />

            <View
                style={{
                    width: "90%",
                    marginVertical: RFPercentage(1.3),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: Colors.blacktext,
                        fontFamily: FontFamily.bold,
                        fontSize: RFPercentage(2.2),
                    }}
                >
                    Add Receipt
                </Text>

                <View>
                    <Text
                        style={{
                            color: Colors.blacktext,
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(1),
                            marginBottom: RFPercentage(0.5),
                        }}
                    >
                        Step 2 of 3
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <View
                            style={{
                                width: RFPercentage(4),
                                height: RFPercentage(0.8),
                                backgroundColor: Colors.progress,
                                borderRadius: RFPercentage(0.1),
                            }}
                        />
                        <View
                            style={{
                                width: RFPercentage(4),
                                marginLeft: RFPercentage(0.3),

                                height: RFPercentage(0.8),
                                backgroundColor: Colors.progress,
                                borderRadius: RFPercentage(0.1),
                            }}
                        />
                        <View
                            style={{
                                marginLeft: RFPercentage(0.3),
                                width: RFPercentage(4),
                                height: RFPercentage(0.8),
                                backgroundColor: Colors.lightWhite,
                                borderRadius: RFPercentage(0.1),
                            }}
                        />
                    </View>
                </View>
            </View>

            <AppLine />

            <View
                style={{
                    width: "90%",
                    marginVertical: RFPercentage(1.6),
                }}
            >
                <View
                    style={{
                        width: "80%",
                    }}
                >
                    <Text
                        style={{
                            color: Colors.blacktext,
                            fontFamily: FontFamily.bold,
                            fontSize: RFPercentage(1.9),
                        }}
                    >
                        Select Expense Category
                    </Text>
                </View>
            </View>

            {/* card */}

            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    paddingBottom: RFPercentage(7),
                }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={{ width: "100%" }}
            >
                {selectCategory.map((item: any, i: number) => (
                    <View
                        style={{
                            borderWidth: RFPercentage(0.1),
                            borderRadius: RFPercentage(1),
                            width: "90%",
                            borderColor:
                                selectedIndex === i
                                    ? Colors.primary
                                    : Colors.lightWhite,
                            backgroundColor: Colors.white,
                            marginVertical: RFPercentage(0.9),
                            shadowColor: "#000000", // Ensure color is solid enough
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.03, // Adjust opacity if necessary
                            shadowRadius: 1,
                            // Shadow for Android
                            elevation: 5,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => handlePress(i, item.name)}
                            activeOpacity={0.7}
                            key={i}
                            style={{
                                borderRadius: RFPercentage(1),
                                paddingHorizontal: RFPercentage(1.9),
                                paddingVertical: RFPercentage(1.2),
                                alignItems: "center",
                                flexDirection: "row",
                                backgroundColor:
                                    selectedIndex === i
                                        ? "#DFEEEC"
                                        : Colors.lightgray,
                            }}
                        >
                            <View
                                style={{
                                    width: RFPercentage(2),
                                    height: RFPercentage(2),
                                    borderWidth: RFPercentage(0.15),
                                    borderRadius: RFPercentage(0.4),
                                    borderColor: Colors.gray,
                                    backgroundColor:
                                        selectedIndex === i
                                            ? Colors.green
                                            : Colors.white,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {selectedIndex === i && (
                                    <View
                                        style={{
                                            backgroundColor: Colors.green,
                                            borderRadius: RFPercentage(0.2),
                                        }}
                                    >
                                        <Entypo
                                            name='check'
                                            size={16}
                                            color={Colors.white}
                                        />
                                    </View>
                                )}
                            </View>
                            <View
                                style={{
                                    backgroundColor: Colors.white,
                                    borderRadius: RFPercentage(0.5),
                                    padding: RFPercentage(0.9),
                                    marginLeft: RFPercentage(1.6),
                                }}
                            >
                                <Image
                                    source={item.icon}
                                    // source={image}
                                    style={{
                                        width: RFPercentage(4),
                                        height: RFPercentage(4),
                                    }}
                                />
                            </View>
                            <View style={{ marginLeft: RFPercentage(1.6) }}>
                                <Text
                                    style={{
                                        color: Colors.blacktext,
                                        fontFamily: FontFamily.regular,
                                        fontSize: RFPercentage(1.6),
                                    }}
                                >
                                    {item.name}
                                </Text>

                                <View style={{ width: RFPercentage(26) }}>
                                    <Text
                                        style={{
                                            marginTop: RFPercentage(0.5),
                                            color: Colors.gray,
                                            fontFamily: FontFamily.regular,
                                            fontSize: RFPercentage(1.4),
                                        }}
                                    >
                                        {item.status}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* buttons */}
            <View
                style={{
                    width: "90%",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    bottom: RFPercentage(3.5),
                    backgroundColor: Colors.white,
                    paddingVertical: RFPercentage(1.9),
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: "48%",
                        paddingVertical: RFPercentage(1.6),
                        borderRadius: RFPercentage(1),
                        borderWidth: RFPercentage(0.15),
                        borderColor: Colors.gray,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: Colors.blacktext,
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(1.7),
                        }}
                    >
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleNext}
                    style={[styles.loginbutton, { paddingVertical: 0 }]}
                    activeOpacity={0.7}
                >
                    <PrimaryButton title='Next' buttonColor={Colors.primary} />
                </TouchableOpacity>
            </View>
        </Screen>
    );
};

export default ReceiptCategory;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
    loginbutton: {
        paddingVertical: RFPercentage(1.6),
        width: "55%",
        alignItems: "center",
        justifyContent: "center",
    },
});
