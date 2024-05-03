import { useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useLists } from '../../hooks'
import { Div, Subtitle } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from './BoardList'

const Board = () => {
  const { lists, onRemoveList, onCreateList, onMoveList, onDragEnd } =
    useLists()

  const children = useMemo(
    () =>
      lists?.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={index}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  )

  return (
    <section className="flex flex-col min-h-screen mx-12 my-12 gap-14">
      <Div>
        <Subtitle>TEST</Subtitle>
        <CreateListForm onCreateList={onCreateList} />
      </Div>

      <hr className="border-2" />

      <Div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Div className="flex">{children}</Div>
        </DragDropContext>
      </Div>
    </section>
  )
}

export default Board
