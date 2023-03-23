import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { GET_FormReducer, FormReducer } from "./Form/form.reducer";

const Reducers = combineReducers({ GET_FormReducer, FormReducer }); // It will wraped up all our reducers into a single

export const store = legacy_createStore(Reducers, applyMiddleware(thunk)); //We are export store with managing all states
