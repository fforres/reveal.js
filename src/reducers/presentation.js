export default (state = {}, action) => {
  switch (action.type) {
    case "RECALCULATE_DOM":
      state.currentDomStructure = action.domNodes;
      return state;
    case "ADD_SLIDE":
      if(typeof state.slides === 'undefined'){
        state.slides = [];
      }
      state.slides = [...state.slides,action.domNode];
      return state;
    case 'NEXT_SLIDE':
        if(typeof state.current === "undefined"){
          state.current = 0;
        }
        state.current++;
        console.log(state);
        return state;
    case 'PREVIOUS_SLIDE':
        if(typeof state.current === "undefined" || state.current-1 < 0){
          state.current = 0;
        }else{
          state.current--;
        }
        console.log(state);
        return state;
    case "SET_CURRENT_SLIDE":
        var theCurrentSlide = state.current;
        state.slides.forEach(function(el,i,as){
          if(i === theCurrentSlide){
            var newClasses = [...el.classList].filter(function(el,i,as){
              if(el !== "future" && el !== "past"){
                return el;
              }
            });
            el.className =  newClasses.join(" ") + " present";
            if(typeof el[i+1] !== 'undefined'){
              //remover clase "pasado y presente", agregar "futuro"
            }
            if(typeof el[i-1] !== 'undefined'){
              //remover clase "futuro y presente", agregar "pasado"

            }
          }
        });
        return state;
    case "SET_PREVIOUS_SLIDE":

      return state;
    case "SET_NEXT_SLIDE":

      return state;
    default:
      return state
  }
};
