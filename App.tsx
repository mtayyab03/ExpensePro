import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NotificationProvider } from "./app/appContext/NotificationContext";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

//navigation
import NavigationStack from "./app/navigation/NavigationStack";

//component
import AppLoading from "./app/components/AppLoading";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NotificationProvider>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </NotificationProvider>
    );
  }
};
export default App;
