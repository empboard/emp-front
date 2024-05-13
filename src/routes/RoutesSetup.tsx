import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './Board'
import NoMatch from './NoMatch'
import Card from './Card'
import Layout from './Layout'
import LandingPage from './LandingPage'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import RequiredAuth from './Auth/RequiredAuth'

const RoutesSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="/board"
            element={
              <RequiredAuth>
                <Board />
              </RequiredAuth>
            }
          />
          <Route path="/board/card/:cardid" element={<Card />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/logout"
          element={
            <RequiredAuth>
              <Logout />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesSetup
