import { createSlice } from '@reduxjs/toolkit'
import type { List } from '.'

export type ListEntityState = Record<string, List>

const initialState: ListEntityState = {}

const ListEntitySlice = createSlice({
  name: '@listEntity',
  initialState,
  reducers: {
    add(state, action) {
      state[action.payload.uuid] = action.payload
    },
    remove(state, action) {
      delete state[action.payload]
    },
  },
})

export const listEntityAction = ListEntitySlice.actions
export const listEntityReducer = ListEntitySlice.reducer
