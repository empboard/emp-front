import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Card, UUID } from '../store/commonTypes'
import { AppState } from '../store/AppState'
import { v4 as uuid } from 'uuid'

import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardidOrders'

export const useCards = (listid: UUID) => {
  const dispatch = useDispatch()

  const cards = useSelector<AppState, Card[]>(
    ({ cardEntities, listidCardidOrders }) =>
      listidCardidOrders[listid].map((uuid) => cardEntities[uuid])
  )

  const onPrependCard = useCallback(() => {
    const card = CARD()
    dispatch(C.addCard(card))
    dispatch(LC.prependCardidToListid({ listid, cardid: card.uuid }))
  }, [dispatch, listid])

  const onAppendCard = useCallback(() => {
    const card = CARD()
    dispatch(C.addCard(card))
    dispatch(LC.appendCardidToListid({ listid, cardid: card.uuid }))
  }, [dispatch, listid])

  const onRemoveCard = useCallback(
    (uuid: UUID) => () => {
      dispatch(C.removeCard(uuid))
      dispatch(LC.removeCardidFromListid({ listid, cardid: uuid }))
    },
    [dispatch, listid]
  )

  return { cards, onPrependCard, onAppendCard, onRemoveCard }
}

const CARD = () => ({
  uuid: uuid(),
  writer: {
    uuid: uuid(),
    name: 'seungsu hwang',
    jobTitle: 'developer',
    email: 'h970126@gmail.com',
    avatar: 'https://picsum.photos/200',
  },
  image: 'https://picsum.photos/200/300',
  title: 'title',
  paragraphs: '123123123',
  dayMonthYearDate: '2024/04/21',
  relativeDate: '오늘',
})
