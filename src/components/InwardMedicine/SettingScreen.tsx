import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 20 }}>
      {/* Back Icon */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginBottom: "10%" }}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      {/* Profile Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <Image
            source={require("./../../assets/image/EmptyPerson.jpeg")}
            style={{
              width: 110,
              height: 110,
              borderRadius: 60,
              marginBottom: 10,
              borderColor: "#1E88E5",
              borderWidth: 1,
            }}
          />
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
            Mr Seller
          </Text>
          {/* <Text style={{ fontSize: 16, color: "#666" }}>johndoe@email.com</Text> */}
          {/* Edit Profile Button */}
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#1E88E5",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
              marginTop: 10,
            }}
            activeOpacity={0.7}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Edit Profile
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Actions */}
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            borderRadius: 5,
            backgroundColor: "#E53935",
            elevation: 2,
            alignSelf: "center",
          }}
          activeOpacity={0.7}
        >
          <MaterialIcons
            name="logout"
            size={22}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
