/*
 * action types
 */
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const SPECIFIC_SLIDE = 'SPECIFIC_SLIDE';
export const DEBUG = 'DEBUG';
export const RECALCULATE_DOM = 'RECALCULATE_DOM';

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

export function gotoSlide(index) {
  return { type: SPECIFIC_SLIDE, index };
}

export function debug(){
    return { type: DEBUG };
}

export function recalculateDom(domNodes){
  return { type: RECALCULATE_DOM, domNodes}
}
