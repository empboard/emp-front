import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

export type ListidCardidOrdersState = Record<T.UUID, T.UUID[]>

export type SetListidCardidsAction = {
  payload: T.ListidCardidS
}

export type RemoveListidAction = {
  payload: T.UUID
}

export type AppendCardidToListidAction = {
  payload: T.ListidCardid
}

export type RemoveCardidFromListidAction = {
  payload: T.ListidCardid
}

const initialState: ListidCardidOrdersState = {}

const ListCardOrderSlice = createSlice({
  name: '@listidCardids',
  initialState,
  reducers: {
    set(state: ListidCardidOrdersState, action: SetListidCardidsAction) {
      state[action.payload.listid] = action.payload.cardids
    },

    remove(state: ListidCardidOrdersState, action: RemoveListidAction) {
      delete state[action.payload]
    },

    appendCardid(
      state: ListidCardidOrdersState,
      action: AppendCardidToListidAction
    ) {
      state[action.payload.listid].push(action.payload.cardid)
    },

    removeCardid(
      state: ListidCardidOrdersState,
      action: RemoveCardidFromListidAction
    ) {
      const list = state[action.payload.listid]
      const removeIndex = list.findIndex(
        (uuid) => uuid === action.payload.cardid
      )

      list.splice(removeIndex, 1)
    },
  },
})

export const listCardOrderAction = ListCardOrderSlice.actions
export const listCardOrderReducer = ListCardOrderSlice.reducer
