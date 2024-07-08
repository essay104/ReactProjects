import React from 'react'
import "./PokemonAll.css"
import PokemonCard from '../components/PokemonCard'

const PokemonAll = () => {
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
      <PokemonCard />
    </section>
  )
}

export default PokemonAll