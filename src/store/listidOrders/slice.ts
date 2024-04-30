import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

const initialState: T.ListidOrdersState = []

const ListIdOrdersSlice = createSlice({
  name: '@listidOrders',
  initialState,
  reducers: {
    set(state: T.ListidOrdersState, action: T.SetListidOrdersAction) {
      state = action.payload
    },

    add(state: T.ListidOrdersState, action: T.AddListidToOrdersAction) {
      state.push(action.payload)
    },

    remove(state: T.ListidOrdersState, action: T.RemoveListidFromOrdersAction) {
      const removeIndex = state.findIndex((uuid) => uuid === action.payload)
      state.splice(removeIndex, 1)
    },
  },
})

export const listIdOrdersAction = ListIdOrdersSlice.actions
export const listIdOrdersReducer = ListIdOrdersSlice.reducer
export * from './types'
