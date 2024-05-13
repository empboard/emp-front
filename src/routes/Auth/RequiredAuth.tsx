import { FC, PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../../context'
import { useNavigate } from 'react-router-dom'

type RequiredAuthProps = {}

const RequiredAuth: FC<PropsWithChildren<RequiredAuthProps>> = ({
  children,
}) => {
  const { loggedUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedUser) navigate(-1)
  }, [loggedUser, navigate])

  return <>{children}</>
}

export default RequiredAuth
