import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
const ListItem = ({ pokemon }) => {
  const [details, setDetails] = useState(null);

  const getPokemonDetail = async () => {
    try {
      const { data } = await axios.get(pokemon.url);
      const { weight, height } = data;
      setDetails({ weight, height });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonDetail();
  }, []);

  return (
    <>
      <li
        style={{
          listStyle: "none",
          width: "200px",
          border: "1px solid",
          margin: "4px",
        }}
      >
        <div>Name: {pokemon.name.toUpperCase()}</div>
        <div>Weight: {details?.weight}</div>
        <div>Height: {details?.height}</div>
      </li>
    </>
  );
};

export default ListItem;

//style="list-style:none; width: 200px; border: 1px solid"
// {listStyle: "none", width:'200px', border:'1px solid', margin:'4px'}
