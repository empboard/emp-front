import type * as T from '../types'

export type ListidOrdersState = T.UUID[]

export type SetListidOrdersAction = {
  payload: ListidOrdersState
}

export type AddListidToOrdersAction = {
  payload: T.UUID
}

export type RemoveListidFromOrdersAction = {
  payload: T.UUID
}
