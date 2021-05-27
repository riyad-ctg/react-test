import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecreame/icecreamReducer';

const store = createStore(combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
}),composeWithDevTools(applyMiddleware(logger)));

export default store;