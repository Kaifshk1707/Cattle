import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./Languages/english.json";
import arabic from "./Languages/arabic.json";
import hindi from "./Languages/hindi.json";
import spanish from "./Languages/spanish.json";
import french from "./Languages/french.json";
import german from "./Languages/german.json";
import urdu from "./Languages/urdu.json";
import marathi from "./Languages/marathi.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGES = {
  english: {
    translation: english,
  },
  arabic: {
    translation: arabic,
  },
  hindi: {
    translation: hindi,
  },
  spanish: {
    translation: spanish,
  },
  french: {
    translation: french,
  },
  german: {
    translation: german,
  },
  urdu: {
    translation: urdu,
  },
  marathi: {
    translation: marathi,
  },
};



const LANGUAGE_DETECOR = {
  type: "languageDetector",
  async: true,

  detect: async (callBack: (lang: string) => void) => {
    try {
      const saveLanguage = await AsyncStorage.getItem("userLanguage");

      if (saveLanguage) {
        callBack(saveLanguage);
        return;
      }
    } catch (error) {
      console.error("Error detecting language:", error);
    }
    callBack("english");
  },

  cacheUserLanguage: async (lang: string) => {
    try {
      await AsyncStorage.setItem("userLanguage", lang);
    } catch (error) {
      console.error("Error caching user language:", error);
    }
  },
};

i18n
  .use(LANGUAGE_DETECOR as any)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    fallbackLng: "english",
    defaultNS: "translation",
    ns: ["translation"],
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });
export default i18n;
