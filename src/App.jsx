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
import Login from "./Pages/Auth/LogIn/Login";
import Register from "./Pages/Auth/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./index.css";
import UserData from "./store/UserData";
import Roadmaps from "./Pages/RoadMaps/Roadmaps";
import Dsa from "./Pages/DataStructure/Dsa";
import LabList from "../Solutions/Labbook Solutions/LabList";
import SlipSolution from "./Pages/SolutionPage/SlipSolution/SlipSolution";
import LabSolution from "./Pages/SolutionPage/LabSolution/LabSolution";
const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slip" element={<Slip />} />
        <Route path="/:subjectId/slipList" element={<SlipList />} />
        <Route path="/:subjectId/labList" element={<LabList />} />
        <Route path="/labbook" element={<Labbook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserData />} />
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
    </Router>
  );
};

export default App;
