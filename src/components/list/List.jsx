import { useSelector } from "react-redux"
import { Item } from "../item/Item"
import { selectPokemon } from "../../redux/Pokemon/PokemonSelector";
export const List = () => {
    const infoPokemon = useSelector(selectPokemon)
    console.log(infoPokemon);

    return (
        infoPokemon.map(pokemon => <Item key={pokemon.id} info={pokemon}></Item>)
    )
}