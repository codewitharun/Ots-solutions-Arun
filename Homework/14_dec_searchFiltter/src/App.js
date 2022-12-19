import "./App.css";
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [renderPokemon, setRenderPokemon] = useState([]);
  const [paginationPokemons, setpaginationPokemons] = useState([]);
  const [page, setpage] = useState(1);
  const [sort, setSort] = useState("");

  console.log("heights", sort);
  const filterPokemon = (searchValue) => {
    const newPokemons = paginationPokemons.filter((pokemon) =>
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
        setRenderPokemon(results.slice(0, 4));
        setpaginationPokemons(results.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function SortFilter(item) {
    // console.log(item);
    setSort(item);
  }
  // useEffect(() => {
  //   if (sort < 3) {
  //     const shortedData = paginationPokemons.sort(function (a, b) {
  //       console.log(a, b);
  //       if (a < b) {
  //         return -1;
  //       }
  //       if (b < a) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //     setRenderPokemon(shortedData);
  //   } else if (sort == "ascending") {
  //     const shortedData = paginationPokemons.sort(function (a, b) {
  //       if (a.firstName > b.firstName) {
  //         return -1;
  //       }
  //       if (b.firstName > a.firstName) {
  //         return 1;
  //       }
  //       return 0;
  //     });

  //     // console.log("sorted data", shortedData);
  //     // setTraineesList(shortedData);
  //   } else {
  //     // setTraineesList(mockTraineesData);
  //   }
  // }, [sort]);
  const dropdownFilter = (name) => {
    // console.log("data from dropdown filter", name);
    if (name === "Small") {
      console.log(name, "Selected");
    } else if (name === "Medium") {
      console.log(name, "Selected");
    } else if (name === "Large") {
      console.log(name, "Selected");
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);
  // mimicing componentDidMount
  useEffect(() => {
    if (page === 1) {
      setRenderPokemon(pokemons.slice(0, 4));
      setpaginationPokemons(pokemons.slice(0, 4));
    } else if (page === 2) {
      setRenderPokemon(pokemons.slice(4, 8));
      setpaginationPokemons(pokemons.slice(4, 8));
    } else if (page === 3) {
      setRenderPokemon(pokemons.slice(8, 12));
      setpaginationPokemons(pokemons.slice(8, 12));
    } else if (page === 4) {
      setRenderPokemon(pokemons.slice(12, 16));
      setpaginationPokemons(pokemons.slice(12, 16));
    } else if (page === 5) {
      setRenderPokemon(pokemons.slice(16, 20));
      setpaginationPokemons(pokemons.slice(16, 20));
    }
  }, [page]);

  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        <SearchForm
          filterPokemon={filterPokemon}
          dropdownFilter={dropdownFilter}
        />
        <List pokemons={renderPokemon} SortFilter={SortFilter} />
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={5}
          onPageChange={(event, data) => setpage(data.activePage)}
        />
      </div>
    </div>
  );
}

export default App;
