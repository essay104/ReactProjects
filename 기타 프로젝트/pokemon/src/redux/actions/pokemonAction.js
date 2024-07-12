import api from "../api";

const getPokemon = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_POKEMON_REQUEST",
      })

      const response = await api.get(`/pokemon?limit=151`)
      const pokemonData = response.data.results

      const pokemonNames = pokemonData.map(pokemon => pokemon.name);

      dispatch({
        type: "GET_POKEMON_SUCCESS",
        payload: 
          pokemonNames,
        
      })
    }
    catch (error) {
      dispatch({type:"GET_POKEMON_FAILURE"})
    }
  }
}

export const pokemonAction = {getPokemon}