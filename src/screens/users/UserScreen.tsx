import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EditManagerModal from "../../components/Modal/EditManagerModal";
import { useDispatch, useSelector } from "react-redux";
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import {
  getManageUserList,
  getAddUserList,
  getEditUserList,
  getDeleteUserList,
} from "../../config/dataServices/ManageUsers";
import { getDeleteManageMedicineList } from "../../config/dataServices/ManageMedicine";
import { globalColor } from "../../styles/globalColor";
import { useFocusEffect } from "@react-navigation/native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";


const Users = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [manageUser, setManageUser] = useState<any[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const dispatch = useDispatch();

  const fetchManageUserData = async () => {
    try {
      setLoading(true); // Show loader
      const response = await getManageUserList();
      setManageUser(response);
    } catch (error) {
      console.error("Fetch error", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    fetchManageUserData();
  }, []);

  const handleUserUpdated = () => {
    fetchManageUserData(); // Refresh the list after update
  };

useFocusEffect(
  useCallback(() => {
    fetchManageUserData(); //fetch data every time screen comes into focus
  }, [])
);

<ShimmerPlaceHolder
  LinearGradient={LinearGradient}
  style={{
    height: 60,
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
  }}
/>


 

  // Delete User
  const handleDeleteUser = async (id: string) => {
    const success = await getDeleteUserList(id);
    if (success) {
      fetchManageUserData();
    }
  };

  return (
    <AppAreaView>
      {/* Header Section */}
      <HomeHeader title={" Manage Users"} />

      {/* Search Input */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginVertical: 10,
          borderRadius: 5,
        }}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Table Header */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#ddd",
          padding: 14,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            flex: 2,
            fontWeight: "bold",
            color: "black",
            right: 5,
          }}
        >
          Sr No
        </Text>
        <Text
          style={{
            fontSize: 15,
            flex: 2,
            fontWeight: "bold",
            color: "black",
            right: 20,
          }}
        >
          User Name
        </Text>
        <Text
          style={{
            fontSize: 15,
            flex: 2,
            left: 20,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Status
        </Text>
        <Text
          style={{
            fontSize: 15,
            flex: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          User Type
        </Text>
        <Text
          style={{
            fontSize: 15,
            flex: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Action
        </Text>
      </View>

      {/* User List */}
      {loading ? (
        <View style={{ flex: 1, padding: 16 }}>
          {[...Array(12)].map((_, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                paddingHorizontal: 10,
              }}
            >
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 4,
                  marginRight: 10,
                }}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{
                  flex: 2,
                  height: 30,
                  borderRadius: 4,
                  marginRight: 10,
                }}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{
                  width: 60,
                  height: 30,
                  borderRadius: 4,
                  marginRight: 10,
                }}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{
                  width: 60,
                  height: 30,
                  borderRadius: 4,
                  marginRight: 10,
                }}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{
                  width: 30,
                  height: 40,
                  borderRadius: 6,
                  marginRight: 5,
                }}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{ width: 30, height: 40, borderRadius: 6 }}
              />
            </View>
          ))}
        </View>
      ) : (
        <FlatList
          data={manageUser}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <Text style={{ flex: 1, fontSize: 15 }}>{index + 1}</Text>
              <Text style={{ flex: 2, fontSize: 15 }}>{item.userName}</Text>
              <Text
                style={{
                  flex: 1,
                  color:
                    item.status === true
                      ? globalColor.darkGreen
                      : globalColor.red,
                  fontWeight: "bold",
                  fontSize: 15,
                  right: 15,
                }}
              >
                {item.status === true ? "Active" : "Inactive"}
              </Text>
              <Text
                style={{
                  flex: 1,
                  color:
                    item.userType === true
                      ? globalColor.deepBlue
                      : globalColor.blueGray,
                  fontWeight: "bold",
                  fontSize: 15,
                  textAlign: "center",
                  right: 15,
                }}
              >
                {item.userType === true ? "Vendor" : "User"}
              </Text>
              {/* Action Buttons */}

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedUser(item);
                    setModalVisible(true);
                  }}
                  style={{
                    backgroundColor: globalColor.lightBlue,
                    padding: 3,
                    // marginRight: 5,
                    borderRadius: 5,
                    // left: 15,
                  }}
                >
                  <Feather
                    name="edit"
                    size={20}
                    color="black"
                    style={{ alignSelf: "center" }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleDeleteUser(item.id)}
                  style={{
                    backgroundColor: globalColor.red,
                    padding: 3,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                >
                  <MaterialIcons
                    name="delete"
                    size={20}
                    color="white"
                    style={{ alignSelf: "center" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AddUserScreen")}
        // onPress={handleAddUser}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "dodgerblue",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          right: 20, // Changed left to right for better positioning
        }}
      >
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* Delete Modal */}
      <Modal visible={deleteModal} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}
            >
              Are you sure you want to delete?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => setDeleteModal(false)}
                style={{
                  flex: 1,
                  backgroundColor: "dodgerblue",
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDeleteModal(false);
                }}
                style={{
                  flex: 1,
                  backgroundColor: "#DC3545",
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Edit Manager Modal */}
      <EditManagerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedUser={selectedUser}
        onUserUpdated={handleUserUpdated}
      />
    </AppAreaView>
  );
};

export default Users;
