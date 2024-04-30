import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

const initialState: T.CardEntityState = {}

const CardEntitySlice = createSlice({
  name: '@cardEntity',
  initialState,
  reducers: {
    add(state: T.CardEntityState, action: T.AddCardAction) {
      state[action.payload.uuid] = action.payload
    },

    remove(state: T.CardEntityState, action: T.RemoveCardAction) {
      delete state[action.payload]
    },
  },
})

export const cardEntityAction = CardEntitySlice.actions
export const cardEntityReducer = CardEntitySlice.reducer
export * from './types'
