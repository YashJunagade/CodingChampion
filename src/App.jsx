import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Slip from './Pages/Slip/Slip'
import Labbook from './Pages/Labbook/Labbook'
import SlipList from '../Solutions/Slips Solutions/SlipList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import Roadmaps from './Pages/RoadMaps/Roadmaps'
import Dsa from './Pages/DataStructure/Dsa'
import LabList from '../Solutions/Labbook Solutions/LabList'
import SlipSolution from './Pages/SolutionPage/SlipSolution/SlipSolution'
import LabSolution from './Pages/SolutionPage/LabSolution/LabSolution'
import Login from './Pages/Auth/LogIn/Login'
import Register from './Pages/Auth/Register/Register'
import Profile from './Pages/Profile/Profile'
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword'
import Navbar from '../src/Components/Navbar/Navbar'
import PrivateRoute from './PrivateRoute'

const App = () => {
  const location = useLocation()

  // Define routes where Navbar should not be displayed
  const noNavbarRoutes = ['/login', '/register', '/reset-password']

  // Determine if Navbar should be displayed based on the current path
  const shouldDisplayNavbar = !noNavbarRoutes.includes(location.pathname)

  return (
    <>
      <ToastContainer />
      {shouldDisplayNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route path="/slip" element={<Slip />} />
        <Route path="/:subjectId/slipList" element={<SlipList />} />
        <Route path="/:subjectId/labList" element={<LabList />} />
        <Route path="/labbook" element={<Labbook />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route
          path="/:subjectId/:slipId/:questionId"
          element={<SlipSolution />}
        />
        <Route
          path="/:subjectId/:assignment/:set/:question"
          element={<LabSolution />}
        />
      </Routes>
    </>
  )
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
