import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/es/storage";
import { pokemonReducer } from "./pokemon/pokemonSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { filterReducer } from "./search/SearchPokemonSlice";

const persistConfig = {
  key: "pokemons",
  storage,
  whitelist: ["pokemons"],
};

console.log("persistConfig", persistConfig);

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

console.log(store);

export let persistor = persistStore(store);
