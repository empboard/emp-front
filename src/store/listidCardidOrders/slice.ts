import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

const initialState: T.ListidCardidOrdersState = {}

const ListidCardidOrdersSlice = createSlice({
  name: '@listidCardids',
  initialState,
  reducers: {
    set(state: T.ListidCardidOrdersState, action: T.SetListidCardidsAction) {
      state[action.payload.listid] = action.payload.cardids
    },

    remove(state: T.ListidCardidOrdersState, action: T.RemoveListidAction) {
      delete state[action.payload]
    },

    prependCardid(
      state: T.ListidCardidOrdersState,
      action: T.PrependCardidToListidAction
    ) {
      state[action.payload.listid] = [action.payload.cardid].concat(
        state[action.payload.listid]
      )
    },

    appendCardid(
      state: T.ListidCardidOrdersState,
      action: T.AppendCardidToListidAction
    ) {
      state[action.payload.listid].push(action.payload.cardid)
    },

    removeCardid(
      state: T.ListidCardidOrdersState,
      action: T.RemoveCardidFromListidAction
    ) {
      state[action.payload.listid].filter(
        (uuid) => uuid !== action.payload.cardid
      )
    },
  },
})

export const listidCardidOrdersAction = ListidCardidOrdersSlice.actions
export const listidCardidOrdersReducer = ListidCardidOrdersSlice.reducer
export * from './types'
