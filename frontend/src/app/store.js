import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../redux/company-user/userSlice";
import { ticketSlice } from "../redux/ticket/ticketSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    tickets: ticketSlice.reducer,
  },
});
