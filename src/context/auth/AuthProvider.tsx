import { useCallback, useState, createContext } from 'react'
import type { FC, PropsWithChildren } from 'react'
import type { LoggedUser, Callback, ContextType } from './types'

export const AuthContext = createContext<ContextType>({
  signup: (email: string, password: string, callback?: Callback) => {},
  login: (email: string, password: string, callback?: Callback) => {},
  logout: (callback?: Callback) => {},
})

type AuthProviderProps = {}

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | undefined>(
    undefined
  )

  const signup = useCallback(
    (email: string, password: string, callback?: Callback) => {
      setLoggedUser((notUsed) => ({ email, password }))
      callback && callback()
    },
    []
  )

  const login = useCallback(
    (email: string, password: string, callback?: Callback) => {
      setLoggedUser((notUsed) => ({ email, password }))
      callback && callback()
    },
    []
  )

  const logout = useCallback((callback?: Callback) => {
    setLoggedUser(undefined)
    callback && callback()
  }, [])

  const value = {
    loggedUser,
    signup,
    login,
    logout,
  }

  return <AuthContext.Provider value={value} children={children} />
}
