import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

export type CardEntityState = Record<T.UUID, T.Card>

const initialState: CardEntityState = {}

const CardEntitySlice = createSlice({
  name: '@cardEntity',
  initialState,
  reducers: {
    add(state, action) {
      state[action.payload] = action.payload.uuid
    },
    remove(state, action) {
      delete state[action.payload]
    },
  },
})

export const cardEntityAction = CardEntitySlice.actions
export const cardEntityReducer = CardEntitySlice.reducer
