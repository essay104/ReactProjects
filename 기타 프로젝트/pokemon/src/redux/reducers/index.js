import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

export default combineReducers({pokemon: pokemonReducer})