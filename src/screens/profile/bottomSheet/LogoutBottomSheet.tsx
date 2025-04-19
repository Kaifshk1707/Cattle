import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

// Components
import AppText from "../../../components/text/AppText";
import AppButton from "../../../components/buttons/AppButton";

// Styles
import { globalColor } from "../../../styles/globalColor";
import { s, vs } from "react-native-size-matters";
import {signOut} from "firebase/auth"
import { auth } from "../../../config/firebase";

const LogoutBottomSheet = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user_Data");
      await signOut(auth);
      console.log("User logged out from local storage and Firebase");
      Alert.alert(t("logout_successful"));
      navigation.navigate("AuthStack");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  const handleCancel = () => {
    SheetManager.hide("Logout_Sheet");
  };

  return (
    <ActionSheet id="Logout_Sheet" containerStyle={styles.sheet}>
      <View style={styles.container}>
        <AppText variant="medium" style={styles.title}>
          {t("logout_confirmation_title")}
        </AppText>

        <AppText style={styles.message}>{t("logout_confirmation")}</AppText>

        <AppButton
          title={t("logout")}
          onPress={handleLogout}
          style={styles.logoutButton}
        />

        <AppButton
          title={t("cancel")}
          onPress={handleCancel}
          style={styles.cancelButton}
        />
      </View>
    </ActionSheet>
  );
};

export default LogoutBottomSheet;

const styles = StyleSheet.create({
  sheet: {
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
  },
  container: {
    padding: s(20),
    alignItems: "center",
  },
  title: {
    fontSize: s(18),
    fontWeight: "600",
    marginBottom: vs(12),
    textAlign: "center",
    color: globalColor.black,
  },
  message: {
    fontSize: s(16),
    color: globalColor.darkGray,
    textAlign: "center",
    marginBottom: vs(24),
    paddingHorizontal: s(10),
  },
  logoutButton: {
    width: "100%",
    marginBottom: vs(10),
    backgroundColor: globalColor.blueGray,
  },
  cancelButton: {
    width: "100%",
    backgroundColor: globalColor.darkGray,
    color: globalColor.white,
  },
});
