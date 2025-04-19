import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import MedicineModal from "../Modal/MedicineModal";

const medicines = [
  { id: "1", srNo: 6, name: "Enrorex", quantity: 5 },
  { id: "2", srNo: 16, name: "ST. LA", quantity: 17 },
];

const EditScreen = ({ navigation }) => {
  const [data, setData] = useState(medicines);
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectedManager, setSelectedManager] = useState("Manager 1");
  const [selectedManager, setSelectedManager] = useState(false);
  const [managerType, setManagerType] = useState("User");

  const ManagerList = ["Manager", "Manager1", "Manager2"];

  const updateQuantity = (id, change) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}
    >
      {/* Sr No */}
      <Text
        style={{ flex: 1, fontSize: 14, color: "#333", textAlign: "center" }}
      >
        {item.srNo}
      </Text>

      {/* Medicine Name */}
      <Text style={{ flex: 3, fontSize: 14, color: "#333" }}>{item.name}</Text>

      {/* Quantity Control */}
      <View
        style={{
          flex: 3,
          flexDirection: "clearfix",
          alignItems: "center",
          justifyContent: "center",
          //   backgroundColor: "red",
        }}
      >
        <TouchableOpacity
          onPress={() => updateQuantity(item.id, -1)}
          style={{
            backgroundColor: "red",
            paddingVertical: 6,
            width: "50%",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, alignSelf: "center" }}>
            -
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          onPress={() => updateQuantity(item.id, 1)}
          style={{
            backgroundColor: "green",
            paddingVertical: 6,
            width: "50%",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, alignSelf: "center" }}>
            +
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "gold",
            paddingVertical: 6,
            width: "50%",
            borderRadius: 5,
            marginLeft: 5,
          }}
        >
          <Text style={{ color: "#333", fontSize: 14, alignSelf: "center" }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>

      {/* Action */}
      <TouchableOpacity
        style={{
          backgroundColor: "dodgerblue",
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 5,
          flex: 1,
          marginLeft: 10,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
          View
        </Text>
      </TouchableOpacity>

      <MedicineModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f7", padding: 18 }}>
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
          Manage Medicines
        </Text>
      </TouchableOpacity>

      {/* Manager Dropdown */}
      <TouchableOpacity
        onPress={() => setSelectedManager(!selectedManager)}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5%",
        }}
      >
        <Text>{managerType}</Text>
        <Ionicons
          name={selectedManager ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </TouchableOpacity>

      {selectedManager && (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
            marginBottom: "5%",
          }}
        >
          <FlatList
            data={ManagerList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setManagerType(item);
                  setSelectedManager(false);
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

      {/* Medicine Summary */}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Medicine Summary
        </Text>

        {/* Table Header */}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sr No
          </Text>
          <Text style={{ flex: 3, fontSize: 14, fontWeight: "bold" }}>
            Medicine Name
          </Text>
          <Text
            style={{
              flex: 3,
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Given
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Action
          </Text>
        </View>

        {/* List of Medicines */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default EditScreen;
