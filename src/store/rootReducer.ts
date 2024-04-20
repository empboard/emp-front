import { combineReducers } from 'redux'
import * as L from './listEntities'

export const rootReducer = combineReducers({
  listEntities: L.reducer,
})
