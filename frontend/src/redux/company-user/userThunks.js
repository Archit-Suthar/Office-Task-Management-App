import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const companyUserRegister = createAsyncThunk(
  "companyUser/register",
  async (data, thunkAPI) => {
    try {
      const url = "http://localhost:3001/api/v1/company/register";
      console.log(url);
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return response.data.user;
    } catch (e) {
      if (e.code === "ERR_NETWORK") {
        return thunkAPI.rejectWithValue(e);
      } else {
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const url = "http://localhost:3001/api/v1/user/login";
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.data.user;
    } catch (e) {
      if (e.code === "ERR_NETWORK") {
        return thunkAPI.rejectWithValue(e);
      } else {
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  }
);
