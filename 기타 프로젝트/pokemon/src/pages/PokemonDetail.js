import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "./PokemonDetail.css"
import { pokemonAction } from '../redux/actions/pokemonAction';
import typeName from '../components/pokemonType';
import PokemonDetailTop from '../components/PokemonDetailTop';

const PokemonDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { data: pokemonList, loading} = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (!pokemonList || pokemonList.length === 0) {
      dispatch(pokemonAction.getPokemon());
    }
  }, [dispatch, pokemonList]);

  if (loading) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>;
  }

  const pokemon = pokemonList.find((pokemon) => pokemon.id === parseInt(id));

  if (!pokemon) {
    return <h1>포켓몬 데이터를 찾을 수 없습니다</h1>;
  }

  const totalState = pokemon.stats.hp 
  + pokemon.stats.attack 
  + pokemon.stats.defense 
  + pokemon.stats.specialAttack 
  + pokemon.stats.specialDefense 
  + pokemon.stats.speed;
    
    const prevPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id) - 1);
    const nextPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id) + 1);

    console.log(pokemon)

    return (
      <div className='detail-container'>
        <PokemonDetailTop pokemon={pokemon} nextPokemon={nextPokemon} prevPokemon={prevPokemon}/>
        <div className='pokemon-information'>
          <div className='pokemon-image'>
            <h3>No.{pokemon.id}</h3>
            <img className='pokemon-artwork' src={pokemon.sprites.imageArtworkUrl}/>
            <div className='pokemon-sprites'>
              <img src={pokemon.sprites.imageUrl}/>
              <img src={pokemon.sprites.imageUrl2}/>
            </div>
          </div>
          <div className='pokemon-info'>
            <div className='pokemon-name'>
              <h1>{pokemon.name}</h1>
              <h2>({pokemon.englishName})</h2>
            </div>
            <div className='pokemon-type'>
              <h3>포켓몬 타입</h3>
              <p>{pokemon.type[0]}</p>
              <p>{pokemon.type[1]}</p>
            </div>
            <div className='pokemon-description'>
              <p>
                {pokemon.description}
              </p>
            </div>
            <div className='pokemon-physical'>
              <span>키 : {pokemon.height} m</span>
              <span>무게 : {pokemon.weight} kg</span>
            </div>
            <div className='pokemon-stats'>
              <span>종족값 : {totalState}</span>
              <span>hp : {pokemon.stats.hp}</span>
              <span>공격력 : {pokemon.stats.attack}</span>
              <span>방어력 : {pokemon.stats.defense}</span>
              <span>특수공격 : {pokemon.stats.specialAttack}</span>
              <span>특수방어 : {pokemon.stats.specialDefense}</span>
              <span>스피드 : {pokemon.stats.speed}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default PokemonDetail