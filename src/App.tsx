import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store/useStore'
import Board from './pages/Board'

const App = () => {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Board />
        <p className="text-5xl text-red-500">123</p>
      </DndProvider>
    </ReduxProvider>
  )
}

export default App
