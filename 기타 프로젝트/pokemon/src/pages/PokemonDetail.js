import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "./PokemonDetail.css"
import { pokemonAction } from '../redux/actions/pokemonAction';

const PokemonDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { data: pokemonList, loading} = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(pokemonAction.getPokemon());
  }, [dispatch, id]);

  if (loading || pokemonList == null) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>
  }
  else {

    const pokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id));

    return (
      <div className='detail-container'>
          <div >
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.species}</h3>
            <p>타입: {pokemon.type.join(', ')}</p>
          </div>
      </div>
    )
  }
}

export default PokemonDetail