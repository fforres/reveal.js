import { combineReducers } from 'redux'
import movement from './movement'
import debug from './debug'
import presentation from './presentation'

export default combineReducers({
  movement,
  debug,
  presentation
})
