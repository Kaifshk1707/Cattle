import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";

interface HomeData {
  SettingScreen: string;
  HomeScreen: string;
}

const HomeScreen: FC<HomeData> = () => {
  const [selectedManager, setSelectedManager] = useState("User2");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

  const HomeData = [
    { id: 1, title: "Total Customers", count: 7, color: "#B0BEC5" },
    { id: 2, title: "Total Medicines", count: 39, color: "#4CAF50" },
    { id: 3, title: "Total Inward", count: 4, color: "#FF9800" },
    { id: 4, title: "Total Outward", count: 8, color: "#03A9F4" },
  ];

  const medicinesStock = [
    { id: 1, medicine: "Gentavet", stock: 0, status: "Low Stock" },
    { id: 2, medicine: "Atropine", stock: 0, status: "Low Stock" },
    { id: 3, medicine: "Tilmotyle", stock: 0, status: "Low Stock" },
    { id: 4, medicine: "Sarral", stock: 0, status: "Low Stock" },
    { id: 5, medicine: "Pyrisafe", stock: 0, status: "Low Stock" },
  ];

  return (
    <AppAreaView>
      {/* Header Section */}
      <HomeHeader title={"DashBoard"} />
      {/* Home Summary Cards */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        {HomeData.map((item) => (
          <View
            key={item.id}
            style={{
              flex: 1,
              marginHorizontal: 5,
              backgroundColor: item.color,
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              {item.count}
            </Text>
            <Text style={{ fontSize: 14, color: "#fff" }}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* Medicines Stock Section */}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 10,
          shadowColor: "#000",
          elevation: 2,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Medicines Stock
        </Text>

        {/* Search Input */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 8,
            marginBottom: 10,
          }}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />

        {/* Stock Table */}
        <FlatList
          data={medicinesStock}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <Text>{item.medicine}</Text>
              <Text>{item.stock}</Text>
              <Text style={{ color: "red" }}>{item.status}</Text>
            </View>
          )}
        />
      </View>

      {/* Manager-wise Data Section */}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          marginTop: 15,
          borderRadius: 10,
          shadowColor: "#000",
          elevation: 2,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Manager-wise Data
        </Text>

        {/* Manager Dropdown */}
        <TouchableOpacity
          onPress={() => setShowDropdown(!showDropdown)}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 8,
            marginBottom: 10,
          }}
        >
          <Text>{selectedManager}</Text>
        </TouchableOpacity>

        {/* Dropdown Items */}
        {showDropdown && (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setSelectedManager("User1");
                setShowDropdown(false);
              }}
              style={{ padding: 8 }}
            >
              <Text>User1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedManager("User2");
                setShowDropdown(false);
              }}
              style={{ padding: 8 }}
            >
              <Text>User2</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Manager Data Table */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          }}
        >
          <Text>Anistomin</Text>
          <Text>0</Text>
          <Text>20 March 2025</Text>
        </View>
      </View>
    </AppAreaView>
  );
};
export default HomeScreen;
