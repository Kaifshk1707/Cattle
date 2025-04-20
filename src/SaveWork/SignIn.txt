import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import AppAreaView from "../../components/view/safeAreaView";
import { IMAGES } from "../../constants/Image-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { globalColor } from "../../styles/globalColor";
import { useNavigation } from "@react-navigation/native";
import { globalFontstyle } from "../../styles/fontStyle";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/reducers/UserSlice";
import { useTranslation } from "react-i18next";

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const Schema = yup.object({
    email: yup
      .string()
      .required(t("sign_in_email_required"))
      .email(t("sign_in_email_invalid")),
    password: yup
      .string()
      .required(t("sign_in_password_required"))
      .min(6, t("sign_in_password_min_length")),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
    defaultValues:{
      email: __DEV__ ? "s1@gmail.com" : "",
      password: __DEV__?  "123456" : "",
    }
  });

  type loginData = yup.InferType<typeof Schema>;

  const handleLogin = async (loginData: loginData) => {
    // try {
    //   const userCredentials = await signInWithEmailAndPassword(
    //     auth,
    //     loginData.email,
    //     loginData.password
    //   );
    //   console.log(JSON.stringify(userCredentials.user, null, 2));
      Alert.alert(t("login_has_been_successfully"));
      navigation.navigate("MainAppBottomTab");

      // const userDataObj = {
      //   uid: userCredentials.user.uid,
      // };

    //   dispatch(setUserData(userDataObj));
    // } catch (error: any) {
    //   let errorMessage = "";
    //   if (error.code === "auth/user-not-found") {
    //     errorMessage = t("sign_in_error_user_not_found");
    //   } else if (error.code === "auth/invalid-credential") {
    //     errorMessage = t("sign_in_error_invalid_credential");
    //   } else {
    //     errorMessage = t("sign_in_error_default");
    //   }
    //   showMessage({
    //     type: "danger",
    //     message: errorMessage,
    //     icon: "danger",
    //     duration: 3000,
    //   });
    //   // Alert.alert(errorMessage);
    // }
  };

  return (
    <AppAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={IMAGES.AppLogo} />
      <AppTextInputController
        control={control}
        name={"email"}
        placeholder={t("sign_in_email_placeholder")}
        keyboardType={"default"}
      />
      <AppTextInputController
        control={control}
        name={"password"}
        placeholder={t("sign_in_password_placeholder")}
        secureTextEntry
        keyboardType={"default"}
      />
      <AppButton
        title={t("sign_in_login_button")}
        style={{ width: vs(250) }}
        // onPress={() => navigation.navigate("MainAppBottomTab")}
        onPress={handleSubmit(handleLogin)}
      />
      <AppButton
        title={t("sign_in_signup_button")}
        style={styles.registerButton}
        textColor={globalColor.blueGray}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharePaddingHorizontalStyle,
  },
  imageStyle: {
    width: s(180),
    height: s(180),
    borderRadius: 300,
    marginBottom: vs(40),
    right: s(15),
    top: s(30),
  },
  registerButton: {
    top: s(8),
    borderColor: globalColor.blueGray,
    borderWidth: 2,
    backgroundColor: globalColor.white,
    color: globalColor.blueGray,
    width: vs(250),
  },
});
