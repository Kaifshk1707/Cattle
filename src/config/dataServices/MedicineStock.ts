import axios from "axios";

const projectId = "cattle-app-d5b6a";
const apiKey = "AIzaSyARy9_05Gmcrj2UjQ4OG96JWuuWbPuNEro";

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/medicine`;

// ✅ GET All Medicines
export const getMedicinetData = async () => {
  try {
    const res = await axios.get(`${baseUrl}?key=${apiKey}`);
    return res.data.documents.map((doc) => {
      const fields = doc.fields;

      return {
        id: fields.id?.integerValue || doc.name.split("/").pop(), // fallback to Firestore doc ID
        title: fields.title?.stringValue || "",
        stock: parseInt(fields.stock?.integerValue || "0"),
        status: fields.status?.stringValue || "",
      };
    });
  } catch (err) {
    console.error("GET Error:", err);
  }
};
