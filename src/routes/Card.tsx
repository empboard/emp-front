import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Card as CardType, useAppSelector } from '../store'
import { useCallback, useEffect, useState } from 'react'
import { Avatar, Button, Div } from '../components'

const Card = () => {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const [card, setCard] = useState<CardType | null>(null)
  const { cardid } = params
  const cardEntities = useAppSelector(({ cardEntities }) => cardEntities)

  useEffect(() => {
    if (!cardEntities || !cardid) return
    cardEntities[cardid] && setCard((notUsed) => cardEntities[cardid])
  }, [cardEntities, cardid])

  if (!card) {
    return (
      <div className="p-4">
        <p>location: {JSON.stringify(location, null, 2)}</p>
        <p>params: {JSON.stringify(params, null, 2)}</p>
        <p>cardid: {params['cardid']}</p>
        <p>
          from: {searchParams.get('from')}, to: {searchParams.get('to')}
        </p>
        <p></p>
        <Button
          name="GO BACK"
          onClick={goBack}
          className="mt-4 btn-primary btn-xs"
        />
      </div>
    )
  }

  return (
    <div className="p-4">
      <Div
        src={card.image}
        className="w-full"
        minHeight="10rem"
        height="10rem"
      />
      <Div className="flex flex-row items-center mt-4">
        <Avatar src={card.writer.avatar} size="2rem" />
        <Div className="ml-2">
          <p className="text-xs font-bold">{card.writer.name}</p>
          <p className="text-xs text-gray-500">{card.writer.jobTitle}</p>
        </Div>
      </Div>
      <Button
        name="GO BACK"
        className="mt-4 btn-primary btn-xs"
        onClick={goBack}
      />
    </div>
  )
}

export default Card
