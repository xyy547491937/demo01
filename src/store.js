import { createStore, applyMiddleware, compose } from 'redux';
import ruducer from './reducer'
const initialState={};
export const store=createStore(ruducer);


console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]
