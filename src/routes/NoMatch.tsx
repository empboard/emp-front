import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <p className="text-xl text-center p-4 alert alert-error">
      Oops! No page found!
    </p>
  )
}

export default NoMatch
