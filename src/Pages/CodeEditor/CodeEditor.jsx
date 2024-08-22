import React, { useRef, useState } from "react";
import Navbar from "../Home/Navbar";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [width, setWidth] = useState(600);
  const panelRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    setWidth(e.clientX);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="codeEditor">
        <div className="panel" style={{ width: width }}>
          <h2>Panel 1</h2>
          <p>Content for panel 1</p>
        </div>
        <div className="resizer" onMouseDown={handleMouseDown} />
        <div
          className="panel"
          style={{ width: `calc(100% - ${width}px - 10px)` }}
        >
          <h2>Panel 2</h2>
          <p>Content for panel 2</p>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
