import * as T from '../types'

export type CardEntityState = Record<T.UUID, T.Card>

export type AddCardAction = {
  payload: T.Card
}

export type RemoveCardAction = {
  payload: T.UUID
}
