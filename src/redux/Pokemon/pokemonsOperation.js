import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https:69ff4c7c2b7ab349602f790b.mockapi.io";
const baseUrl = "https://687bab4eb4bc7cfbda86bede.mockapi.io";

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
)

export const addPokemon = createAsyncThunk(
  "pokemons/addPokemon",
  async (pokemonData, thunkAPI) => {
    try {
      const addedData = await axios.post(`${baseUrl}/pokemons`, pokemonData);
      const data = addedData.data;
      console.log("Data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)
