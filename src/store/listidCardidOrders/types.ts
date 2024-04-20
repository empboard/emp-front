import type { Action } from 'redux'
import * as CT from '../commonTypes'

export * from '../commonTypes'

/* 특정 목록이 어떤 카드를 어떤 순서로 가지고 있는지 나타내기 위한 상태 */
export type State = Record<CT.UUID, CT.UUID[]>

export type SetListidCardids = Action<'@listidCardids/set'> & {
  payload: CT.ListidCardidS
}

export type RemoveListidAction = Action<'@listidCardids/remove'> & {
  payload: CT.UUID
}

export type PrependCardidToListidAction =
  Action<'@listidCardids/prependCardid'> & {
    payload: CT.ListidCardid
  }

export type AppendCardidToListidAction =
  Action<'@listidCardids/appendCardid'> & {
    payload: CT.ListidCardid
  }

export type RemoveCardidFromListidAction =
  Action<'@listidCardids/removeCardid'> & {
    payload: CT.ListidCardid
  }

export type Actions =
  | SetListidCardids
  | RemoveListidAction
  | PrependCardidToListidAction
  | AppendCardidToListidAction
  | RemoveCardidFromListidAction
