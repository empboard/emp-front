import type * as T from './types'
import * as CT from '../commonTypes'

/* 목록 UUID의 속성에 카드 UUID 배열을 추가 */
export const setListidCardids = (
  payload: CT.ListidCardidS
): T.SetListidCardids => ({
  type: '@listidCardids/set',
  payload,
})

/* listOrders의 특정 목록이 삭제된 경우 listidCardidOrders에서도 삭제 */
export const removeListid = (payload: string): T.RemoveListidAction => ({
  type: '@listidCardids/remove',
  payload,
})

/* 특정 목록이 가지고 있는 카드 UUID 배열 맨 앞에 새로운 카드의 UUID 삽입 */
export const prependCardidToListid = (
  payload: CT.ListidCardid
): T.PrependCardidToListidAction => ({
  type: '@listidCardids/prependCardid',
  payload,
})

/* 특정 목록이 가지고 있는 카드 UUID 배열 맨 뒤에 새로운 카드의 UUID 삽입 */
export const appendCardidToListid = (
  payload: CT.ListidCardid
): T.AppendCardidToListidAction => ({
  type: '@listidCardids/appendCardid',
  payload,
})

/* 특정 카드가 삭제될 때 목록에서 카드 UUID 제거 */
export const removeCardidFromListid = (
  payload: CT.ListidCardid
): T.RemoveCardidFromListidAction => ({
  type: '@listidCardids/removeCardid',
  payload,
})
