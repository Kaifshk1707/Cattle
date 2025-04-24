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
type UserModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedUser: any; 
  onUserUpdated: () => void; 
};
const EditManagerModal = ({
  modalVisible,
  setModalVisible,
  selectedUser,
  onUserUpdated,
}: UserModalProps) => {
  const navigation = useNavigation();
  const [status, setStatus] = useState("Active");
  const [userType, setUserType] = useState("User");
  const [statusVisible, setStatusVisible] = useState(false);
  const [userTypeVisible, setUserTypeVisible] = useState(false);
  const [userName, setUserName] = useState("");

  const statusOptions = ["Active", "Inactive"];
  const UserTypOptions = ["User", "Vendor"];

  const handleEditUser = async () => {
    const updatedUser = {
      userName,
      userType: userType === "Vendor",
      status: status === "Active",
    };
    await getEditUserList(selectedUser.id, updatedUser);
    setModalVisible(false);
    onUserUpdated();
  };

  useEffect(() => {
    if (selectedUser) {
      setUserName(selectedUser.userName || "");
      setUserType(selectedUser.userType ? "Vendor" : "User");
      setStatus(selectedUser.status ? "Active" : "Inactive");
    }
  }, [selectedUser]);

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
          <Text style={styles.title}>Edit Users</Text>

          {/* User Name Input */}
          <Text style={styles.label}>User Name</Text>
          <TextInput
            placeholder="Enter user name"
            value={userName}
            onChangeText={setUserName}
            style={styles.input}
          />

          {/* User Type Dropdown */}
          <Text style={styles.label}>User Type</Text>
          <TouchableOpacity
            onPress={() => setUserTypeVisible(!userTypeVisible)}
            style={styles.dropdown}
          >
            <Text>{userType}</Text>
            <Ionicons
              name={userTypeVisible ? "chevron-up" : "chevron-down"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
          {userTypeVisible && (
            <View style={styles.dropdownList}>
              {UserTypOptions.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    setUserType(item);
                    setUserTypeVisible(false);
                  }}
                  style={styles.dropdownItem}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

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
              onPress={handleEditUser}
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

export default EditManagerModal;
