import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https:69ff4c7c2b7ab349602f790b.mockapi.io";
const baseUrl = "https:69ff4c7c2b7ab349602f790b.mockapi.io";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get(`${baseUrl}/pokemons`);
      const data = fetchData.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
