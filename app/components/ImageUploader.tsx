import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import ZoomIcon from "../../assets/svg/ZoomIcon";
import SwapIcon from "../../assets/svg/SwapIcon";

// Define props interface
interface ImageContainerProps {
  image: string;
  onReplaceImage: () => void;
}

const ImageUploader: React.FC<ImageContainerProps> = ({
  image,
  onReplaceImage,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {image && (
        <>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.zoomButton}
            onPress={toggleModal}
            activeOpacity={0.7}
          >
            <ZoomIcon />
            <Text style={styles.zoomText}>Press to zoom</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible} transparent={true}>
            <TouchableOpacity
              style={styles.modalContainer}
              onPress={toggleModal}
            >
              <Image
                source={{ uri: image }}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Modal>
        </>
      )}

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onReplaceImage}
        style={styles.replaceButton}
      >
        <SwapIcon />
        <Text style={styles.replaceButtonText}>Replace</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  image: {
    width: "100%",
    height: RFPercentage(16),
    backgroundColor: Colors.gray,
    borderTopLeftRadius: RFPercentage(1),
    borderTopRightRadius: RFPercentage(1),
    minHeight: 230,
    position: "absolute",
    top: 0,
  },
  zoomButton: {
    flexDirection: "row",
    position: "absolute",
    top: RFPercentage(1),
    right: RFPercentage(12),
    left: RFPercentage(12),
    backgroundColor: Colors.black,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(16),
  },
  zoomText: {
    marginLeft: RFPercentage(0.9),
    color: Colors.white,
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
  replaceButton: {
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
  },
  replaceButtonText: {
    marginLeft: RFPercentage(1),
    color: Colors.link,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.9),
    fontWeight: "300",
  },
});

export default ImageUploader;