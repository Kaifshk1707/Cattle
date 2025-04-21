import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase";




// export const getManageMedicine = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "manageMedicine"));
//     const list = [];
//     querySnapshot.forEach((docs) => {
//       list.push(docs.data());
//     });
//     return list;
//   } catch (error) {
//     console.error("Error fetching medicine data:", error);
//   }
// };



// export const fetchUserData = async () => {
//   try {
//   // this is the global state return id
//     const userIdFromFirebase = auth.currentUser?.uid; // this also return id from firebase

//     const userOrderRef = collection(
//       doc(db, "users", userIdFromFirebase),
//       "orders"
//     );

//     const querySnapshot = await getDocs(userOrderRef);

//     const orderList = querySnapshot.docs.map((docs) => ({
//       id: docs.id,
//       ...docs.data(),
//     }));
//     return orderList;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

// "https://jsonplaceholder.typicode.com/posts"

// ✅ POST: Add Medicine
// export const addMedicine = async (data) => {
//   try {
//     const res = await axios.post(`${baseUrl}?key=${apiKey}`, {
//       fields: {
//         name: { stringValue: data.name },
//         price: { integerValue: data.price },
//         quantity: { integerValue: data.quantity },
//       },
//     });
//     return res.data;
//   } catch (err) {
//     console.error("POST Error:", err);
//   }
// };

// ✅ PUT: Update Medicine
// export const updateMedicine = async (id, data) => {
//   try {
//     const res = await axios.patch(`${baseUrl}/${id}?key=${apiKey}`, {
//       fields: {
//         name: { stringValue: data.name },
//         price: { integerValue: data.price },
//         quantity: { integerValue: data.quantity },
//       },
//     });
//     return res.data;
//   } catch (err) {
//     console.error("PATCH Error:", err);
//   }
// };

// ✅ DELETE: Remove Medicine
// export const deleteMedicine = async (id) => {
//   try {
//     const res = await axios.delete(`${baseUrl}/${id}?key=${apiKey}`);
//     return res.data;
//   } catch (err) {
//     console.error("DELETE Error:", err);
//   }
// };
