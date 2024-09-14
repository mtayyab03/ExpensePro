import React from "react";
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../config/Colors";
import ZoomIcon from "../../assets/svg/ZoomIcon";

interface ImageDisplayProps {
  image: any;
  modalVisible: boolean;
  toggleModal: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  image,
  modalVisible,
  toggleModal,
}) => {
  return (
    <View
      style={{
        marginTop: RFPercentage(1),
        width: "90%",
        borderRadius: RFPercentage(1),
        borderWidth: 1,
        borderColor: "#00000026",
        backgroundColor: Colors.lightgray,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        minHeight: 230,
        position: "relative",
      }}
    >
      {image && (
        <>
          <Image
            source={image} // Ensure image source is passed correctly
            style={{
              width: "100%",
              height: RFPercentage(16),
              backgroundColor: Colors.gray,
              borderTopLeftRadius: RFPercentage(1),
              borderTopRightRadius: RFPercentage(1),
              minHeight: 230,
            }}
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
                source={image}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Modal>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  zoomText: {
    marginLeft: RFPercentage(0.9),
    color: Colors.white,
  },
});

export default ImageDisplay;
