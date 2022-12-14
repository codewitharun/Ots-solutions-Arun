import React from "react";

const SearchForm = ({ filterPokemon }) => {
  const search = (e) => {
    const val = e.target.value;
    filterPokemon(val);
  };

  return (
    <div>
      <form>
        <input name="pokemon" onChange={search} />
        <button type="submit">Search</button>
        <button type="reset">Reset</button>
        <select name="filter">
          <option>All</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
