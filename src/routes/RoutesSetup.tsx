import { Route, Routes } from 'react-router-dom'
import Board from '../pages/Board'
import NoMatch from './NoMatch'

const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesSetup
