import React from "react";

const SearchForm = ({ filterPokemon, dropdownFilter }) => {
  const search = (e) => {
    const val = e.target.value;
    filterPokemon(val);
  };

  const filterPokemons = (e) => {
    const selectedValue = e.target.value;
    dropdownFilter(selectedValue);
  };
  return (
    <div>
      <form>
        <input name="pokemon" onChange={search} />
        <button type="submit">Search</button>
        <button type="reset">Reset</button>
        <select name="filter" onChange={filterPokemons}>
          <optgroup label="reset">
            <option>All</option>
          </optgroup>
          <optgroup label="Height">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
