import AsyncStorage from "@react-native-async-storage/async-storage";
import CartSlice from "../reducers/CartSlice";
import { persistReducer } from "redux-persist";


const persistConfig = {
  key: "cart",
  storage: AsyncStorage,
  whitelist: ["item"],
};

export const persistedReducer = persistReducer(persistConfig, CartSlice);