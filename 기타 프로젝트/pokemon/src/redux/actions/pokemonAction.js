import api from "../api";
import typeTranslations from "../../translation/translation";

const getPokemon = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_POKEMON_REQUEST",
      })
      const pokemon = await api.get(`/pokemon?limit=151`)
      const pokemonData = pokemon.data.results

      const pokemonDetails = await Promise.all(
        pokemonData.map(async(pokemon)=>{
          const pokemonResponse = await api.get(`/pokemon/${pokemon.name}`)
          const pokemonData = pokemonResponse.data

          const speciesResponse = await api.get(pokemonData.species.url)
          const speciesData = speciesResponse.data

          const koreanName = speciesData.names.find(name => name.language.name === 'ko').name
          
          const imageUrl = pokemonData.sprites.front_default
          const species = speciesData.genera.find(genus => genus.language.name === 'ko').genus

          const types = pokemonData.types.map(typeInfo => typeTranslations[typeInfo.type.name])

          return {
            name: koreanName,
            imageUrl: imageUrl,
            species: species,
            type: types,
          }
        })
      )

      dispatch({
        type: "GET_POKEMON_SUCCESS",
        payload: 
          pokemonDetails,
      })
    }
    catch (error) {
      dispatch({type:"GET_POKEMON_FAILURE"})
    }
  }
}

export const pokemonAction = {getPokemon}