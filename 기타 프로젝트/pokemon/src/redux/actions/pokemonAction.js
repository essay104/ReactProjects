import api from "../api";
import { typeTranslations } from "../../translation/translation";
import { habitatTranslations } from "../../translation/translation";

const extractEvolutionChain = (chain) => {
  const evolutionData = [];

  let currentChain = chain;
  while (currentChain) {
    const { species, evolves_to } = currentChain;
    evolutionData.push({
      name: species.name,
      url: species.url,
    });
    currentChain = evolves_to[0];
  }

  return evolutionData;
};

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

          const evolutionResponse = await api.get(speciesData.evolution_chain.url)
          const evolution = extractEvolutionChain(evolutionResponse.data.chain)

          const descriptionEntry = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === "ko"
          )
          const description = descriptionEntry ? descriptionEntry.flavor_text : "No description available."

          const koreanName = speciesData.names.find(name => name.language.name === 'ko').name
          const englishName = speciesData.names.find(name => name.language.name === 'en').name
          
          const sprites = {
            imageUrl: pokemonData.sprites.front_default,
            imageUrl2: pokemonData.sprites.back_default,
            imageArtworkUrl: pokemonData.sprites.other['official-artwork'].front_default
          }
          
          const species = speciesData.genera.find(genus => genus.language.name === 'ko').genus

          const types = pokemonData.types.map(typeInfo => typeTranslations[typeInfo.type.name])

          const ability = pokemonData.abilities.map(abilityInfo => ({
            name: abilityInfo.ability.name,
            isHidden: abilityInfo.is_hidden,
          }))

          const pokemonId = pokemonData.id

          const stats = {
            hp: pokemonData.stats.find(stat => stat.stat.name === "hp").base_stat,
            attack: pokemonData.stats.find(stat => stat.stat.name === "attack").base_stat,
            defense: pokemonData.stats.find(stat => stat.stat.name === "defense").base_stat,
            specialAttack: pokemonData.stats.find(stat => stat.stat.name === "special-attack").base_stat,
            specialDefense: pokemonData.stats.find(stat => stat.stat.name === "special-defense").base_stat,
            speed: pokemonData.stats.find(stat => stat.stat.name === "speed").base_stat,
          };

          const height = pokemonData.height / 10
          const weight = pokemonData.weight / 10

          const habitat = habitatTranslations[speciesData.habitat?.name] 

          const isLegendary = speciesData.is_legendary
          const isMythtical = speciesData.is_mythical

          return {
            name: koreanName,
            englishName: englishName,
            id : pokemonId,
            sprites: sprites,
            species: species,
            type: types,
            ability: ability,
            description: description,
            stats: stats,
            height: height,
            weight: weight,
            habitat: habitat,
            evolution: evolution,
            isLegendary: isLegendary,
            isMythtical: isMythtical,
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

export const pokemonAction = { getPokemon }