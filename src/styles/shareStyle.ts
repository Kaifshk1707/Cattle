import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { globalColor } from "./globalColor";

export const sharePaddingHorizontalStyle = s(12);

export const commonStyle = StyleSheet.create({
  shadow: {
    //IOS
    shadowColor: globalColor.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    //Android
    elevation: 4,
  },
});
