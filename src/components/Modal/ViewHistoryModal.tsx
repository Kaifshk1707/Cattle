import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ViewHistoryModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal visible={modalVisible} transparent={true} animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
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
            Manager: User1
          </Text>

          {/* Medicine Name */}
          <Text style={{ fontSize: 14, color: "#555", marginBottom: 2 }}>
            <Text style={{ fontWeight: "600" }}>Medicine:</Text> Melonex Plus
            Injection, Beekom L, Anistomin
          </Text>
          {/* <Text
            style={{
              fontSize: 16,
              color: "dodgerblue",
              fontWeight: "600",
              marginVertical: 6,
            }}
          >
            Melonex Plus Injection, Beekom L, Anistomin
          </Text> */}

          {/* Quantity & Dates */}
          <Text style={{ fontSize: 14, color: "#555", marginBottom: 2 }}>
            <Text style={{ fontWeight: "600" }}>Quantity Given:</Text> 5, 11, 6
          </Text>
          <Text style={{ fontSize: 14, color: "#555", marginBottom: 2 }}>
            <Text style={{ fontWeight: "600" }}>Created:</Text> 11th Mar 2025
            01:26 AM
          </Text>
          <Text style={{ fontSize: 14, color: "#555", marginBottom: 10 }}>
            <Text style={{ fontWeight: "600" }}>Last Updated:</Text> 11th Mar
            2025 01:26 AM
          </Text>

          {/* View Details Button */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              marginTop: 8,
              backgroundColor: "dodgerblue",
              paddingVertical: 10,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "600" }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "grey",
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  rowText: {
    flex: 1,
    textAlign: "center",
  },
});

export default ViewHistoryModal;
