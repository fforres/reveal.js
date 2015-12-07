export default (state = {}, action) => {
  switch (action.type) {
    case "RECALCULATE_DOM":
      state.currentDom = action.domNodes;
      console.log(state);
      return state
    default:
      return state
  }
};
