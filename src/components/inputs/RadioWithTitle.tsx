import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import AppText from "../text/AppText";

interface RadioWithTitleProps {
  selected: boolean;
  title: string;
  onPress: () => void;
}

const RadioWithTitle: FC<RadioWithTitleProps> = ({
  selected,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.circle}>
        {selected === true && <View style={styles.innerCircle} />}
      </View>
      <AppText variant="medium" style={styles.title}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default RadioWithTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: s(15),
  },
  circle: {
    height: s(20),
    width: s(20),
    borderRadius: s(10),
    borderWidth: s(2),
    borderColor: globalColor.blueGray,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: s(10),
    width: s(10),
    borderRadius: s(5),
    backgroundColor: globalColor.blueGray,
  },
  title: {
    marginStart: s(10),
    fontSize: s(16),
    color: globalColor.blueGray,
  },
});
