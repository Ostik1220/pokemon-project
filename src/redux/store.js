import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./Pokemon/PokemonSlice";

export const store = configureStore({
    reducer:{
         pokemons: pokemonReducer
        }
})