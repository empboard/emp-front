import { combineReducers } from 'redux'
import * as L from './listEntities'
import * as LO from './listidOrders'

export const rootReducer = combineReducers({
  listEntities: L.reducer,
  listidOrders: LO.reducer,
})
