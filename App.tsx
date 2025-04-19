

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AppAreaView from "./src/components/view/safeAreaView";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";
import FlashMessage from "react-native-flash-message";
// import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Light": require("./src/assets/fonts/Nunito-Light.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Italic": require("./src/assets/fonts/Nunito-Italic.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("./src/assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <Provider store={store}>
          <NavigationContainer>
            <FlashMessage position={"bottom"} />
            <MainAppStack />
          </NavigationContainer>
    </Provider>
       
  );
}

// (
//     // <Provider store={store}>
//       {/* <PersistGate persistor={persistor}> */}
//         {/* <I18nextProvider i18n={i18n}> */}
//          <>
//           <NavigationContainer>
//             <FlashMessage position={"bottom"} />
//             <MainAppStack />
//           </NavigationContainer>
//          </>
//         {/* </I18nextProvider> */}
//       {/* </PersistGate> */}
//     // </Provider>
//   );
