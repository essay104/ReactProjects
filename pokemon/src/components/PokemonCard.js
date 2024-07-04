import React, { useState, useEffect } from 'react';
import "./PokemonCard.css"
import { useParams } from 'react-router-dom';

const PokemonCard = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchPokemonList = async () => {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151?"
    console.log(pokemonUrl)
    setLoading(true)
    const response = await fetch(pokemonUrl)
    const pokemonData = await response.json()
    setLoading(false)
    setPokemonList(pokemonData.results)
    
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  if (loading || pokemonList == null) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>
  }

  else {
    return (
      <div className='pokemonCards'>
        {pokemonList.map((pokemon, idx) =>
        (<div key={idx}>{pokemon.name}
        </div>
        ))}
      </div>
    );
  }

};

export default PokemonCard;
