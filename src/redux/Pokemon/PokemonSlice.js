import { createSlice, nanoid } from "@reduxjs/toolkit";

const pokemonLibrary = [{name: "Pikachu", element:"electric", id: nanoid()}]


const pokemonSlice = createSlice({
    name:"pokemons",

    initialState: pokemonLibrary,

    reducers:{
        addPokemon: {
            reducer(state, action){
                state.push(action.payload);
            }, 

            prepare(obj){
                return {
                    payload:{
                        name: obj.name,
                        element: obj.element,
                        id: nanoid()
                    }
                }
            }
        }
    }

})

export const pokemonReducer = pokemonSlice.reducer
