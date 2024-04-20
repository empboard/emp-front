import { useCallback } from 'react'
import CreateListForm from './CreateListForm'
import { Div, Title } from '../../components'

const Board = () => {
  const onCreateList = useCallback((uuid: string, title: string) => {
    console.log('onCreateList', uuid, title)
  }, [])

  return (
    <section className="mt-4">
      <Title>Board</Title>
      <Div className="mt-4">
        <CreateListForm onCreateList={onCreateList} />
      </Div>
    </section>
  )
}

export default Board
