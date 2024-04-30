import { useCallback } from 'react'
import { v4 as uuid } from 'uuid'

import {
  useAppDispatch,
  useAppSelector,
  UUID,
  cardEntityAction as CA,
  listidCardidOrdersAction as LCA,
} from '../store'

export const useCards = (listid: UUID) => {
  const dispatch = useAppDispatch()

  /* 리스트 내 모든 카드 가져오기 */
  const cards = useAppSelector(({ cardEntities, listidCardidOrders }) =>
    listidCardidOrders[listid].map((uuid) => cardEntities[uuid])
  )

  const onPrependCard = useCallback(() => {
    const card = CARD()
    dispatch(CA.add(card))
    dispatch(LCA.prependCardid({ listid, cardid: card.uuid }))
  }, [dispatch, listid])

  const onAppendCard = useCallback(() => {
    const card = CARD()
    dispatch(CA.add(card))
    dispatch(LCA.appendCardid({ listid, cardid: card.uuid }))
  }, [dispatch, listid])

  const onRemoveCard = useCallback(
    (uuid: UUID) => () => {
      dispatch(CA.remove(uuid))
      dispatch(LCA.removeCardid({ listid, cardid: uuid }))
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
