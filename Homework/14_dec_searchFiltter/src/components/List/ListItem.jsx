import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
const ListItem = ({ pokemon }) => {
  const [details, setDetails] = useState(null);

  const getPokemonDetail = async () => {
    try {
      const { data } = await axios.get(pokemon.url);
      const { weight, height, sprites } = data;
      setDetails({ weight, height, sprites });
      // console.log(data?.spri)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonDetail();
  }, [pokemon]);

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
        <div>
          <Image
            src={details?.sprites?.front_shiny}
            size="small"
            bordered
            
            circular
          />
        </div>
      </li>
    </>
  );
};

export default ListItem;

//style="list-style:none; width: 200px; border: 1px solid"
// {listStyle: "none", width:'200px', border:'1px solid', margin:'4px'}
