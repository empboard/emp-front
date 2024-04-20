import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store/useStore'

const App = () => {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div>asd</div>
      </DndProvider>
    </ReduxProvider>
  )
}

export default App
