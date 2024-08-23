import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Slip from "./Pages/Slip/Slip";
import Labbook from "./Pages/Labbook/Labbook";
import SlipList from "../Solutions/Slips Solutions/SlipList";
import Solution from "./Pages/SolutionPage/Solution";
import Login from "./Pages/Auth/LogIn/Login";
import Register from "./Pages/Auth/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./index.css";
import UserData from "./store/UserData";
const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slip" element={<Slip />} />
        <Route path="/:subjectId/slipList" element={<SlipList />} />
        <Route path="/labbook" element={<Labbook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserData />} />
        <Route path="/:subjectId/:slipId/:questionId" element={<Solution />} />
      </Routes>
    </Router>
  );
};

export default App;
