import { ADD_TODO} from '../action/types.js';
const initialState=['this is self']
export function todos(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      console.log(action)
      return state.concat([action.text])
    default:
      return state
  }
}
