import { createStore, combineReducers } from 'redux';
import allTodos from './reducers/allTodos';

const allReducers = combineReducers({
    allTodos
})

const store = createStore(allReducers);

export default store;