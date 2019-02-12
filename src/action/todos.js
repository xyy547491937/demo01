

import { ADD_TODO } from './types.js';
export default function getList() {
    console.log('postAction')
    store.dispatch({
      type: ADD_TODO,
      text: 'Read the docs'
    })
}

getList()
