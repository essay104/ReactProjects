import { createStore } from "redux";

// initialState

const initialState = {
    number: 1
}

//reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newNumber = state.number + 1
            return {
                ...state,
                number: newNumber > 10 ? 0 : newNumber
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store