import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getUser = createAsyncThunk(
  "auth/getUser", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/current");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);

export const register = createAsyncThunk(
  "auth/register", async ({name, email, password}, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", { name, email, password });
      axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);

export const login = createAsyncThunk(
  "auth/login", async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", { email, password });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);

export const logout = createAsyncThunk(
  "auth/logout", async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout");
      axios.defaults.headers.common.Authorization = '';
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);

export const AddContact = createAsyncThunk(
  "contacts/add", async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete", async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  }
);