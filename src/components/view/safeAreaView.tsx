import { Platform, SafeAreaView , StatusBar, StyleSheet, Text, View, ViewStyle } from "react-native";
import { globalColor } from '../../styles/globalColor'
import { FC } from "react";
import { Is_Adnroid } from "../../constants/constants";

    interface AppAreaViewProps {
      children: React.ReactNode;
      style?: ViewStyle;
    }

const AppAreaView: FC<AppAreaViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.AppAreaView}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppAreaView

const styles = StyleSheet.create({
  AppAreaView: {
    flex: 1,
    // backgroundColor: globalColor.primary,
    paddingTop: Is_Adnroid ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex:1
  },
});