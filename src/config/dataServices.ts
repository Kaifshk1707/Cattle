import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase";
import { store } from "../redux/store";

export const getProductData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const list = [];
    querySnapshot.forEach((docs) => {
      list.push(docs.data());
    });
    return list;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

export const fetchUserData = async () => {
  try {
    const userIdFromRedux = store.getState().UserSlice.userData.uid; // this is the global state return id
    const userIdFromFirebase = auth.currentUser?.uid; // this also return id from firebase

    const userOrderRef = collection(doc(db, "users", userIdFromFirebase),"orders");

    const querySnapshot = await getDocs(userOrderRef)

    const orderList = querySnapshot.docs.map((docs)=>({
        id: docs.id,
        ...docs.data()
    }))
    return orderList;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
