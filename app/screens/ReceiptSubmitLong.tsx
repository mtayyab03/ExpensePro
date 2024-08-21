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
import SwapIcon from "../../assets/svg/SwapIcon";
import ZoomIcon from "../../assets/svg/ZoomIcon";

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
                            fontSize: RFPercentage(1.4),
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
                                backgroundColor: Colors.progress,
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
                    marginVertical: RFPercentage(1.6),
                }}
            >
                <Text
                    style={{
                        color: Colors.blacktext,
                        fontFamily: FontFamily.bold,
                        fontSize: RFPercentage(1.9),
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
                    borderWidth: 1,
                    borderColor: "#00000026",
                    backgroundColor: Colors.lightgray,
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    minHeight: 272,
                    position: "relative",
                }}
            >
                {image && (
                    <>
                        <Image
                            source={{ uri: image }}
                            // source={image}
                            style={{
                                width: "100%",
                                height: RFPercentage(16),
                                backgroundColor: Colors.black,
                                borderTopLeftRadius: RFPercentage(1),
                                borderTopRightRadius: RFPercentage(1),
                                minHeight: 230,
                                position: "absolute",
                                top: 0,
                            }}
                        />
                        <TouchableOpacity
                            style={styles.zoomButton}
                            onPress={toggleModal}
                            activeOpacity={0.7}
                        >
                            <ZoomIcon />
                            <Text
                                style={{
                                    marginLeft: RFPercentage(0.9),
                                    color: Colors.white,
                                }}
                            >
                                Press to zoom
                            </Text>
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
                        borderBottomLeftRadius: RFPercentage(1),
                        borderBottomRightRadius: RFPercentage(1),
                        borderTopWidth: 1,
                        borderColor: "#00000026",
                        backgroundColor: Colors.white,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: RFPercentage(1),
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                    }}
                >
                    <SwapIcon />
                    <Text
                        style={{
                            marginLeft: RFPercentage(1),
                            color: Colors.link,
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(1.9),
                            fontWeight: 300,
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
                        paddingVertical: RFPercentage(1.3),
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
                            fontSize: RFPercentage(1.9),
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
        marginTop: RFPercentage(1.6),
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
