// import { useDispatch } from "react-redux";
// import { deletePokemon } from "../../redux/pokemon/pokemonSlice";

export const Item = ({ info }) => {
  // const dispatch = useDispatch();

  console.log(info);

  return (
    <div>
      <h2>{info.name}</h2>
      <p>{info.element}</p>
      {/* <button onClick={() => dispatch(deletePokemon(info.id))}>Delete</button> */}
    </div>
  );
};
