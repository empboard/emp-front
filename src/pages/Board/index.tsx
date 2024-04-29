import { useEffect, useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useLists } from '../../hooks'
import { Div, Title } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from './BoardList'

import { useAppDispatch, useAppSelector, getUserInfo } from '../../store'

const Board = () => {
  const { lists, onRemoveList, onCreateList, onMoveList, onDragEnd } =
    useLists()

  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.user.users)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  console.log(users)

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
    <section className="mt-4">
      <Title>Board</Title>
      <CreateListForm onCreateList={onCreateList} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Div className="mt-4">{children}</Div>
      </DragDropContext>
    </section>
  )
}

export default Board
