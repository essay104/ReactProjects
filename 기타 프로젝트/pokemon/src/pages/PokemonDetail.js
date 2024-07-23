import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "./PokemonDetail.css"
import { pokemonAction } from '../redux/actions/pokemonAction';
import { useNavigate } from 'react-router-dom';
import typeName from '../components/pokemonType';
import PokemonDetailTop from '../components/PokemonDetailTop';

const PokemonDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { data: pokemonList, loading} = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(pokemonAction.getPokemon());
    dispatch(pokemonAction.getPokemon(id));
  }, [dispatch, id]);

  if (loading || pokemonList == null) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>
  }
  else {
    
    const prevPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id) - 1);
    const pokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id));
    const nextPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id) + 1);

    return (
      <div className='detail-container'>
        <PokemonDetailTop pokemon={pokemon} nextPokemon={nextPokemon} prevPokemon={prevPokemon}/>
          <div className={`pokemon-card-detail ${typeName(pokemon.type[0])}-detail`}>
          <div className='pokemonType'>
              <span className={`typeImg ${typeName(pokemon.type[0])}-img pokemonTypeDetail`}>
              </span>
              {pokemon.type[1] && <span className={`typeImg ${typeName(pokemon.type[1])}-img pokemonTypeDetail`}>
              </span> }
            <div className={`${pokemon.type[1]}-img`}></div>
          </div>
            <img className='pokemon-img' src={pokemon.sprites.imageArtworkUrl} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.species}</h3>
            <div className='ability'>  
              <h4>특성</h4>
              <div className='abilities'>
              {pokemon.ability.map((ability, idx) => (
                <div> 
                  <div>{ability.name}</div>
                  <div>{ability.isHidden ? ability.isHidden : ""}</div>
                </div>
            ))}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default PokemonDetail