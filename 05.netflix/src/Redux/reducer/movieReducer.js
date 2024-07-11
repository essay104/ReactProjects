// state 초기값 설정

const initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading: true,
    generList: [],
}

const movieReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_MOVIES_REQUEST":
            return { ...state, loading: true }
        case "GET_MOVIE_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upComingMovies: payload.upComingMovies,
                loading: false,
                generList: payload.generList,
            }
        case "GET_MOVIES_FAILURE":
            return { state, loading: false }
        default:
            return { ...state }
    }
}

export default movieReducer