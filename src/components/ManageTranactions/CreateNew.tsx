import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const CreateNew = ({ navigation }) => {
  const [selectedManager, setSelectedManager] = useState(false);
  const [managerType, setManagerType] = useState("User");

  const [medicineList, setMedicineList] = useState([
    { medicine: "", quantity: 0 },
  ]);

  const ManagerList = ["Manager", "Manager1", "Manager2"];

  const addMedicine = () => {
    setMedicineList([...medicineList, { medicine: "", quantity: 0 }]);
  };

  const updateMedicine = (index, field, value) => {
    const updatedList = medicineList.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setMedicineList(updatedList);
  };

  const removeMedicine = (index) => {
    const updatedList = medicineList.filter((_, i) => i !== index);
    setMedicineList(updatedList);
  };

  const handleOutWard = () => {
    navigation.goBack();
    Alert.alert("Medicine Outwarded Successfully");
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FA" }}>
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
          Outward Medicine
        </Text>
      </TouchableOpacity>

      {/* Manager Dropdown */}
      <Text style={{ fontWeight: "bold", marginBottom: 10, marginTop: "2%" }}>
        Manager
      </Text>
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
            marginTop: 5,
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

      {/* Medicine and Quantity Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Medicine</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Quantity</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Action</Text>
      </View>

      <ScrollView>
        {medicineList.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 5,
              marginBottom: 10,
            }}
          >
            {/* Medicine Dropdown */}
            <Picker
              selectedValue={item.medicine}
              style={{ flex: 1 }}
              onValueChange={(value) =>
                updateMedicine(index, "medicine", value)
              }
            >
              <Picker.Item label="Select a medicine" value="" />
              <Picker.Item label="Paracetamol" value="Paracetamol" />
              <Picker.Item label="Ibuprofen" value="Ibuprofen" />
            </Picker>

            {/* Quantity Input */}
            <TextInput
              style={{
                width: 50,
                height: 40,
                borderWidth: 1,
                borderColor: "#ccc",
                textAlign: "center",
                marginHorizontal: 10,
              }}
              value={String(item.quantity)}
              keyboardType="numeric"
              onChangeText={(text) =>
                updateMedicine(index, "quantity", Number(text))
              }
            />

            {/* Increment & Decrement Buttons */}
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                padding: 10,
                borderRadius: 5,
                marginRight: 5,
              }}
              onPress={() =>
                updateMedicine(index, "quantity", item.quantity + 1)
              }
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() =>
                updateMedicine(
                  index,
                  "quantity",
                  item.quantity > 0 ? item.quantity - 1 : 0
                )
              }
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>-</Text>
            </TouchableOpacity>

            {/* Remove Button */}
            {medicineList.length > 1 && (
              <TouchableOpacity
                style={{
                  backgroundColor: "gray",
                  padding: 10,
                  borderRadius: 5,
                  marginLeft: 5,
                }}
                onPress={() => removeMedicine(index)}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Add Medicine Button */}
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "dodgerblue",
          justifyContent: "center",
          alignItems: "center",
          left: "90%",
          bottom: 20,
          position: "absolute",
          marginBottom: "10%",
        }}
        onPress={addMedicine}
      >
        <Ionicons name="medkit" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "dodgerblue",
          padding: 15,
          borderRadius: 5,
          marginTop: 10,
          marginTop: 10,
        }}
        onPress={() => handleOutWard()}
      >
        <Text
          style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
        >
          Outward Medicine
        </Text>
      </TouchableOpacity>

      {/* Action Buttons
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#007BFF",
            padding: 15,
            borderRadius: 5,
            marginRight: 10,
            flex: 1,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Outward Medicine
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#FFC107",
            padding: 15,
            borderRadius: 5,
            flex: 1,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default CreateNew;
