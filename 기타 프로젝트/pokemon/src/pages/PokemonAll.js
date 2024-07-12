import React, { useEffect } from 'react';
import "./PokemonAll.css"
import PokemonCard from '../components/PokemonCard'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonAction } from '../redux/actions/pokemonAction'

const PokemonAll = () => {
  const dispatch = useDispatch();
  const { data: pokemonList, loading} = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(pokemonAction.getPokemon());
  }, [dispatch]);

  return (
    <section className='pokemonAll'>
      <div className='type-nav'>
        <div className='type'>노말</div>
        <div className='type'>격투</div>
        <div className='type'>비행</div>
        <div className='type'>독</div>
        <div className='type'>땅</div>
        <div className='type'>바위</div>
        <div className='type'>벌레</div>
        <div className='type'>고스트</div>
        <div className='type'>강철</div>
        <div className='type'>불꽃</div>
        <div className='type'>물</div>
        <div className='type'>풀</div>
        <div className='type'>전기</div>
        <div className='type'>에스퍼</div>
        <div className='type'>얼음</div>
        <div className='type'>드래곤</div>
        <div className='type'>악</div>
        <div className='type'>페어리</div>
      </div>
      <PokemonCard pokemonList={pokemonList} loading={loading} />
    </section>
  )
}

export default PokemonAll