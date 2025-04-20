import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import AppAreaView from "../../components/view/safeAreaView";
import { IMAGES } from "../../constants/Image-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { globalColor } from "../../styles/globalColor";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../config/firebase";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Success", "Account has been created!" + email);
        navigation.navigate("MainAppBottomTab");
      })
      .catch((error) => {
        Alert.alert(error.nativeErrorMessage);
      });
  };

  return (
    <AppAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={IMAGES.AppLogo} />
      <AppTextInput
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <AppTextInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <AppTextInput
        value={confirmPassword}
        placeholder="Confirm password"
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <AppButton
        title={"Create Account"}
        style={{ width: vs(250) }}
        onPress={handleSignup}
      />
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text style={styles.signInLink} onPress={() => navigation.goBack()}>
            Login
          </Text>
        </Text>
      </View>
    </AppAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharePaddingHorizontalStyle,
  },
  imageStyle: {
    width: s(200),
    height: s(200),
    borderRadius: 300,
    marginBottom: vs(30),
    right: s(15),
    top: s(30),
  },
  SignInButton: {
    top: s(8),
    borderColor: globalColor.blueGray,
    borderWidth: 2,
    backgroundColor: globalColor.white,
    color: globalColor.blueGray,
    width: vs(250),
  },
  signInContainer: {
    marginTop: vs(15),
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    fontSize: s(15),
    color: globalColor.blueGray,
  },
  signInLink: {
    color: globalColor.gray,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
