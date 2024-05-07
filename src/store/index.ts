import logger from 'redux-logger'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

import { globalReducers } from './global'
import { apiReducers } from './api'
import * as GLOBAL from './global'
import * as API from './api'

export type AppState = {
  listEntities: GLOBAL.ListEntitiesState
  listidOrders: GLOBAL.ListidOrderState
  listidCardidOrders: GLOBAL.ListidCardidOrdersState
  cardEntities: GLOBAL.CardEntityState
  user: API.UserState
  customer: API.CustomerCommentState
}

const rootReducer = combineSlices({
  globalReducers,
  apiReducers,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export * from './global'
export * from './api'
