import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { pokemonAction } from '../redux/actions/pokemonAction';
import "./PokemonDetail.css"

const PokemonDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { data: pokemonList, loading} = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(pokemonAction.getPokemon());
  }, [dispatch, id]);

  if (loading || pokemonList == null) {
    return <h1>포켓몬 데이터를 불러오고 있습니다</h1>
  }
  else {

    return (
      <div className='detail-container'>
          <div >
            <h1>포켓몬 이름</h1>
          </div>
      </div>
    )
  }
}

export default PokemonDetail