import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider as ReduxProvider } from 'react-redux'
import { AuthProvider } from './context'
import Board from './pages/Board'
import { store } from './store'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <AuthProvider>
          <Board />
        </AuthProvider>
      </DndProvider>
    </ReduxProvider>
  )
}

export default App
