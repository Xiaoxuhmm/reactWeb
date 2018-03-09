const stocks = (state=[], action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      let newState = [
        ...state,
        action.symbol
      ]
      return newState
    case 'REMOVE_SYMBOL':
      return state.filter(element => element !== action.symbol)
    //two different way to remove element from array.
    // first, let index = array.indexOf(element); array.splice(index, 1);
    // This method would change the original array.
    // let newArray = array.filter(element => element != action.symbol);
    default:
      return state
  }
}

export default stocks
