import { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

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
    <div className="slip-solution">
      <div className="year" onClick={() => toggleSection("firstYear")}>
        <div className="year-title">First Year Slip Solution</div>
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
                    <Link to="/C Programming/slipList">C Programming </Link>
                  </div>
                  <div>
                    <Link to="/DBMS/slipList">
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
                    <Link to="/Web Technology/slipList">Web Technology </Link>
                  </div>
                  <Link to="/RDBMS/slipList">Relational DataBase (RDBMS) </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="year" onClick={() => toggleSection("secondYear")}>
        <div className="year-title">Second Year Slip Solution</div>
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
                    <Link to="/Data Structure/slipList">Data Structure</Link>
                  </div>
                  <div>
                    <Link to="/Big Data/slipList">Big Data</Link>
                  </div>
                  <div>
                    <Link to="/Php/slipList">Php</Link>
                  </div>
                  <div>
                    <Link to="/Angular JS/slipList">AngularJS</Link>
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
                    <Link to="/CPP/slipList">CPP</Link>
                  </div>
                  <div>
                    <Link to="/Advace Php/slipList">Advace Php</Link>
                  </div>
                  <div>
                    <Link to="/Node JS/slipList">Node JS</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="year" onClick={() => toggleSection("thirdYear")}>
        <div className="year-title">Third Year Slip Solution</div>
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
                    <Link to="/Core Java/slipList">Core Java</Link>
                  </div>
                  <div>
                    <Link to="/Python/slipList">Python</Link>
                  </div>
                  <div>
                    <Link to="/MongoDB/slipList">MongoDB</Link>
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
                    <Link to="/Advance Java/slipList">Advance Java</Link>
                  </div>
                  <div>
                    <Link to="/Android Programming/slipList">
                      Android Programming
                    </Link>
                  </div>
                  <div>
                    <Link to="/Dot Net Framework/slipList">
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
