import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EditManagerModal from "../../components/Modal/EditManagerModal";
import { useDispatch, useSelector } from "react-redux";
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";

const Users = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  // const dispatch = useDispatch();
  // const usersDataList = useSelector((state) => state.ManageUserList.data) || [];

  // const usersData = usersDataList.map((user) => ({
  //   id: user.id,
  //   name: user.name,
  //   status: user.status === 1 ? "Active" : "Inactive",
  //   type: user.userType === 1 ? "User" : "Vendor",
  // }));
  // console.log("===================", JSON.stringify(usersDataList));

  // useEffect(() => {
  //   dispatch(userListData());
  // }, []);

  const usersData = [
    { id: "1", name: "New Vendor", status: "Active", type: "Vendor" },
    { id: "2", name: "New User", status: "Active", type: "User" },
    { id: "3", name: "Kaif", status: "Active", type: "User" },
    { id: "4", name: "Manager1", status: "Active", type: "User" },
    { id: "5", name: "Vendor5", status: "Active", type: "Vendor" },
    { id: "6", name: "Vendor4", status: "Active", type: "Vendor" },
    { id: "7", name: "Vendor3", status: "Active", type: "Vendor" },
    { id: "8", name: "Vendor2", status: "Active", type: "Vendor" },
    { id: "9", name: "Vendor1", status: "Active", type: "Vendor" },
    { id: "10", name: "User5", status: "Active", type: "User" },
    { id: "11", name: "Vendor6", status: "Active", type: "Vendor" },
    { id: "12", name: "User7", status: "Active", type: "User" },
  ];

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
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ flex: 1, fontWeight: "bold" }}>Sr No</Text>
        <Text style={{ flex: 2, fontWeight: "bold" }}>User Name</Text>
        <Text style={{ flex: 1, fontWeight: "bold" }}>Status</Text>
        <Text style={{ flex: 1, fontWeight: "bold" }}>User Type</Text>
        <Text style={{ flex: 1, fontWeight: "bold" }}>Action</Text>
      </View>

      {/* User List */}
      {usersData ? (
        <FlatList
          data={usersData}
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
              <Text style={{ flex: 1 }}>{index + 1}</Text>
              <Text style={{ flex: 2 }}>{item.name}</Text>
              <Text style={{ flex: 1, color: "green", fontWeight: "bold" }}>
                {item.status}
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: item.type === "Vendor" ? "orange" : "green",
                  fontWeight: "bold",
                }}
              >
                {item.type}
              </Text>

              {/* Action Buttons */}
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={{
                    backgroundColor: "#FFC107",
                    padding: 5,
                    marginRight: 5,
                    borderRadius: 5,
                  }}
                >
                  <Feather name="edit" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setDeleteModal(true)}
                  // onPress={() => {
                  // dispatch(userListData());
                  // }}
                  style={{
                    // backgroundColor: "#DC3545",
                    backgroundColor: "green",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <MaterialIcons name="delete" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
            No data here...
          </Text>
        </View>
      )}

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AddUserScreen")}
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
      />
    </AppAreaView>
  );
};

export default Users;
