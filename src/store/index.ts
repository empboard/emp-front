import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

import * as L from './listEntitiesSlice'
import * as LO from './listidOrdersSlice'
import * as C from './cardEntitiesSlice'
import * as LC from './listidCardidOrdersSlice'
import * as U from './user/slice'

export type AppState = {
  listEntities: L.ListEntityState
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
export * from './cardEntitiesSlice'
export * from './listidOrdersSlice'
export * from './listidCardidOrdersSlice'
export * from './listEntitiesSlice'
export * from './types'
