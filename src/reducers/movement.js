export default (state = {}, action) => {
  switch (action.type) {
    case 'NEXT_SLIDE':
      if(typeof state.current == "undefined"){
        state.current = 0;
      }else{
        state.current++;
      }
      console.log(state)
      return state;
    case 'PREVIOUS_SLIDE':
      if(typeof state.current == "undefined" || state.current-1 < 0){
        state.current = 0;
      }else{
        state.current--;
      }
      console.log(state)
      return state;
    case 'RECALCULATE_DOM':
      
      return state;
    case 'SPECIFIC_SLIDE':
      state.current = action.index;
      console.log(state)
      return state;
    default:
      return state
  }
}
