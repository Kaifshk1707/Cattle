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
import {
  getDeleteManageMedicineList,
  getManageMedicineList,
} from "../../config/dataServices/ManageMedicine";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import EditMedicineModal from "../../components/Modal/EditMedicineModal";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
import { globalColor } from "../../styles/globalColor";

const MedicineScreen = () => {
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [manageMedicine, setManageMedicine] = useState<any[] | undefined>([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchMedicineData = async () => {
    try {
       setLoading(true);
      const response = await getManageMedicineList();
      setManageMedicine(response);
    } catch (error) {
      console.log(error);
    }finally{
       setLoading(false);
    }
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

   <ShimmerPlaceHolder
     LinearGradient={LinearGradient}
     style={{
       height: 60,
       borderRadius: 8,
       marginBottom: 12,
       width: "100%",
     }}
   />;

const renderItem = ({ item, index }: { item: any; index: number }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 14,
      backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9F9F9",
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
    }}
  >
    {/* Index */}
    <Text
      style={{
        flex: 0.6,
        fontSize: 15,
        color: "#757575",
        textAlign: "center",
      }}
    >
      {index + 1}
    </Text>

    {/* Title */}
    <Text
      style={{
        flex: 2.8,
        fontSize: 16,
        fontWeight: "600",
        color: "#212121",
      }}
      numberOfLines={1}
    >
      {item.title}
    </Text>

    {/* Stock */}
    <Text
      style={{
        flex: 1.1,
        fontSize: 15,
        textAlign: "center",
        color: "#424242",
      }}
    >
      {item.stock}
    </Text>

    {/* Status */}
    <View
      style={{
        flex: 1.6,
        backgroundColor: item.status ? "#43A047" : "#FB8C00",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 13,
          fontWeight: "bold",
        }}
      >
        {item.status ? "Active" : "Inactive"}
      </Text>
    </View>

    {/* Actions */}
    <View
      style={{
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setSelectedMedicine(item);
          setModalVisible(true);
        }}
        style={{
          backgroundColor: "#FFEB3B",
          padding: 8,
          borderRadius: 8,
          marginRight: 8,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 3,
        }}
        activeOpacity={0.8}
      >
        <Feather name="edit" size={18} color="#212121" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDeleteMedicine(item.id)}
        style={{
          backgroundColor: "#E53935",
          padding: 8,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 3,
        }}
        activeOpacity={0.8}
      >
        <MaterialIcons name="delete" size={20} color="#FFF" />
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

      {/* <TextInput
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
      /> */}

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
            color: globalColor.blueGray,
            fontSize: 15,
          }}
        >
          Sr No
        </Text>
        <Text
          style={{
            flex: 3,
            fontWeight: "bold",
            color: globalColor.blueGray,
            fontSize: 15,
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
            color: globalColor.blueGray,
            fontSize: 15,
          }}
        >
          Stock
        </Text>
        <Text
          style={{
            flex: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: globalColor.blueGray,
            fontSize: 15,
          }}
        >
          Status
        </Text>
        <Text
          style={{
            flex: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: globalColor.blueGray,
            fontSize: 15,
          }}
        >
          Actions
        </Text>
      </View>

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
          data={manageMedicine}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
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
