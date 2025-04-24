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
import { getAddUserList } from "../../config/dataServices/ManageUsers";
import { useNavigation } from "@react-navigation/native";
import { getAddMedicineList } from "../../config/dataServices/ManageMedicine";

const AddMedicineScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("Active");
  const [statusVisible, setStatusVisible] = useState(false);

  const statusOptions = ["Active", "Inactive"];

  const handleSaveMedicine = async () => {
    if (!title.trim()) {
      Alert.alert("Validation", "Please enter medicine name");
      return;
    }

    if (!stock.trim()) {
      Alert.alert("Validation", "Please enter stock");
      return;
    }

    const newMedicine = {
      title,
      stock,
      status: status === "Active",
    };

    try {
      await getAddMedicineList(newMedicine);
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
    }
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
          Add Medicine
        </Text>
      </TouchableOpacity>

      {/* Medicine Name Input */}
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Medicine Name
      </Text>
      <TextInput
        placeholder="Enter medicine name"
        value={title}
        onChangeText={setTitle}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 15,
        }}
      />

      {/* Stock Input */}
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Stock</Text>
      <TextInput
        placeholder="Enter stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 15,
        }}
      />

      {/* Status Dropdown */}
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Status</Text>
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
          onPress={handleSaveMedicine}
          style={{
            backgroundColor: "#2196F3",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMedicineScreen;
