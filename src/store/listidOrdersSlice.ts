import { createSlice } from '@reduxjs/toolkit'
import type { UUID } from './types'

export type ListidOrdersState = UUID[]

const initialState: ListidOrdersState = []

const ListIdOrdersSlice = createSlice({
  name: '@listidOrders',
  initialState,
  reducers: {
    set(state, action) {
      state = action.payload
    },
    add(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      state = state.filter((uuid) => uuid !== action.payload)
    },
  },
})

export const listIdOrdersAction = ListIdOrdersSlice.actions
export const listIdOrdersReducer = ListIdOrdersSlice.reducer
