import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react'

import * as U from '../utils'

export type LoggedUser = {
  email: string
  password: string
}

type Callback = () => void

type ContextType = {
  jwt?: string
  errorMessage?: string
  loggedUser?: LoggedUser
  signup: (email: string, password: string, callback?: Callback) => void
  login: (email: string, password: string, callback?: Callback) => void
  logout: (callback?: Callback) => void
}

export const AuthContext = createContext<ContextType>({
  signup: (_email: string, _password: string, _callback?: Callback) => {},
  login: (_email: string, _password: string, _callback?: Callback) => {},
  logout: (_callback?: Callback) => {},
})

type AuthProviderProps = {}

// prettier-ignore
export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | undefined>(undefined)
  const [jwt, setJwt] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    U.readString('jwt')
      .then(jwt => setJwt(jwt ?? ''))
      .catch(() => {})
  }, [])

  const signup = useCallback((email: string, password: string, callback?: Callback) => {
    const user = { email, password }

    post('/auth/signup', user)
      .then(res => res.data)
      .then((result: { ok: boolean; body?: string; errorMessage?: string }) => {
        const { ok, body, errorMessage } = result
        if (ok) {
          U.writeString('jwt', body ?? '').finally(() => {
            setJwt(body ?? '')
            setLoggedUser(notUsed => user)
            U.writeObject('user', user).finally(() => callback && callback())
          })
        }

        else {
          setErrorMessage(errorMessage ?? '')
        }
      })
      .catch((e: Error) => setErrorMessage(e.message))
  }, [])

  const login = useCallback((email: string, password: string, callback?: Callback) => {
    const user = { email, password }
    U.readString('jwt')
      .then(jwt => {
        setJwt(jwt ?? '')
        return post('/auth/login', user, jwt)
      })
      .then(res => res.data)
      .then((result: { ok: boolean; errorMessage?: string }) => {
        if (result.ok) {
          setLoggedUser(notUsed => user)
          callback && callback()
        }

        else {
          setErrorMessage(result.errorMessage ?? '')
        }
      })
      .catch((e: Error) => setErrorMessage(e.message ?? ''))
  }, [])

  const logout = useCallback((callback?: Callback) => {
    setLoggedUser(undefined)
    setJwt(notUsed => '')
    callback && callback()
  }, [])

  const value = { jwt, errorMessage, loggedUser, signup, login, logout }

  return <AuthContext.Provider value={value} children={children} />
}

export const useAuth = () => {
  return useContext(AuthContext)
}
