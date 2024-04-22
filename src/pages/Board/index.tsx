import { useMemo } from 'react'
import { useLists } from '../../hooks'
import { Div, Title } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from './BoardList'

const Board = () => {
  const { lists, onRemoveList, onCreateList, onMoveList } = useLists()

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
      <Div className="mt-4">
        {children}
        <CreateListForm onCreateList={onCreateList} />
      </Div>
    </section>
  )
}

export default Board
