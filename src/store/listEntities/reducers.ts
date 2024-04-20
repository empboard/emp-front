import type * as T from './types'

const initialState: T.State = 0

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listEntities/temp':
      return action.payload
  }

  return state
}
