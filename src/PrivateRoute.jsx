import { Navigate } from 'react-router-dom'
import { useUser } from './store/UserContext'
import MonetAd from './Components/MonetAd/MonetAd'

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useUser()

  return isLoggedIn ? element : <Navigate to="/login" />
}

export default PrivateRoute
