export default (state = {}, action) => {
  switch (action.type) {
    case "RECALCULATE_DOM":
      state.currentDomStructure = action.domNodes;
      return state;
    case "ADD_SLIDE":
      if(typeof state.slides === 'undefined'){
        state.slides = [];
      }
      var newElement = {dom:action.domNode};
      //Setting parent relations on the child
      if(action.parentIndex){
        newElement.parent = { index: action.parentIndex, dom: state.slides[action.parentIndex].dom };
        //Setting Child relations on th parent
        if(typeof state.slides[action.parentIndex].child === 'undefined'){
          state.slides[action.parentIndex].child = [];
        }
        state.slides[action.parentIndex].child.push(state.slides.length+1);
      }
      state.slides = [...state.slides,newElement];
      return state;
    case 'NEXT_SLIDE':
        if(typeof state.current === "undefined"){
          state.current = 0;
        }
        if(state.current+1 > state.slides.length){
          return state;
        }
        state.current++;
        if(state.slides[state.current] && state.slides[state.current].child && state.slides[state.current].child.length > 0){
          state.current++;
        }
        return state;
    case 'PREVIOUS_SLIDE':
        if(typeof state.current === "undefined" || state.current-1 < 0){
          state.current = 0;
          return state;
        }
        state.current--;
        if(state.slides[state.current] && state.slides[state.current].child && state.slides[state.current].child.length > 0){
          state.current--;
        }
        return state;
    case "SET_CURRENT_SLIDE":
        if(typeof state.current === "undefined"){
          state.current = 0;
        }
        var theCurrentSlide = state.current;
        var theSlides = state.slides;
        state.slides.forEach(function(el,i,as){
          //De todas las slides, removeer "present,past, and future"
          var newClasses = [...el.dom.classList].filter(function(el,i,as){
            if(el !== "present" && el !== "past" && el !== "future"){
              return el;
            }
          });
          //De la slide actual, agregar "presente"
          if(i === theCurrentSlide && typeof theSlides[theCurrentSlide] !== 'undefined'){
            newClasses.push("present");
          }
          //De la slide anterior, agregar "pasado"
          if(i === theCurrentSlide-1 && typeof theSlides[theCurrentSlide-1] !== 'undefined'){
            newClasses.push("past present");
          }
          //De la slide proxima, agregar "futuro"
          if(i === theCurrentSlide+1 && typeof theSlides[theCurrentSlide+1] !== 'undefined'){
            newClasses.push("future");
          }
          el.dom.className =  newClasses.join(" ");
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
