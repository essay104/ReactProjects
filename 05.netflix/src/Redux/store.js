import { createStore, applyMiddleware, combineReducers } from "redux";
import { compose } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./reducers/movieReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movie: movieReducer,
})

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk))
);

export default store;