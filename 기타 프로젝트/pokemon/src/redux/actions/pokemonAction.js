import api from "../api";
import typeTranslations from "../../translation/translation";

const getPokemon = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_POKEMON_REQUEST",
      })
      const pokemon = await api.get(`/pokemon?limit=386`)
      const pokemonData = pokemon.data.results

      const pokemonDetails = await Promise.all(
        pokemonData.map(async(pokemon)=>{
          const pokemonResponse = await api.get(`/pokemon/${pokemon.name}`)
          const pokemonData = pokemonResponse.data

          const speciesResponse = await api.get(pokemonData.species.url)
          const speciesData = speciesResponse.data

          const koreanName = speciesData.names.find(name => name.language.name === 'ko').name
          
          const sprites = {
            imageUrl: pokemonData.sprites.front_default,
            imageArtworkUrl: pokemonData.sprites.other['official-artwork'].front_default
          }
          
          const species = speciesData.genera.find(genus => genus.language.name === 'ko').genus

          const types = pokemonData.types.map(typeInfo => typeTranslations[typeInfo.type.name])

          const ability = pokemonData.abilities.map(abilityInfo => ({
            name: abilityInfo.ability.name,
            isHidden: abilityInfo.is_hidden,
          }))

          const pokemonId = pokemonData.id
          savePokemonId(pokemonId)

          return {
            name: koreanName,
            id : pokemonId,
            sprites: sprites,
            species: species,
            type: types,
            ability: ability,
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