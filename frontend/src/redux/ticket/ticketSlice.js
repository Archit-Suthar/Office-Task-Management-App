import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTickets } from "./ticketThunks";

const initialState = {
  tickets: [],
  status: "idle",
  error: null,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTickets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = action.payload;
      })
      .addCase(fetchAllTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
