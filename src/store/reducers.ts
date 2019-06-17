import { combineReducers } from 'redux';
import Auth from "./auth/reducers";
import Mark from './map/reducers';
import {CLEAR_MARKER_LIST, MarkerAction } from "../constants/actionTypes";
import { loadState } from "./localStorage";

const persistedState = loadState();

export const allReducers = combineReducers({
    Mark,
    Auth,
    persistedState
});

const rootReducer = (state: any, action: MarkerAction) => {
    if(action.type === CLEAR_MARKER_LIST){
        state = undefined
    }
    return allReducers(state, action);
}

export type AppState = ReturnType<typeof rootReducer>
