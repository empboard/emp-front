import { createSlice } from '@reduxjs/toolkit'
import * as T from './types'

export type CardEntityState = Record<T.UUID, T.Card>

export type AddCardAction = {
  payload: T.Card
}

export type RemoveCardAction = {
  payload: T.UUID
}

const initialState: CardEntityState = {}

const CardEntitySlice = createSlice({
  name: '@cardEntity',
  initialState,
  reducers: {
    add(state: CardEntityState, action: AddCardAction) {
      state[action.payload.uuid] = action.payload
    },

    remove(state: CardEntityState, action: RemoveCardAction) {
      delete state[action.payload]
    },
  },
})

export const cardEntityAction = CardEntitySlice.actions
export const cardEntityReducer = CardEntitySlice.reducer
