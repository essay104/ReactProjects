const initialState = {
  data: [],
  loading: false,
}

const pokemonReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case "GET_POKEMON_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "GET_POKEMON_SUCCESS":
      return {
        ...state,
        data: payload,
        loading: false,
      }
      
      case "GET_POKEMON_FAILURE":
        return {...state, loading: false}

        default:
          return { ...state }
  }
}

export default pokemonReducer