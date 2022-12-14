import React from 'react'
import ListItem from './ListItem'

const List = ({pokemons}) => {
  return (
    <div>
        <ul style={{padding:'0px'}}>
            { (pokemons && pokemons.length > 0) ?
                 pokemons.map((pokemon, index)=><ListItem key={index} pokemon={pokemon} />) 
                 : <div>No data found!!</div> }
        </ul>
    </div>
  )
}

export default List