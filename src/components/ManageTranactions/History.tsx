import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ViewHistoryModal from "../Modal/ViewHistoryModal";

const History = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      id: "1",
      manager: "User4",
      medicine: "Melonex Plus Injection, Beekom L, Anistomin",
      quantity: "5, 11, 6",
      created: "11th Mar 2025 01:26 AM",
      updated: "11th Mar 2025 01:26 AM",
    },
    {
      id: "2",
      manager: "Yahshab",
      medicine: "Enrorex, ST. LA",
      quantity: "5, 17",
      created: "12th Mar 2025 11:10 PM",
      updated: "12th Mar 2025 11:10 PM",
    },
  ]);

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 14,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
      }}
    >
      {/* Manager Name */}
      <Text style={{ fontWeight: "bold", fontSize: 18, color: "#333" }}>
        Manager: {item.manager}
      </Text>

      {/* Medicine Name */}
      <Text
        style={{
          fontSize: 16,
          color: "dodgerblue",
          fontWeight: "600",
          marginVertical: 6,
        }}
      >
        {item.medicine}
      </Text>

      {/* Quantity & Dates */}
      <Text style={{ fontSize: 14, color: "#555", marginBottom: 2 }}>
        <Text style={{ fontWeight: "600" }}>Quantity Given:</Text>{" "}
        {item.quantity}
      </Text>
      <Text style={{ fontSize: 14, color: "#555", marginBottom: 2 }}>
        <Text style={{ fontWeight: "600" }}>Created:</Text> {item.created}
      </Text>
      <Text style={{ fontSize: 14, color: "#555", marginBottom: 10 }}>
        <Text style={{ fontWeight: "600" }}>Last Updated:</Text> {item.updated}
      </Text>

      {/* View Details Button */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          marginTop: 8,
          backgroundColor: "dodgerblue",
          paddingVertical: 10,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "600" }}>
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#f8f9fa" }}>
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
          Outward Medicines
        </Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Search..."
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#fff",
          marginBottom: 15,
        }}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <ViewHistoryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default History;
