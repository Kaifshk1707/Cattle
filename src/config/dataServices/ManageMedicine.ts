import axios from "axios";
import { Alert } from "react-native";

const projectId = "cattle-app-d5b6a";
const apiKey = "AIzaSyARy9_05Gmcrj2UjQ4OG96JWuuWbPuNEro";

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/manageMedicine`;

// ✅ GET All Medicines
export const getManageMedicineList = async () => {
  try {
    const res = await axios.get(`${baseUrl}?key=${apiKey}`);
    return (
      res.data.documents.map((doc: any) => {
        const fields = doc.fields;
        return {
          id: fields.id?.stringValue || doc.name.split("/").pop(),
          title: fields.title?.stringValue || "",
          stock: parseInt(fields.stock?.stringValue),
          status: fields.status?.booleanValue ?? false,
        };
      }) || []
    );
   
  } catch (err) {
    console.error("GET Error:", err);
    return [];
  }
};

// ✅ POST (Add New Medicine)
export const getAddMedicineList = async (medicineData: any) => {
  try {
    const body = {
      fields: {
        title: { stringValue: medicineData.title },
        stock: { stringValue: medicineData.stock.toString() },
        status: { booleanValue: medicineData.status },
      },
    };
    const res = await axios.post(`${baseUrl}?key=${apiKey}`, body);
    
    Alert.alert("Success", "Medicine added successfully.");
    return res.data;
  } catch (err) {
    console.error("POST Error:", err);
  }
};

// ✅ PUT (Edit Medicine)
export const getEditMedicineList = async (
  docId: string,
  medicineData: { title: string; stock: string; status: boolean }
) => {
  try {
    const body = {
      fields: {
        title: { stringValue: medicineData.title },
        stock: { stringValue: medicineData.stock.toString() },
        status: { booleanValue: medicineData.status },
      },
    };
    const res = await axios.patch(`${baseUrl}/${docId}?key=${apiKey}`, body);
    Alert.alert("Success", "Medicine updated successfully.");
    return res.data;
  } catch (err) {
    console.error("PUT Error:", err);
  }
};


export const getDeleteManageMedicineList = async (id: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}?key=${apiKey}`);
    Alert.alert("Success", "Medicine deleted successfully");
    return res.data;
  } catch (err) {
    console.error("DELETE Error:", err);
    return null;
  }
};
