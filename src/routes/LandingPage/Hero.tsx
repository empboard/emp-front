import { Link } from 'react-router-dom'
import { Button, Div } from '../../components'

const Hero = () => {
  return (
    <div className="flex items-center p-4">
      <Div minWidth="30rem" maxWidth="30rem" width="30rem">
        <div className="flex flex-col justify-center p-4 font-bold">
          <p className="text-3xl text-center line-clamp-5">
            qweqweqeqweqweqeqeqeweqeqeqeqe
          </p>
          <div className="flex items-center justify-center mt-4">
            <Link to="/board">
              <Button className="btn-primary btn-outline" name="Go To Board" />
            </Link>
          </div>
        </div>
      </Div>
      <Div
        src=""
        className="w-full ml-4 border-2"
        minHeight="20rem"
        height="20rem"
        minWidth="50rem"
        width="50rem"
      />
    </div>
  )
}

export default Hero
