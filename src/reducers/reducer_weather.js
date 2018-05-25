import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // Never change the current state by doing .push for example. You have to create a new instance of array
      return [ action.payload.data, ...state];
  }
  return state;
}
