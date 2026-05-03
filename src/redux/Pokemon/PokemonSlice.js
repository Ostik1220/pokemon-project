import { createSlice, nanoid } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "Pokemons",
  initialState: [
  { name: "Pickachu", element: "electric", id: nanoid() },
],

  reducers: {
    addPokemon: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare({name, element}) {
        
        return {
          payload: {
            id: nanoid(),
            name: name,
            element: element,
          },
        };
      },
    },

    deletePokemon: {
      reducer(state, action) {
        return state.filter((pokemon) => pokemon.id !== action.payload);
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
});

export const pokemonReducer = pokemonSlice.reducer;

export const { addPokemon, deletePokemon } = pokemonSlice.actions;