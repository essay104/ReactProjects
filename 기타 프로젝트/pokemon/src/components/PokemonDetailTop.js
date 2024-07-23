import React, {useEffect} from 'react'
import "./PokemonDetailTop.css"
import { useNavigate } from 'react-router-dom'
import typeName from './pokemonType'
import logo from "../imgs/logo.svg"

const PokemonDetailTop = ({pokemon, prevPokemon, nextPokemon}) => {

  const navigate = useNavigate()

  const goToPage = (id) => {
    navigate(`/pokemon/${id}`)
  }

  return (
    <div className='wrap'>
      <ul className='pokemonIDInfo'>
        {prevPokemon ? (
          <li className={`${typeName(prevPokemon.type[0])}-detail`} key={prevPokemon.id} onClick={()=> goToPage(prevPokemon.id)}>
            <div>
              <p>No.{prevPokemon.id}</p>
              <p>{prevPokemon.name}</p>
            </div>
              <img src={prevPokemon.sprites.imageUrl}/>
          </li>
        ) : (<li className='noneImg'>
              <img src={logo} alt='noneImg' width={120}/>
            </li>)}
        <li className={`${typeName(pokemon.type[0])}-detail`}>
          <div key={pokemon.id}>
            <p>No.{pokemon.id}</p>
            <p>{pokemon.name}</p>
          </div>
          <img src={pokemon.sprites.imageUrl}/>
        </li>
        {nextPokemon ? (
          <li className={`${typeName(nextPokemon.type[0])}-detail`} key={nextPokemon.id} onClick={()=> goToPage(nextPokemon.id)}>
          <div>
              <p>No.{nextPokemon.id}</p>
              <p>{nextPokemon.name}</p>
            </div>
            <img src={nextPokemon.sprites.imageUrl}/>
          </li>
        ) :
        (<li className='noneImg'>
          <img src={logo} alt='noneImg' width={120}/>
        </li>)
        }
        
      </ul>
    </div>
  )
}

export default PokemonDetailTop