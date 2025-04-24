import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getEditUserList } from "../../config/dataServices/ManageUsers";
import { getEditMedicineList } from "../../config/dataServices/ManageMedicine";

type MedicineModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedMedicine: any;
  onMedicineUpdated: () => void;
};


const EditMedicineModal = ({
  modalVisible,
  setModalVisible,
  selectedMedicine,
  onMedicineUpdated,
}: MedicineModalProps) => {
  const navigation = useNavigation();
  const [status, setStatus] = useState("Active");
  const [statusVisible, setStatusVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");

  const statusOptions = ["Active", "Inactive"];

  const handleEditMedicine = async () => {
    const updatedUser = {
      title,
      stock,
      status: status === "Active",
    };
    await getEditMedicineList(selectedMedicine.id, updatedUser);
    setModalVisible(false);
    onMedicineUpdated();
  };

  useEffect(() => {
    if (selectedMedicine) {
      setTitle(selectedMedicine.title || "");
      setStock(selectedMedicine.stock.toString() || ""); // fixed line
      setStatus(selectedMedicine.status ? "Active" : "Inactive");
    }
  }, [selectedMedicine]);

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backgroundTouchable}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        />

        <View style={styles.modalContainer}>
          {/* Title */}
          <Text style={styles.title}>Edit Medicine</Text>

          {/* User Name Input */}
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
          <Text style={styles.label}>Status</Text>
          <TouchableOpacity
            onPress={() => setStatusVisible(!statusVisible)}
            style={styles.dropdown}
          >
            <Text>{status}</Text>
            <Ionicons
              name={statusVisible ? "chevron-up" : "chevron-down"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
          {statusVisible && (
            <View style={styles.dropdownList}>
              {statusOptions.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    setStatus(item);
                    setStatusVisible(false);
                  }}
                  style={styles.dropdownItem}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.cancelButton}
            >
              <Text style={{ color: "#333" }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleEditMedicine}
              style={styles.saveButton}
            >
              <Text style={{ color: "#fff" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundTouchable: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  label: {
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 6,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
});

export default EditMedicineModal;
