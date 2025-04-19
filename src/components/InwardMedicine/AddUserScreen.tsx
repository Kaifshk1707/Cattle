import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddUserScreen = ({ navigation }) => {
  const [status, setStatus] = useState("Active");
  const [userType, setUserType] = useState("User");
  const [statusVisible, setStatusVisible] = useState(false);
  const [userTypeVisible, setUserTypeVisible] = useState(false);

  const statusOptions = ["Active", "Inactive"];
  const UserTypOptions = ["User", "Vendor"];

  const handleSaveUser = () => {
    navigation.goBack();
    Alert.alert("The user has been added successfully.");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f7", padding: 16 }}>
      {/* Header */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Add User
        </Text>
      </TouchableOpacity>

      {/* User Name Input */}
      <Text style={{ fontWeight: "bold", marginBottom: 10, marginTop: "5%" }}>
        User Name
      </Text>
      <TextInput
        placeholder="Enter user name"
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 15,
        }}
      />

      {/* User-Type Dropdown */}
      <Text style={{ fontWeight: "bold", marginBottom: 10, marginTop: "2%" }}>
        User Type
      </Text>
      <TouchableOpacity
        onPress={() => setUserTypeVisible(!userTypeVisible)}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{userType}</Text>
        <Ionicons
          name={userTypeVisible ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </TouchableOpacity>

      {userTypeVisible && (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
            marginTop: 5,
          }}
        >
          <FlatList
            data={UserTypOptions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setUserType(item);
                  setUserTypeVisible(false);
                }}
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Status Dropdown */}
      <Text style={{ fontWeight: "bold", marginBottom: 10, marginTop: "5%" }}>
        Status
      </Text>
      <TouchableOpacity
        onPress={() => setStatusVisible(!statusVisible)}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{status}</Text>
        <Ionicons
          name={statusVisible ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </TouchableOpacity>

      {statusVisible && (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
            marginTop: 5,
          }}
        >
          <FlatList
            data={statusOptions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setStatus(item);
                  setStatusVisible(false);
                }}
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Buttons */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#e0e0e0",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginRight: 10,
          }}
        >
          <Text>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSaveUser}
          style={{
            backgroundColor: "#2196F3",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddUserScreen;
