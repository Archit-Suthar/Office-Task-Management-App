import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../redux/company-user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
