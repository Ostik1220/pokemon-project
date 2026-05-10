import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons, addPokemon } from "./pokemonsOperation";

const initialState = [];

const pokemonSlice = createSlice({
  name: "Pokemons",
  initialState: {
    loading: false,
    error: null,
    pokemons: [],
  },

  // reducers: {
  //   addPokemon: {
  //     reducer(state, action) {
  //       return [...state, action.payload];
  //     },
  //     prepare({ name, element }) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: name,
  //           element: element,
  //         },
  //       };
  //     },
  //   },

  //   deletePokemon: {
  //     reducer(state, action) {
  //       return state.filter((pokemon) => pokemon.id !== action.payload);
  //     },
  //     prepare(id) {
  //       return {
  //         payload: id,
  //       };
  //     },
  //   },
  // },

  extraReducers: (builder) => {

    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
    });

    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addPokemon.pending, (state) => {
      state.loading = true;

    });

    builder.addCase(addPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons.push(action.payload);
    });

    builder.addCase(addPokemon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },

  //   extraReducers: (builder) => {
  //   builder.addCase(fetchPokemons.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchPokemons.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.pokemons = action.payload;
  //   });
  //   builder.addCase(fetchPokemons.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   });
    

  //   builder.addCase(addPokemon.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(addPokemon.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.pokemons.push(action.payload);
  //   });
  //   builder.addCase(addPokemon.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   });
  // },
});




export const pokemonReducer = pokemonSlice.reducer;

// export const { addPokemon, deletePokemon } = pokemonSlice.actions;
