import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [visibleSections, setVisibleSections] = useState({
    firstYear: false,
    semI: false,
    semII: false,
    secondYear: false,
    semIII: false,
    semIV: false,
    thirdYear: false,
    semV: false,
    semVI: false,
  });

  // Toggle the visibility of sections
  const toggleSection = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="labbook-solution">
      <div className="year" onClick={() => toggleSection("firstYear")}>
        <div className="year-title">First Year Labbook Solution</div>
        {visibleSections.firstYear && (
          <div className="semesters">
            <div
              className="semester"
              onClick={(e) => {
                e.stopPropagation();
                toggleSection("semI");
              }}
            >
              Sem - I
              {visibleSections.semI && (
                <div className="subjects">
                  <div>
                    <Link to="/C Programming/LabList">C Programming </Link>
                  </div>
                  <div>
                    <Link to="/DBMS/labList">
                      DataBase Management System (DBMS)
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="semester"
              onClick={(e) => {
                e.stopPropagation();
                toggleSection("semII");
              }}
            >
              Sem - II
              {visibleSections.semII && (
                <div className="subjects">
                  <div>
                    <Link to="/Web Technology/labList">Web Technology</Link>
                  </div>
                  <Link to="RDBMS/labList">Relation Database</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="year" onClick={() => toggleSection("secondYear")}>
        <div className="year-title">Second Year Labbook Solution</div>
        {visibleSections.secondYear && (
          <div className="semesters">
            <div
              className="semester"
              onClick={(e) => {
                e.stopPropagation();
                toggleSection("semIII");
              }}
            >
              Sem - III
              {visibleSections.semIII && (
                <div className="subjects">
                  <div>
                    {" "}
                    <Link to="Data Structure/labList">Data Structure</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Big Data/labList">Big Data</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Php/labList">Php</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Angular JS/labList">Angular JS</Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="semester"
              onClick={(e) => {
                e.stopPropagation();
                toggleSection("semIV");
              }}
            >
              Sem - IV
              {visibleSections.semIV && (
                <div className="subjects">
                  <div>
                    <Link to="/CPP/labList">CPP</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Advance Php/labList">Advance Php</Link>
                  </div>
                  <div>
                    <Link to="/Node JS/labList">Node JS</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="year" onClick={() => toggleSection("thirdYear")}>
        <div className="year-title">Third Year Labbook Solution</div>
        {visibleSections.thirdYear && (
          <div className="semesters">
            <div
              className="semester"
              onClick={(e) => {
                e.stopPropagation();
                toggleSection("semV");
              }}
            >
              Sem - V
              {visibleSections.semV && (
                <div className="subjects">
                  <div>
                    <Link to="/Core Java/labList">Core Java</Link>
                  </div>
                  <div>
                    <Link to="/Python/labList">Python</Link>
                  </div>
                  <div>
                    <Link to="/MongoDB/labList">MongoDB</Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="semester"
              onClick={(e) => {
                e.stopPropagation();
                toggleSection("semVI");
              }}
            >
              Sem - VI
              {visibleSections.semVI && (
                <div className="subjects">
                  <div>
                    <Link to="/Advance Java/labList">Advance Java</Link>
                  </div>
                  <div>
                    <Link to="/Android Programming/labList">
                      Android Programming
                    </Link>
                  </div>
                  <div>
                    <Link to="/Dot Net Framework/labList">
                      Dot Net Framework
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
