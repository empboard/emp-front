import * as T from '../types'

export type ListEntitiesState = Record<string, T.List>

export type AddListAction = {
  payload: T.List
}

export type RemoveListAction = {
  payload: string
}
