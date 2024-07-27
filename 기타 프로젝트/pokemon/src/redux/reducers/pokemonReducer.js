const initialState = {
  data: [],
  page: 1,
  pageSize: 27,
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

      case 'SET_PAGE':
          return {
            ...state,
            page: action.payload,
          }

      case 'SET_PAGE_SIZE':
          return {
            ...state,
            pageSize: action.payload,
          }

        default:
          return { ...state }
  }
}

export default pokemonReducer