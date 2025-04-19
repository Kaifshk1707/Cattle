import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
} from "react-native";

const EditManagerModal = ({ modalVisible, setModalVisible }) => {
  const medicineData = [
    { medicine: "Anistomin", given: 0, date: "20 March 2025 1:44 PM" },
    { medicine: "Anistomin", given: 0, date: "20 March 2025 3:29 PM" },
    { medicine: "Anistomin", given: 1, date: "20 March 2025 3:29 PM" },
    { medicine: "Anistomin", given: -1, date: "20 March 2025 3:29 PM" },
  ];

  return (
    <Modal visible={modalVisible} transparent={true} animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Medicine Breakdown</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerText}>Medicine</Text>
              <Text style={styles.headerText}>Given</Text>
              <Text style={styles.headerText}>Transaction Date</Text>
            </View>
            <FlatList
              data={medicineData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.tableRow}>
                  <Text style={styles.rowText}>{item.medicine}</Text>
                  <Text style={styles.rowText}>{item.given}</Text>
                  <Text style={styles.rowText}>{item.date}</Text>
                </View>
              )}
            />
          </View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
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

export default EditManagerModal;
