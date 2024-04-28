import { useMemo, type FC } from 'react'
import { useCards } from '../../hooks'
import type { List } from '../../store/commonTypes'
import {
  Button,
  Card,
  CardDroppable,
  Div,
  Paragraph,
  ListDraggable,
  type MoveFunc,
} from '../../components'

export type BoardListProps = {
  list: List
  index: number
  onMoveList: MoveFunc
  onRemoveList?: () => void
}

const BoardList: FC<BoardListProps> = ({
  list,
  index,
  onMoveList,
  onRemoveList,
  ...props
}) => {
  const { cards, onPrependCard, onAppendCard, onRemoveCard } = useCards(
    list.uuid
  )

  const children = useMemo(
    () =>
      cards.map((card, index) => (
        <Card
          key={card.uuid}
          card={card}
          onRemove={onRemoveCard(card.uuid)}
          draggableId={card.uuid}
          index={index}
        />
      )),
    [cards, onRemoveCard]
  )

  return (
    <ListDraggable id={list.uuid} index={index} onMove={onMoveList}>
      <Div
        {...props}
        className="p-2 m-2 border-2 border-gray-300 rounded-lg"
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
        <CardDroppable droppableId={list.uuid}>{children}</CardDroppable>
      </Div>
    </ListDraggable>
  )
}

export default BoardList
