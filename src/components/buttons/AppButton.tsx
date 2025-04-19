import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import App from "../../../App";
import AppText from "../text/AppText";
import { globalColor } from "../../styles/globalColor";

interface AppButtonProps {
  onPress: () => void;
  title: string;
  textColor?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const AppButton: FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = globalColor.blueGray,
  textColor = globalColor.white,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.AppButton,
        { backgroundColor: disabled ? globalColor.lightBlue : backgroundColor,width:"90%" },
        style,
      ]}
    >
      <AppText
        variant="bold"
        style={[styles.AppButtonText, { color: textColor }]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  AppButton: {
    width: "50%",
    height: vs(50),
    backgroundColor: "#000",
    padding: 10,
    borderRadius: s(10),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  AppButtonText: {
    fontSize: s(15),
    color: "#fff",
    fontWeight: "bold",
  },
});
