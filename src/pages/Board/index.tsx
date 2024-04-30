import { useEffect, useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useLists } from '../../hooks'
import { Div, Subtitle } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from './BoardList'

import { useAppDispatch, useAppSelector, getUserInfo } from '../../store'

const Board = () => {
  const { lists, onRemoveList, onCreateList, onMoveList, onDragEnd } =
    useLists()

  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

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
    <section className="flex flex-col gap-14 mx-12 my-12 min-h-screen">
      <Div>
        <Subtitle>{user?.jobTitle}</Subtitle>
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
