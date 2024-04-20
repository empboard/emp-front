import { type ThunkMiddleware, configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { useMemo } from 'react'
import logger from 'redux-logger'

const useLogger = import.meta.env.DEV

const initializeStore = () => {
  const middlewares: ThunkMiddleware[] = []

  if (useLogger) middlewares.push(logger)

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  })

  return store
}

export const useStore = () => {
  const store = useMemo(() => initializeStore(), [])
  return store
}
