import type * as T from './types'

export const setTemp = (payload: T.State): T.SetTempAction => ({
  type: '@listEntities/temp',
  payload,
})
