import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

import * as L from './listEntities/slice'
import * as LO from './listidOrders/slice'
import * as C from './cardEntities/slice'
import * as LC from './listidCardidOrders/slice'
import * as U from './user/slice'

export type AppState = {
  listEntities: L.ListEntitiesState
  listidOrders: LO.ListidOrdersState
  listidCardidOrders: LC.ListidCardidOrdersState
  cardEntities: C.CardEntityState
  user: U.UserState
}

const rootReducer = combineReducers({
  listEntities: L.listEntityReducer,
  listidOrders: LO.listIdOrdersReducer,
  listidCardidOrders: LC.listidCardidOrdersReducer,
  cardEntities: C.cardEntityReducer,
  user: U.userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export * from './user/actions'
export * from './cardEntities/slice'
export * from './listidOrders/slice'
export * from './listidCardidOrders/slice'
export * from './listEntities/slice'
export * from './types'
