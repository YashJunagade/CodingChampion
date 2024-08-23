import Home from "./Pages/Home/Home";
import Slip from "./Pages/Slip/Slip";
import Labbook from "./Pages/Labbook/Labbook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import SlipList from "../Solutions/Slips Solutions/SlipList";
import Solution from "./Pages/SolutionPage/Solution";
import Login from "./Pages/Auth/LogIn/Login";
import Register from "./Pages/Auth/Register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slip" element={<Slip />} />
        <Route path="/:subjectId/slipList" element={<SlipList />}></Route>
        <Route path="/labbook" element={<Labbook />} />
        <Route path="/codeEditor" element={<Solution />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
