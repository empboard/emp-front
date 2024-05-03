import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider as ReduxProvider } from 'react-redux'
import { AuthProvider } from './context'
import { store } from './store'
import RoutesSetup from './routes/RoutesSetup'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <AuthProvider>
          <RoutesSetup />
        </AuthProvider>
      </DndProvider>
    </ReduxProvider>
  )
}

export default App
