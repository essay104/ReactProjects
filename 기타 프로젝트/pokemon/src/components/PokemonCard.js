import React, { useState, useEffect } from 'react';
import "./PokemonCard.css"
import { useParams } from 'react-router-dom';

const PokemonCard = ({pokemonList, loading}) => {

  if (loading || pokemonList == null) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>
  }

  else {
    return (
      <div className='pokemonCards'>
        {pokemonList && pokemonList.map((pokemon, idx) => (
        <div key={idx} className='pokemonCard'>
          <h3>{pokemon.type}</h3>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <h5>{pokemon.species}</h5>
        </div>
      ))}
      </div>
    );
  }

};

export default PokemonCard;
