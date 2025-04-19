import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import App from "../../../App";
import AppText from "../text/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { LanguageArray } from "../../localization/LanguageList";
import i18n from "../../localization/i18n";
import { useTranslation } from "react-i18next";

const LanguageBottomSheet = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const { t } = useTranslation();
  const handleChangeLanguage =(code: string)=>{
    setSelectedLanguage(code);
  }

  const handleConfirm = () => {
 SheetManager.hide("Lang_Sheet");
    i18n.changeLanguage(selectedLanguage);
  }


  return (
    <ActionSheet id="Lang_Sheet">
      <View style={styles.container}>
        <AppText
          variant="medium"
          style={{ marginBottom: vs(20), textAlign: "center" }}
        >
          {t("change_language")}
        </AppText>
        {LanguageArray.map((lang) => (
          <RadioWithTitle
            key={lang.code}
            title={lang.name}
            selected={selectedLanguage === lang.code}
            onPress={() => handleChangeLanguage(lang.code)}
          />
        ))}

        <AppButton
          title={t("checkout_confirm_button")}
          onPress={handleConfirm}
        />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
});
