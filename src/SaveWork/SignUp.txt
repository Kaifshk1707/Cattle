import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import AppAreaView from "../../components/view/safeAreaView";
import { IMAGES } from "../../constants/Image-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { globalColor } from "../../styles/globalColor";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/reducers/UserSlice";
import { useTranslation } from "react-i18next";


const SignUpScreen = () => {
  const { t } = useTranslation();

  const Schema = yup.object({
    userName: yup
      .string()
      .required(t("sign_up_username_required"))
      .min(4, t("sign_up_username_min_length")),

    email: yup
      .string()
      .required(t("sign_in_email_required"))
      .email(t("sign_in_email_invalid")),
    password: yup
      .string()
      .required(t("sign_in_password_required"))
      .min(6, t("sign_in_password_min_length")),
  });



  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });
  type newData = yup.InferType<typeof Schema>;

  const handleCreate = async (newData: newData) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        newData.email,
        newData.password
      );
      Alert.alert(t("sign_up_success"));
      // showMessage({
      //   type: "success",
      //   message: "Account has been created, Successfully",
      //   icon: "success",
      //   duration: 3000,
      // });
      navigation.navigate("MainAppBottomTab");

        const userDataObj = {
              uid: userCredentials.user.uid,
            }
      
            dispatch(setUserData(userDataObj));
      return userCredentials.user;
      
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("sign_up_error_email_in_use");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("sign_up_error_invalid_email");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("sign_up_error_weak_password");
      } else {
        errorMessage = t("sign_up_error_default");
      }
      // showMessage({
      //   type: "danger",
      //   message: errorMessage,
      //   icon: "danger",
      //   duration: 3000,
      // });
      Alert.alert(errorMessage);
    }
  };

  return (
    <AppAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={IMAGES.AppLogo} />
      <AppTextInputController
        control={control}
        name={"userName"}
        placeholder={t("sign_up_username_placeholder")}
        keyboardType={"default"}
      />
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
        keyboardType={"default"}
        secureTextEntry
      />
      <AppButton
        title={t("sign_up_create_account_button")}
        style={{ width: vs(250) }}
        onPress={handleSubmit(handleCreate)}
      />
      <AppButton
        title={t("sign_up_goto_signin_button")}
        style={styles.SignInButton}
        textColor={globalColor.blueGray}
        onPress={() => navigation.goBack("SignInScreen")}
      />
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
});
