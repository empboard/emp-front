import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Div } from '../components'

const NoMatch = () => {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <Div className="flex flex-col p-4">
      <p className="p-4 text-xl text-center text-white alert alert-error">
        No page found!
        <button onClick={goBack}>GO BACK</button>
      </p>
    </Div>
  )
}

export default NoMatch
