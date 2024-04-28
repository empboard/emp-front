export type LoggedUser = {
  email: string
  password: string
}

export type Callback = () => void

export type ContextType = {
  loggedUser?: LoggedUser
  signup: (email: string, password: string, callback?: Callback) => void
  login: (email: string, password: string, callback?: Callback) => void
  logout: (callback?: Callback) => void
}
