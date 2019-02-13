

import { ADD_TODO } from './types.js';
export const getList=()=>{
    console.log('postAction')
    return ({
      type: ADD_TODO,
      text: 'Read the docs'
    })
}
