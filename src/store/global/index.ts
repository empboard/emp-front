import { combineSlices } from '@reduxjs/toolkit'
import { listEntityReducer } from './ListEntitySlice'
import { listIdOrdersReducer } from './ListOrderSlice'
import { listCardOrderReducer } from './ListCardOrderSlice'
import { cardEntityReducer } from './CardEntitySlice'

export const globalReducers = combineSlices({
  listEntities: listEntityReducer,
  listidOrders: listIdOrdersReducer,
  listCardOrder: listCardOrderReducer,
  cardEntities: cardEntityReducer,
})

export * from './ListEntitySlice'
export * from './ListOrderSlice'
export * from './ListCardOrderSlice'
export * from './CardEntitySlice'
export * from './types'
