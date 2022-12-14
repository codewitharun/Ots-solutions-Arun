import "./App.css";
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [renderPokemon, setRenderPokemon] = useState([]);
  const [page, setpage] = useState(1);

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
    if (page === 1) {
      setRenderPokemon(pokemons.slice(0, 5));
    }
  }, []);

  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        <SearchForm filterPokemon={filterPokemon} />
        <List pokemons={renderPokemon} />
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={4}
          onPageChange={(event, data) => setpage(data.activePage)}
        />
      </div>
    </div>
  );
}

export default App;
