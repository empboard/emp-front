import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

const initialState: T.ListEntitiesState = {}

const ListEntitySlice = createSlice({
  name: '@listEntity',
  initialState,
  reducers: {
    add(state: T.ListEntitiesState, action: T.AddListAction) {
      state[action.payload.uuid] = action.payload
    },

    remove(state: T.ListEntitiesState, action: T.RemoveListAction) {
      delete state[action.payload]
    },
  },
})

export const listEntityAction = ListEntitySlice.actions
export const listEntityReducer = ListEntitySlice.reducer
export * from './types'
