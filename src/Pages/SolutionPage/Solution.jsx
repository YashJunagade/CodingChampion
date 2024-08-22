import React, { useRef, useState } from "react";
import Navbar from "../Home/Navbar";
import "./Solution.css";
import CodeEditor from "./CodeEditor";
import QuestionCom from "./QuestionCom";

const Solution = () => {
  const [width, setWidth] = useState(40); // Initial width in percentage
  const panelRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const panelLeft = panelRef.current.getBoundingClientRect().left;
    const newWidth =
      ((e.clientX - panelLeft) / panelRef.current.offsetWidth) * 100;

    // Set minimum and maximum widths to prevent panels from disappearing
    if (newWidth > 10 && newWidth < 90) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="codeEditor" ref={panelRef}>
        <div className="panel" style={{ width: `${width}%` }}>
          <QuestionCom />
        </div>
        <div className="resizer" onMouseDown={handleMouseDown} />
        <div
          className="panel"
          style={{ width: `calc(100% - ${width}% - 10px)` }}
        >
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default Solution;
