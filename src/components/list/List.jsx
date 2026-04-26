import { useSelector } from "react-redux"
import { selectPokemon } from "../../redux/Pokemon/PokemonSelector"
import { Item } from "../item/Item"
import { nanoid } from "@reduxjs/toolkit"

export const List = () => {
const infoPokemon  = useSelector(selectPokemon)
console.log(infoPokemon)
return(
    <>
    {infoPokemon.map(pokemon => <Item key={pokemon.id} info={pokemon}/>)}
    </>
)
} 