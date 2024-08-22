import Home from "./Pages/Home/Home";
import Slip from "./Pages/Slip/Slip";
import Labbook from "./Pages/Labbook/Labbook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SlipList from "../Solutions/Slips Solutions/SlipList";
import CodeEditor from "./Pages/CodeEditor/CodeEditor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slip" element={<Slip />} />
        <Route path="/:subjectId/slipList" element={<SlipList />}></Route>
        <Route path="/labbook" element={<Labbook />} />
      </Routes>
    </Router>
  );
};

export default App;
