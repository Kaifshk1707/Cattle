import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice"
import UserSlice from "./reducers/UserSlice"
import { persistedReducer } from "./persisted/persistConfig";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";



export const store = configureStore({
  reducer: {
    CartSlice: persistedReducer,
    UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType <typeof store.getState>