import { reducer as AuthReducer } from './Auth/reducer';
import { reducer as AppReducer } from './AppReducer/reducer';
import thunk from 'redux-thunk';
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({ AuthReducer, AppReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };