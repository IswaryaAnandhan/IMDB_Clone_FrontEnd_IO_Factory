import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import actorsReducer from './reducers/actorsReducer';
import moviesReducer from './reducers/moviesReducer';
import producersReducer from './reducers/producersReducer';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducer,
  producers: producersReducer,
});

// Create the Redux store with the root reducer and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
