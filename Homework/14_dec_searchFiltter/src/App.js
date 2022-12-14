import "./App.css";
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [renderPokemon, setRenderPokemon] = useState([]);

  const filterPokemon = (searchValue) => {
    const newPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchValue.toLowerCase())
    );
    setRenderPokemon(newPokemons);
  };

  //calling api
  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(({ data: { results } }) => {
        setPokemons(results);
        setRenderPokemon(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePokemon = (name) => {};

  // mimicing componentDidMount
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        <SearchForm filterPokemon={filterPokemon} />
        <List pokemons={renderPokemon} />
      </div>
    </div>
  );
}

export default App;
