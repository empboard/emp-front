import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

export type ListidOrderState = T.UUID[]

export type SetListidOrdersAction = {
  payload: ListidOrderState
}

export type AddListidToOrdersAction = {
  payload: T.UUID
}

export type RemoveListidFromOrdersAction = {
  payload: T.UUID
}

const initialState: ListidOrderState = []

const ListIdOrderSlice = createSlice({
  name: '@listidOrders',
  initialState,
  reducers: {
    set(state: ListidOrderState, action: SetListidOrdersAction) {
      state = action.payload
    },

    add(state: ListidOrderState, action: AddListidToOrdersAction) {
      state.push(action.payload)
    },

    remove(state: ListidOrderState, action: RemoveListidFromOrdersAction) {
      const removeIndex = state.findIndex((uuid) => uuid === action.payload)
      state.splice(removeIndex, 1)
    },
  },
})

export const listIdOrdersAction = ListIdOrderSlice.actions
export const listIdOrdersReducer = ListIdOrderSlice.reducer
