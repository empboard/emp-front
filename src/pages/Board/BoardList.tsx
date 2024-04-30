import { useMemo, type FC } from 'react'
import { useCards } from '../../hooks'
import type { List } from '../../store/types'
import {
  Card,
  CardDroppable,
  Div,
  ListDraggable,
  IconButton,
  Subtitle,
  type MoveFunc,
} from '../../components'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

export type BoardListProps = {
  list: List
  index: number
  onMoveList: MoveFunc
  onRemoveList: () => void
}

const BoardList: FC<BoardListProps> = ({
  list,
  index,
  onMoveList,
  onRemoveList,
  ...props
}) => {
  const { cards, onAppendCard, onRemoveCard } = useCards(list.uuid)

  const children = useMemo(
    () =>
      cards?.map((card, index) => (
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
        className="p-2 m-2 border-4 border-gray-500 rounded-3xl"
        minWidth="400px"
        maxWidth="400px"
      >
        <Div className="relative">
          <Div className="flex flex-row absolute right-0 top-0">
            <IconButton
              onClick={onAppendCard}
              className="text-gray-500 hover:text-[#205081]"
            >
              <IoMdAdd />
            </IconButton>
            <IconButton
              onClick={onRemoveList}
              className="text-gray-500 hover:text-red-400"
            >
              <IoMdRemove />
            </IconButton>
          </Div>
          <Subtitle className="text-2xl p-4">{list.title}</Subtitle>
        </Div>

        <hr className="border-2" />

        <CardDroppable droppableId={list.uuid}>{children}</CardDroppable>
      </Div>
    </ListDraggable>
  )
}

export default BoardList
