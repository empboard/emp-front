import * as T from '../types'

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
