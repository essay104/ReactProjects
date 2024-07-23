import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { compose } from 'redux';
import pokemonReducer from './reducers/pokemonReducer';
import { loadPokemonId } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = {
  currentPokemonId: loadPokemonId(),
};

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;