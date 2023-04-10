import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axios";

export const fetchAllTickets = createAsyncThunk(
  "tickets/fetchAllTickets",
  async () => {
    const response = await axiosInstance.get("/ticket/all");
    return response.data.data.tickets;
  }
);
