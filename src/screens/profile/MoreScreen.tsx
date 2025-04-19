import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";

const MoreScreen = () => {
  const navigation = useNavigation();
  const [showManageDropdown, setShowManageDropdown] = useState(false);
  const [showInwardDropdown, setShowInwardDropdown] = useState(false);
  return (
    <AppAreaView>
      {/* Header Section */}
      <HomeHeader title={"More"} />
      <View style={{ padding: 20 }}>
        {/* Manage Transactions Dropdown */}
        <TouchableOpacity
          onPress={() => setShowManageDropdown(!showManageDropdown)}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 8,
            backgroundColor: "#9FA8DA33",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
            Manage Transactions {showManageDropdown ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>

        {showManageDropdown && (
          <View style={{ paddingLeft: 20, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateNew")}
              style={{ paddingVertical: 8 }}
            >
              <Text style={{ fontSize: 16, color: "#000" }}>• Create New</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("EditScreen")}
              style={{ paddingVertical: 8 }}
            >
              <Text style={{ fontSize: 16, color: "#000" }}>• Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("History")}
              style={{ paddingVertical: 8 }}
            >
              <Text style={{ fontSize: 16, color: "#000" }}>• History</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Inward Medicine Dropdown */}
        <TouchableOpacity
          onPress={() => setShowInwardDropdown(!showInwardDropdown)}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 8,
            backgroundColor: "#9FA8DA33",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
            Inward Medicine {showInwardDropdown ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>

        {showInwardDropdown && (
          <View style={{ paddingLeft: 20, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("InwardMedicine")}
              style={{ paddingVertical: 8 }}
            >
              <Text style={{ fontSize: 16, color: "#000" }}>
                • Inward Medicine
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => navigation.navigate("ExpiredMedicines")}
              style={{ paddingVertical: 8 }}
            >
              <Text style={{ fontSize: 16, color: "#000" }}>
                • Manage Inward Medicine
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </AppAreaView>
  );
};

export default MoreScreen;

