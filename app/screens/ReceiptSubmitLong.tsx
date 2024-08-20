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
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
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

// Define your navigation parameter types
type RootStackParamList = {
    ReceiptCategory: { image: any };
    ReceitpSubmitEmployee: { selectedName: string; image: any };
};

// Define the type for your navigation prop
type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "ReceiptCategory"
>;

const ReceiptSubmitLong = ({ route }: any) => {
    const { image: initialImage } = route.params;
    const [image, setImage] = useState(initialImage);
    const navigation = useNavigation<NavigationProp>();
    // const image = icons.picslip;
    const handleReplaceImage = async () => {
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            const imageUri = result.assets[0].uri;
            setImage(imageUri);
        }
    };

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
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
                        Step 1 of 3
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <View
                            style={{
                                width: RFPercentage(4),
                                height: RFPercentage(0.8),
                                backgroundColor: Colors.primary,
                                borderRadius: RFPercentage(0.1),
                            }}
                        />
                        <View
                            style={{
                                width: RFPercentage(4),
                                marginLeft: RFPercentage(0.3),

                                height: RFPercentage(0.8),
                                backgroundColor: Colors.lightWhite,
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
                    marginVertical: RFPercentage(1.5),
                }}
            >
                <Text
                    style={{
                        color: Colors.blacktext,
                        fontFamily: FontFamily.bold,
                        fontSize: RFPercentage(1.7),
                    }}
                >
                    Choose Receipt Photo
                </Text>
            </View>

            {/* image replace */}
            <View
                style={{
                    width: "90%",
                    borderRadius: RFPercentage(1),
                    backgroundColor: Colors.gray,
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {image && (
                    <>
                        <Image
                            source={{ uri: image }}
                            // source={image}
                            style={{
                                width: "100%",
                                height: RFPercentage(40),
                                backgroundColor: Colors.black,
                            }}
                        />
                        <TouchableOpacity
                            style={styles.zoomButton}
                            onPress={toggleModal}
                            activeOpacity={0.7}
                        >
                            <FontAwesome5
                                name='search-plus'
                                size={20}
                                color={Colors.white}
                            />
                        </TouchableOpacity>
                        <Modal visible={modalVisible} transparent={true}>
                            <TouchableOpacity
                                style={styles.modalContainer}
                                onPress={toggleModal}
                            >
                                <Image
                                    source={{ uri: image }}
                                    style={styles.modalImage}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </Modal>
                    </>
                )}

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleReplaceImage}
                    style={{
                        width: "100%",
                        backgroundColor: Colors.ilightwhite,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: RFPercentage(2),
                        flexDirection: "row",
                        borderWidth: RFPercentage(0.1),
                        borderColor: Colors.lightWhite,
                    }}
                >
                    <FontAwesome5
                        name='exchange-alt'
                        size={20}
                        color={Colors.primary}
                    />
                    <Text
                        style={{
                            marginLeft: RFPercentage(1),
                            color: Colors.blacktext,
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(1.7),
                        }}
                    >
                        Replace
                    </Text>
                </TouchableOpacity>
            </View>

            {/* buttons */}
            <View
                style={{
                    width: "90%",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    bottom: RFPercentage(5),
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: "48%",
                        paddingVertical: RFPercentage(1.5),
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
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("ReceiptCategory", { image })
                    }
                    style={[styles.loginbutton, { paddingVertical: 0 }]}
                    activeOpacity={0.7}
                >
                    <PrimaryButton title='Next' buttonColor={Colors.primary} />
                </TouchableOpacity>
            </View>
        </Screen>
    );
};

export default ReceiptSubmitLong;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
    zoomButton: {
        position: "absolute",
        top: RFPercentage(1),
        right: RFPercentage(1),
        backgroundColor: Colors.black,
        padding: RFPercentage(1),
        borderRadius: RFPercentage(1),
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalImage: {
        width: "90%",
        height: "90%",
    },
    loginbutton: {
        paddingVertical: RFPercentage(1.5),
        width: "55%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttontext: {
        color: "#1C1C1C",
        fontSize: RFPercentage(1.8),
        fontFamily: FontFamily.regular,
    },

    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFPercentage(1.5),
        width: "90%",
        height: RFPercentage(22),
        borderRadius: RFPercentage(1),
        backgroundColor: Colors.lightgray,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: RFPercentage(1),
    },
    replaceButton: {
        marginTop: RFPercentage(2),
        flexDirection: "row",
        alignItems: "center",
    },
    replaceButtonText: {
        marginLeft: RFPercentage(0.5),
        color: Colors.primary,
        fontSize: RFPercentage(1.8),
        fontFamily: FontFamily.medium,
    },

    errorText: {
        color: Colors.red,
        fontFamily: FontFamily.regular,
        fontSize: RFPercentage(1.6),
        marginTop: RFPercentage(0.5),
    },

    cancelButton: {
        width: "90%",
        alignItems: "center",
        marginVertical: RFPercentage(2),
    },
});
