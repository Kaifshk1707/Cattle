import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from 'react'
import { globalColor } from "../../styles/globalColor";
import { s, vs } from "react-native-size-matters";
import { globalFontstyle } from "../../styles/fontStyle";
import Entypo from "@expo/vector-icons/Entypo";

interface ProfileSectionButton {
  onPress:()=> void;
  title:string
}

const ProfileSectionButton : FC<ProfileSectionButton> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderBottomColor: globalColor.lightGray,
    paddingBottom: vs(20),
    marginTop: vs(14),
    flexDirection: "row",
    borderBottomWidth:1,
  },
  textTitle: {
    fontSize: s(18),
    fontFamily: globalFontstyle.semiBold,
    color: globalColor.black,
  },
  textContainer:{
    flex:5,
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginHorizontal:s(8 )
  }
});