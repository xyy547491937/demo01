import { createStore, applyMiddleware, compose } from 'redux';
import ruducer from './reducer'
import { getList } from './action/todos.js'
const initialState={};
export const store=createStore(ruducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
store.dispatch(getList());
unsubscribe();
// console.log(store.getState())
