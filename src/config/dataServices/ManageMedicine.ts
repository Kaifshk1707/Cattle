import axios from "axios";
import { Alert } from "react-native";

const projectId = "cattle-app-d5b6a";
const apiKey = "AIzaSyARy9_05Gmcrj2UjQ4OG96JWuuWbPuNEro";

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/manageMedicine`;

// ✅ GET All Medicines
export const getManageMedicineList = async () => {
  try {
    const res = await axios.get(`${baseUrl}?key=${apiKey}`);
    return res.data.documents.map((doc: any) => {
      const fields = doc.fields;

      return {
        id: fields.id?.stringValue || doc.name.split("/").pop(), // fallback to Firestore doc ID
        title: fields.title?.stringValue || "",
        stock: parseInt(fields.stock?.stringValue), // Firestore boolean
        status: fields.status?.booleanValue ?? false, // Firestore boolean
      };
    });
  } catch (err) {
    console.error("GET Error:", err);
    return [];
  }
};

export const getDeleteManageMedicineList= async (id: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}?key=${apiKey}`);
     Alert.alert("Success", "Medicine deleted successfully");
    return res.data;
   
  } catch (err) {
    console.error("DELETE Error:", err);
    return null;
  }
}

// // ✅ DELETE: Remove Medicine
// export const deleteMedicine = async (id) => {
//   try {
//     const res = await axios.delete(`${baseUrl}/${id}?key=${apiKey}`);
//     return res.data;
//   } catch (err) {
//     console.error("DELETE Error:", err);
//   }
// };
