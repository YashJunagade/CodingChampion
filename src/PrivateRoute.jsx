import { Navigate } from "react-router-dom"
import { useUser } from "./store/UserContext"

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useUser()

  return isLoggedIn ? element : <Navigate to='/login' />
}

export default PrivateRoute
