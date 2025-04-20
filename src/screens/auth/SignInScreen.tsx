  import {
    Alert,
    Button,
    Image,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
  import AppAreaView from "../../components/view/safeAreaView";
  import { IMAGES } from "../../constants/Image-paths";
  import { s, vs } from "react-native-size-matters";
  import AppTextInput from "../../components/inputs/AppTextInput";
  import AppButton from "../../components/buttons/AppButton";
  import { globalColor } from "../../styles/globalColor";
  import { useNavigation } from "@react-navigation/native";
  import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
  import { auth } from "./../../config/firebase";
  import { GoogleSignin } from "@react-native-google-signin/google-signin";

  const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
      GoogleSignin.configure({
        webClientId:
          "999476150925-t8hft4g2p6mgoldcsr5iur2mmvtt86j9.apps.googleusercontent.com",
      });
    }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const userInfo = await GoogleSignin.signIn();
      const { idToken } = await GoogleSignin.getTokens();
      // const userInfoCurrent = GoogleSignin.getCurrentUser();
      console.log("ID Token: ", idToken);
      console.log("User Info: ", userInfo);

      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredential);


      Alert.alert("Login Success");
      navigation.navigate("MainAppBottomTab");
    } catch (error) {
      console.log("Google Sign-In Error:", error);
      Alert.alert("Error", error.nativeErrorMessage);
    }
  }


    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          Alert.alert("Success", "Logged in!" + email);
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
        <AppButton
          title={"Login"}
          style={{ width: vs(250) }}
          onPress={handleLogin}
        />

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Don't have an account?{" "}
            <Text
              style={styles.signInLink}
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              Create Account
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: vs(20),
            gap: s(15),
          }}
        >
          <TouchableOpacity onPress={() => Alert.alert("Facebook Sign In")}>
            <Image
              source={IMAGES.facebook}
              style={{ width: s(63), height: s(63), resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onGoogleButtonPress}>
            <Image
              source={IMAGES.google}
              style={{ width: s(58), height: s(58), resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Thread Sign In")}>
            <Image
              source={IMAGES.thread}
              style={{ width: s(50), height: s(50), resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
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
