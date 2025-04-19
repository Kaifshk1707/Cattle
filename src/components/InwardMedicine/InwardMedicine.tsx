import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const InwardMedicine = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8FAFC", padding: 16 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 10, flexDirection: "row" }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 15,
            left: 10,
          }}
        >
          Inward Medicines
        </Text>
      </TouchableOpacity>

      <View
        style={{ height: 2, backgroundColor: "dodgerblue", marginVertical: 8 }}
      />

      {/* Vendor Name */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#444",
          marginBottom: 4,
        }}
      >
        Vendor Name
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          padding: 8,
          backgroundColor: "#fff",
        }}
      >
        <Text>Select a user</Text>
      </View>

      {/* Medicine */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#444",
          marginTop: 16,
          marginBottom: 4,
        }}
      >
        Medicine
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          padding: 8,
          backgroundColor: "#fff",
        }}
      >
        <Text>Select a medicine</Text>
      </View>

      {/* Quantity and Actions */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: "bold", color: "#444", flex: 1 }}
        >
          Quantity
        </Text>
        <Text
          style={{ fontSize: 16, fontWeight: "bold", color: "#444", flex: 1 }}
        >
          Action
        </Text>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 6,
            padding: 8,
            backgroundColor: "#fff",
          }}
          placeholder="Enter Quantity"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 4,
            marginLeft: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 4,
            marginLeft: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "dodgerblue",
            padding: 12,
            borderRadius: 6,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Inward Medicines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FFD700",
            padding: 12,
            borderRadius: 6,
            alignItems: "center",
            marginLeft: 8,
          }}
        >
          <Text style={{ color: "#444", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InwardMedicine;
