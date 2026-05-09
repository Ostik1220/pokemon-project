import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { AddForm } from "./components/addform/AddForm";
import { Filter } from "./components/filter/Filter";
import { List } from "./components/list/List";
import { fetchPokemons } from "./redux/Pokemon/pokemonsOperation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <>
      <AddForm />
      <List />
      <Filter />
    </>
  );
}

export default App;
