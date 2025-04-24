import React, { useCallback, useEffect, useState } from "react";
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
import ManageMedicine from "../../components/Modal/ManageMedicine";
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import { getDeleteManageMedicineList, getManageMedicineList } from "../../config/dataServices/ManageMedicine";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import EditMedicineModal from "../../components/Modal/EditMedicineModal";

const MedicineScreen = () => {
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [manageMedicine, setManageMedicine] = useState<any[] | undefined>([]);
   const [selectedMedicine, setSelectedMedicine] = useState(null);
  const navigation = useNavigation();

  const fetchMedicineData = async () => {
    const response = await getManageMedicineList();
    setManageMedicine(response);
  };

  useEffect(() => {
    fetchMedicineData();
  }, []);

  useFocusEffect(
      useCallback(() => {
        fetchMedicineData(); //fetch data every time screen comes into focus
      }, [])
    );

   const handleMedicineUpdated = () => {
     fetchMedicineData(); // Refresh the list after update
   };

   // Delete User
     const handleDeleteMedicine = async (id: string) => {
       const success = await getDeleteManageMedicineList(id);
       if (success) {
         fetchMedicineData();
       }
     };

  const renderItem = ({ item, index }) => (
    <View
      style={{
        flexDirection: "row",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{ flex: 1, textAlign: "center", fontSize: 16, color: "#444" }}
      >
        {index + 1}
      </Text>
      <Text style={{ flex: 3, fontSize: 16, fontWeight: "500", color: "#222" }}>
        {item.title}
      </Text>
      <Text
        style={{ flex: 1, textAlign: "center", fontSize: 16, color: "#555" }}
      >
        {item.stock}
      </Text>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          paddingVertical: 6,
          borderRadius: 5,
          backgroundColor: item.status === true ? "#4CAF50" : "#FFA726",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {item.status === true ? "Active" : "Inactive"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", flex: 2, justifyContent: "center" }}>
        <TouchableOpacity
          // onPress={() => setModalVisible(true)}
          onPress={() => {
            setSelectedMedicine(item);
            setModalVisible(true);
          }}
          style={{
            backgroundColor: "#FFD700",
            padding: 6,
            marginRight: 5,
            borderRadius: 5,
            elevation: 2,
          }}
          activeOpacity={0.7}
        >
          <Feather name="edit" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>  handleDeleteMedicine(item.id)}
          style={{
            backgroundColor: "#E53935",
            padding: 6,
            borderRadius: 5,
            elevation: 2,
          }}
          activeOpacity={0.7}
        >
          <MaterialIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <AppAreaView>
      {/* Header Section */}
      <HomeHeader title={" Manage Medicine"} />
      {/* <View style={{ flexDirection: "row", marginTop: 10 }}>
              {["Copy", "CSV", "Excel", "Print"].map((text, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: "#616161",
                    padding: 8,
                    marginRight: 5,
                    borderRadius: 5,
                    elevation: 2,
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View> */}

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#bbb",
          padding: 12,
          marginVertical: 12,
          borderRadius: 5,
          backgroundColor: "white",
          fontSize: 16,
        }}
        placeholder="Search medicines..."
        value={search}
        onChangeText={setSearch}
      />

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
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
            // textAlign: "left",
          }}
        >
          Sr No
        </Text>
        <Text
          style={{
            flex: 3,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Medicine
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Stock
        </Text>
        <Text
          style={{
            flex: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Status
        </Text>
        <Text
          style={{
            flex: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Actions
        </Text>
      </View>

      <FlatList
        data={manageMedicine}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("AddMedicineScreen")}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "dodgerblue",
          justifyContent: "center",
          alignItems: "center",
          left: "85%",
          bottom: 10,
          position: "absolute",
          // marginBottom: "5%",
        }}
      >
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
      <EditMedicineModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedMedicine={selectedMedicine}
        onMedicineUpdated={handleMedicineUpdated}
      />
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
    </AppAreaView>
  );
};

export default MedicineScreen;
