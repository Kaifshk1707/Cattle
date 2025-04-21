import axios from "axios";

const projectId = "cattle-app-d5b6a";
const apiKey = "AIzaSyARy9_05Gmcrj2UjQ4OG96JWuuWbPuNEro";

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/manageUser`;

// ✅ GET All Medicines
export const getManageUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}?key=${apiKey}`);
    return res.data.documents.map((doc) => {
      const fields = doc.fields;

      return {
        id: fields.id?.stringValue || doc.name.split("/").pop(), // fallback to Firestore doc ID
        userName: fields.userName?.stringValue || "",
        userType: fields.userType?.booleanValue ?? false, // Firestore boolean
        status: fields.status?.booleanValue ?? false, // Firestore boolean
      };
    });
  } catch (err) {
    console.error("GET Error:", err);
    return [];
  }
};
