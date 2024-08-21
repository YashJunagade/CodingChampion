import { useState } from "react";
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
                  <div>C Programming</div>
                  <div>Database Management System</div>
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
                  <div>Web Technology</div>
                  <div>Relational Database</div>
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
                  <div>Data Structure</div>
                  <div>Big Data</div>
                  <div>Php</div>
                  <div>AngularJS</div>
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
                  <div>CPP</div>
                  <div>Advace Php</div>
                  <div>Node JS</div>
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
                  <div>Core Java</div>
                  <div>Python</div>
                  <div>MongoDB</div>
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
                  <div>Advance Java</div>
                  <div>Android Programming</div>
                  <div>dot Net Framework</div>
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
