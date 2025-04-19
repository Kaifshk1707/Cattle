import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalColor } from '../../styles/globalColor'
import { vs } from 'react-native-size-matters'
import { IMAGES } from '../../constants/Image-paths'

const HomeHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logoStyle} source={IMAGES.AppLogo} /> */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {title}
      </Text>
    </View>
  );
};

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.white,
    // paddingVertical: vs(5),
    paddingHorizontal: vs(8), 
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-start", 
  },
  logoStyle: {
    height: vs(60),
    width: vs(60),
    resizeMode: "cover"
  },
});