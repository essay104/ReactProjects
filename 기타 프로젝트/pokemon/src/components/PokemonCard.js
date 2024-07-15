import React, { useState, useEffect } from 'react';
import "./PokemonCard.css"
import { useNavigate } from 'react-router-dom';
import typeName from './pokemonType';

const PokemonCard = ({pokemonList, loading}) => {
  const navigate = useNavigate()
  const showDetail = (id) => {
    navigate(`/pokemon/${id}`)
  }

  if (loading || pokemonList == null) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>
  }

  else {
    return (
      <div className='pokemonCards'>
        {pokemonList.map((pokemon, idx) => (
        <div key={idx} className={`pokemonCard ${typeName(pokemon.type[0])}`}
        onClick={()=>showDetail(pokemon.id)}
        >
          <div className='pokemonType'>
              <span className={`typeImg ${typeName(pokemon.type[0])}-img`}>
              </span>
              {pokemon.type[1] && <span className={`typeImg ${typeName(pokemon.type[1])}-img`}>
              </span> }
            <div className={`${pokemon.type[1]}-img`}></div>
          </div>
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
