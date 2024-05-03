import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="flex p-2 navbar bg-base-100">
      <Link to="/">Home</Link>
      <Link to="/board" className="ml-4">
        Board
      </Link>
    </div>
  )
}

export default NavigationBar
