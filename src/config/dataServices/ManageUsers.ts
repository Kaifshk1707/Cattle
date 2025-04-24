import axios from "axios";
import { Alert } from "react-native";

const projectId = "cattle-app-d5b6a";
const apiKey = "AIzaSyARy9_05Gmcrj2UjQ4OG96JWuuWbPuNEro";

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/manageUser`;

// ✅ GET All Users
export const getManageUserList = async () => {
  try {
    const res = await axios.get(`${baseUrl}?key=${apiKey}`);
    return (
      res.data.documents?.map((doc) => {
        const fields = doc.fields;
        return {
          id: doc.name.split("/").pop(),
          userName: fields.userName?.stringValue || "",
          userType: fields.userType?.booleanValue ?? false,
          status: fields.status?.booleanValue ?? false,
        };
      }) || []
    );
  } catch (err) {
    console.error("GET Error:", err);
    return [];
  }
};

// ✅ POST (Add New User)
export const getAddUserList = async (userData:any) => {
  try {
    const body = {
      fields: {
        userName: { stringValue: userData.userName },
        userType: { booleanValue: userData.userType },
        status: { booleanValue: userData.status },
      },
    };
    const res = await axios.post(`${baseUrl}?key=${apiKey}`, body);
    Alert.alert("Success", "User added successfully.");
    return res.data;
  } catch (err) {
    console.error("POST Error:", err);
  }
};

// ✅ PUT (Edit User)
export const getEditUserList = async (docId: string, userData: { userName: any; userType: any; status: any; }) => {
  try {
    const body = {
      fields: {
        userName: { stringValue: userData.userName },
        userType: { booleanValue: userData.userType },
        status: { booleanValue: userData.status },
      },
    };
    const res = await axios.patch(`${baseUrl}/${docId}?key=${apiKey}`, body);
    Alert.alert("Success", "User updated successfully.");
    return res.data;
  } catch (err) {
    console.error("PUT Error:", err);
  }
};

// ✅ DELETE User
export const getDeleteUserList = async (docId: string) => {
  try {
    await axios.delete(`${baseUrl}/${docId}?key=${apiKey}`);
    Alert.alert("Success", "User deleted successfully.");
    return true;
  } catch (err) {
    console.error("DELETE Error:", err);
    return false;
  }
};
