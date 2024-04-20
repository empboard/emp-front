import { useMemo, type FC } from 'react'
import type { List } from '../../store/commonTypes'
import { Button, Card, Div, Paragraph } from '../../components'
import { useCards } from '../../hooks'

export type BoardListProps = {
  list: List
  onRemoveList?: () => void
}

const BoardList: FC<BoardListProps> = ({ list, onRemoveList, ...props }) => {
  const { cards, onPrependCard, onAppendCard, onRemoveCard } = useCards(
    list.uuid
  )

  const children = useMemo(
    () =>
      cards?.map((card) => (
        <Card key={card.uuid} card={card} onRemove={onRemoveCard(card.uuid)} />
      )),
    [cards, onRemoveCard]
  )

  return (
    <Div
      {...props}
      className="p-2 m-2 border border-gray-300 rounded-lg"
      minWidth="13rem"
    >
      <Div className="flex justify-between mb-2">
        <Paragraph className="w-32 underline" numberOfLines={1}>
          {list.title}
        </Paragraph>
        <Div className="flex justify-between ml-2">
          <Button
            name="REMOVE"
            className="btn-error btn-xs"
            onClick={onRemoveList}
          />
          <Div className="flex">
            <Button
              name="POST ADD"
              className="btn-success btn-xs"
              onClick={onPrependCard}
            />
            <Button
              name="PLAYLIST ADD"
              className="ml-2 btn-success btn-xs"
              onClick={onAppendCard}
            />
          </Div>
        </Div>
      </Div>
      <Div className="flex p-2">{children}</Div>
    </Div>
  )
}

export default BoardList
