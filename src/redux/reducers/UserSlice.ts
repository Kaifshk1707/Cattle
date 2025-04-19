import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  userData: object | null;
}

const initialState: userState = {
  userData: null,
};

const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<object>) => {
      (state.userData = action.payload),
        AsyncStorage.setItem("user_Data", JSON.stringify(action.payload));
    },
  },
});

export const { setUserData } = UserSlice.actions;
export default UserSlice.reducer;
