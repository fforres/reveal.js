/*
 * action types
 */
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const RECALCULATE_DOM = 'RECALCULATE_DOM';
export const ADD_SLIDE = 'ADD_SLIDE';
export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function nextSlide() {
  return { type: NEXT_SLIDE };
}

export function previousSlide() {
  return { type: PREVIOUS_SLIDE };
}


export function recalculateDom(domNodes){
  return { type: RECALCULATE_DOM, domNodes}
}

export function addSlide(domNode, parentIndex){
  return { type: ADD_SLIDE, domNode, parentIndex}
}
export function setCurrentSlide(index){
  return { type: SET_CURRENT_SLIDE, index}
}
