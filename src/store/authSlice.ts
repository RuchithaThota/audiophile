import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CurrentUser = { name: string; mobileNumber: string };

interface AuthSlice {
  isAuthLoading: boolean;
  setIsAuthLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: CurrentUser;
}

const initialState: AuthSlice = {
  isAuthLoading: false,
  setIsAuthLoading: () => {},
  user: { name: "", mobileNumber: "" },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<CurrentUser>) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = authSlice.actions;
export default authSlice.reducer;
