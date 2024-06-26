import { type FC, type PropsWithChildren, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'

type RequireAuthProps = {}

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({ children }) => {
  const { jwt } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!jwt) navigate('/login')
  }, [jwt, navigate])

  return <>{children}</>
}

export default RequireAuth
