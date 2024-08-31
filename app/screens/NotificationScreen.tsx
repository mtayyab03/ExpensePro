import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNotification } from "../appContext/NotificationContext";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

// svg
import CloseIcon from "../../assets/svg/CloseIcon";

// componnet
import Screen from "../components/Screen";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";

const NotificationScreen = ({ navigation }: any) => {
  const notificationthisCard = [
    {
      id: 1,
      title: "Reminder to Upload Receipt - Chipotle",
      description:
        "Add receipt for the $13.50 transaction at Chipotle on 03/04/24",
      isSelected: false,
      onpress: () => {
        navigation.navigate("Transactions", {
          selectedTransactionTitle: "Chipotle",
        });
      },
    },
    {
      id: 2,
      title: "Reminder to Upload Receipt - Lyft",
      description: "Add receipt for the $15.25 transaction at Lyft on 03/04/24",
      isSelected: false,
      onpress: () => {
        navigation.navigate("Transactions", {
          selectedTransactionTitle: "Lyft",
        });
      },
    },
  ];
  const lastweekcards = [
    {
      id: 1,
      title: "Improve Receipt Image for Lyft on 2/22/2024",
      description:
        "Improve receipt image for the $9.26 transaction at Lyft on 02/28/24",
      isSelected: false,
    },
    {
      id: 2,
      title: "Expand on Description for Office Depot 2/22/2024",
      description:
        "Provide additional information in description for the $25.99 transaction at Office Depot  on 02/27/24",
      isSelected: false,
    },
  ];
  const [cards, setCards] = useState<any>(notificationthisCard);
  const [lastcards, setLastweekcards] = useState<any>(lastweekcards);
  // const { notificationCount, setNotificationCount } = route.params;
  const { notificationCount, setNotificationCount } = useNotification();
  // Handle press function to toggle the isSelected state
  const handlePress = (index: any) => {
    const updatedCards = cards.map((card: any, i: any) =>
      i === index ? { ...card, isSelected: !card.isSelected } : card
    );
    setCards(updatedCards);
    markAsRead();
  };
  const handleWeekPress = (index: number) => {
    const updatedNewCards = lastcards.map((card: any, i: any) =>
      i === index ? { ...card, isSelected: !card.isSelected } : card
    );
    setLastweekcards(updatedNewCards);
  };
  const markAsRead = () => {
    const selectedCards = cards.filter((card: any) => card.isSelected).length;
    const selectedLastWeekCards = lastcards.filter(
      (card: any) => card.isSelected
    ).length;
    const totalSelected = selectedCards + selectedLastWeekCards;

    setNotificationCount(notificationCount - totalSelected);
  };

  return (
    <Screen style={styles.screen}>
      <Header />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: RFPercentage(1),
        }}
      >
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(0.5),
          }}
        >
          <Text
            style={{
              color: "#262626",
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.2),
            }}
          >
            Notifications
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(0.5),
              color: "rgb(89, 89, 89)",
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.5),
            }}
          >
            Email pcard@clarkinc.biz if you have further questions.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingRight: 12, marginBottom: 8 }}
        >
          <CloseIcon />
        </TouchableOpacity>
      </View>

      {cards.length === 0 && lastcards.length === 0 ? (
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: RFPercentage(0.15),
            borderColor: Colors.lightWhite,
            borderRadius: RFPercentage(2),
            paddingVertical: RFPercentage(10),
            paddingHorizontal: RFPercentage(4),
            marginTop: RFPercentage(3),
          }}
        >
          <Image
            source={icons.noevent}
            style={{
              width: RFPercentage(16),
              height: RFPercentage(10),
            }}
          />
          <Text
            style={{
              marginTop: RFPercentage(5),
              fontSize: RFPercentage(1.6),
              color: "#1C1C1C",
            }}
          >
            You currently have no notifications.
          </Text>
        </View>
      ) : (
        <>
          <View style={{ width: "90%" }}>
            <Text
              style={{
                marginTop: RFPercentage(3),
                color: "rgb(89, 89, 89)",
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.5),
              }}
            >
              This Week
            </Text>
          </View>

          {cards.map((item: any, i: any) => (
            <TouchableOpacity
              key={i}
              onPress={item.onpress}
              activeOpacity={0.7}
              style={{
                width: "90%",
                borderWidth: RFPercentage(0.1),
                borderRadius: RFPercentage(1),
                borderColor: item.isSelected ? Colors.green : Colors.lightWhite,
                borderLeftColor: item.borderLeftColor || Colors.primary,
                borderLeftWidth:
                  item.borderLeftWidth !== null ? RFPercentage(1) : null,
                padding: RFPercentage(1.6),
                paddingVertical: RFPercentage(1.8),
                backgroundColor: item.isSelected ? "#DFEEEC" : Colors.white,
                alignItems: "center",
                flexDirection: "row",
                marginVertical: RFPercentage(0.7),
              }}
            >
              <TouchableOpacity
                onPress={() => handlePress(i)}
                activeOpacity={0.7}
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderRadius: RFPercentage(0.3),
                  borderWidth: RFPercentage(0.1),
                  borderColor: Colors.gray,
                  backgroundColor: item.isSelected
                    ? Colors.green
                    : Colors.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.isSelected && (
                  <Entypo name="check" size={14} color={Colors.white} />
                )}
              </TouchableOpacity>

              <View style={{ marginLeft: RFPercentage(1.6) }}>
                <Text
                  style={{
                    color: "#262626",
                    fontFamily: FontFamily.bold,
                    fontSize: RFPercentage(1.4),
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: RFPercentage(0.5),
                    color: "rgb(89, 89, 89)",
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.4),
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <View style={{ width: "90%" }}>
            <Text
              style={{
                marginTop: RFPercentage(3),
                color: "rgb(89, 89, 89)",
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.5),
              }}
            >
              Last Week
            </Text>
          </View>

          {lastcards.map((item: any, i: any) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              style={{
                width: "90%",
                borderWidth: RFPercentage(0.1),
                borderRadius: RFPercentage(1),
                borderColor: item.isSelected ? Colors.green : Colors.lightWhite,

                padding: RFPercentage(1.6),
                paddingVertical: RFPercentage(1.8),
                backgroundColor: item.isSelected ? "#DFEEEC" : Colors.white,
                alignItems: "center",
                flexDirection: "row",
                marginVertical: RFPercentage(0.7),
              }}
            >
              <TouchableOpacity
                onPress={() => handleWeekPress(i)}
                activeOpacity={0.7}
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderRadius: RFPercentage(0.3),
                  borderWidth: RFPercentage(0.1),
                  borderColor: Colors.gray,
                  backgroundColor: item.isSelected
                    ? Colors.green
                    : Colors.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.isSelected && (
                  <Entypo name="check" size={14} color={Colors.white} />
                )}
              </TouchableOpacity>

              <View style={{ marginLeft: RFPercentage(1.6) }}>
                <Text
                  style={{
                    color: "#262626",
                    fontFamily: FontFamily.bold,
                    fontSize: RFPercentage(1.4),
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: RFPercentage(0.5),
                    color: "rgb(89, 89, 89)",
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.4),
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <View
            style={{
              backgroundColor: Colors.white,
              width: "100%",
              paddingVertical: RFPercentage(2),
              paddingBottom: RFPercentage(3),
              position: "absolute",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <TouchableOpacity
              onPress={markAsRead}
              style={styles.loginbutton}
              activeOpacity={0.7}
            >
              <PrimaryButton
                title="Mark Selected as Read"
                buttonColor={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </Screen>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  loginbutton: {
    marginTop: RFPercentage(1),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
