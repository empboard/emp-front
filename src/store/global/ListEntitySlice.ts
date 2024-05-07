import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

export type ListEntitiesState = Record<string, T.List>

export type AddListAction = {
  payload: T.List
}

export type RemoveListAction = {
  payload: string
}

const initialState: ListEntitiesState = {}

const ListEntitySlice = createSlice({
  name: '@listEntity',
  initialState,
  reducers: {
    add(state: ListEntitiesState, action: AddListAction) {
      state[action.payload.uuid] = action.payload
    },

    remove(state: ListEntitiesState, action: RemoveListAction) {
      delete state[action.payload]
    },
  },
})

export const listEntityAction = ListEntitySlice.actions
export const listEntityReducer = ListEntitySlice.reducer
