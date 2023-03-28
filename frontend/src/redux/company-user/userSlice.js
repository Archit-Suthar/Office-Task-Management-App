import { createSlice } from "@reduxjs/toolkit";
import { companyUserRegister, loginUser } from "./userThunks";

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // clearState to reset the state
    clearState: (state) => {
      state.user = {};
      state.loading = false;
      state.isAuthenticated = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(companyUserRegister.pending, (state, { payload }) => {
      state.user = {};
      state.loading = true;
      state.isAuthenticated = false;
      state.error = "";
      return state;
    });
    builder.addCase(companyUserRegister.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.isAuthenticated = true;
      state.error = "";
      return state;
    });
    builder.addCase(companyUserRegister.rejected, (state, { payload }) => {
      state.user = {};
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload.message;
      return state;
    });
    builder.addCase(loginUser.pending, (state, { payload }) => {
      state.user = {};
      state.loading = true;
      state.isAuthenticated = false;
      state.error = "";
      return state;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.isAuthenticated = true;
      state.error = "";
      return state;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.user = {};
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload.message;
      return state;
    });
  },
});
export const { clearState } = userSlice.actions;
