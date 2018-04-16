//State argument is not application state, only the State
// this reduceris responsible for

export default function(state = null, action){

  switch (action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
    default:  state = null;
  }

  return state;
}
