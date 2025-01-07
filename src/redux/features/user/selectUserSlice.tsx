import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./interface";

const loadSelectedUser = (): IUser | null => {
  try {
    const data = localStorage.getItem("selectedUser");
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading selected user from localStorage:", error);
    return null;
  }
};

const saveSelectedUser = (user: IUser | null) => {
  try {
    if (user) {
      localStorage.setItem("selectedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("selectedUser");
    }
  } catch (error) {
    console.error("Error saving selected user to localStorage:", error);
  }
};

interface UserState {
  selectedUser: IUser | null;
}

const initialState: UserState = {
  selectedUser: loadSelectedUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<IUser>) => {
      state.selectedUser = action.payload;
      saveSelectedUser(action.payload);
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
      saveSelectedUser(null);
    },
  },
});

export const { setSelectedUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
