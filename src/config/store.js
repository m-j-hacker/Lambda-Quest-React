import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    player: playerReducer,
})