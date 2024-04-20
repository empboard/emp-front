import type { Action } from 'redux'

export type State = number

export type SetTempAction = Action<'@listEntities/temp'> & {
  payload: State
}

export type Actions = SetTempAction
