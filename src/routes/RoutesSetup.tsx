import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from '../pages/Board'
import NoMatch from './NoMatch'
import Home from '../pages/Home'
import Card from './Card'
import Layout from './Layout'

const RoutesSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/card/:cardid" element={<Card />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesSetup
