import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

export type ListidCardidOrdersState = Record<T.UUID, T.UUID[]>

export type SetListidCardids = {
  payload: T.ListidCardidS
}

const initialState: ListidCardidOrdersState = {}

const ListidCardidOrdersSlice = createSlice({
  name: '@listidCardids',
  initialState,
  reducers: {
    set(state: ListidCardidOrdersState, action: SetListidCardids) {
      state[action.payload.listid] = action.payload.cardids
    },
    remove(state, action) {
      delete state[action.payload]
    },
    prependCardid(state, action) {
      state[action.payload.listid] = [
        action.payload.cardid,
        ...[state[action.payload.listid]],
      ]
    },
    appendCardid(state, action) {
      state[action.payload.listid] = [
        ...state[action.payload.listid],
        action.payload.cardid,
      ]
    },
    removeCardid(state, action) {
      delete state[action.payload.listid][action.payload.cardid]
    },
  },
})

export const listidCardidOrdersAction = ListidCardidOrdersSlice.actions
export const listidCardidOrdersReducer = ListidCardidOrdersSlice.reducer
