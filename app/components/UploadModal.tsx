import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
    Text,
    Platform,
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

//config

import { FontFamily } from "../config/font";
import CloseIcon from "../../assets/svg/CloseIcon";

const UploadModal = ({
    isModalVisible,
    setIsModalVisible,
    selectPcard,
    handleSelection,
    menuid,
}: any) => {
    return (
        <Modal
            visible={isModalVisible}
            transparent={true}
            animationType='none'
            onRequestClose={() => setIsModalVisible(false)}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                {/* Your modal content */}
                <View
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingVertical: RFPercentage(1),
                        paddingBottom: RFPercentage(5),
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: "90%",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                            marginTop: RFPercentage(1.3),
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setIsModalVisible(false)}
                            style={{ paddingRight: 12, marginBottom: 8 }}
                        >
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>

                    {selectPcard.map((item: any) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handleSelection(item)}
                            style={{
                                paddingVertical: RFPercentage(2),
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: RFPercentage(1),
                                backgroundColor:
                                    menuid === item.name
                                        ? "#DFEEEC"
                                        : undefined,
                            }}
                            activeOpacity={0.7}
                        >
                            <View style={{ width: "90%" }}>
                                <Text
                                    style={{
                                        color: "#1C1C1C",
                                        fontFamily: FontFamily.bold,
                                        fontSize: RFPercentage(1.6),
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {/* <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginVertical: RFPercentage(1.3),
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#1C1C1C",
                                        fontFamily: FontFamily.bold,
                                        fontSize: RFPercentage(1.9),
                                    }}
                                >
                                    Attach Receipt -
                                </Text>
                                <Text
                                    style={{
                                        marginHorizontal: RFPercentage(0.5),
                                        color: Colors.gray,
                                        fontFamily: FontFamily.regular,
                                        fontSize: RFPercentage(1.7),
                                    }}
                                >
                                    Amazon
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Entypo
                                    name='cross'
                                    size={28}
                                    color='#1C1C1C'
                                />
                            </TouchableOpacity>
                         </View>
 
                          <AppLine />

                          
                         <View style={{ marginTop: RFPercentage(1) }} />
                         <TouchableOpacity
                            style={styles.loginbutton}
                            activeOpacity={0.7}
                         >
                            <PrimaryButton
                                title='New Receipt'
                                buttonColor={Colors.primary}
                            />
                         </TouchableOpacity>
                         <TouchableOpacity
                            style={styles.loginbutton}
                            activeOpacity={0.7}
                         >
                            <View
                                style={{
                                    width: "90%",
                                    paddingVertical: RFPercentage(1.5),
                                    borderRadius: RFPercentage(1),
                                    borderWidth: RFPercentage(0.15),
                                    borderColor: "#B7B7B7",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={styles.buttontext}>
                                    Previously Submitted Receipt
                                </Text>
                            </View>
                         </TouchableOpacity> */}
                </View>
            </View>
        </Modal>
    );
};

export default UploadModal;
