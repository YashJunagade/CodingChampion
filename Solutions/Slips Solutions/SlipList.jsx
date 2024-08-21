import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../src/Components/Navbar/Navbar";
import SideBar from "../../src/Components/SideBar/SideBar";
import SlipData from "./SlipData";
import "./SlipList.css";

const SlipList = () => {
  const { subjectId } = useParams();
  const subject = SlipData[subjectId];
  const [filterMarks, setFilterMarks] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const filteredAndSortedSlips = subject.slips
    .map((slip) => ({
      ...slip,
      questions: slip.questions.filter(
        (q) => filterMarks === "" || q.marks.toString() === filterMarks
      ),
    }))
    .filter((slip) => slip.questions.length > 0)
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.slipId - b.slipId;
      } else {
        return b.slipId - a.slipId;
      }
    });

  return (
    <div className="slip-list-container">
      <Navbar />
      <div className="slip-list-main-section">
        <SideBar />
        <div className="content-container">
          <h1>{subject.subject} Slips</h1>
          <div className="filter-sort-controls">
            <select
              value={filterMarks}
              onChange={(e) => setFilterMarks(e.target.value)}
              className="filter-select"
            >
              <option value="">All Marks</option>
              <option value="15">15 Marks</option>
              <option value="25">25 Marks</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="sort-button"
            >
              Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
            </button>
          </div>
          {filteredAndSortedSlips.map((slip, index) => (
            <div key={index} className="slip-card">
              <h2>Slip No: {slip.slipId}</h2>
              <ul className="question-list">
                {slip.questions.map((question, qIndex) => (
                  <li key={qIndex} className="question-item">
                    <Link
                      to={`/${subjectId}/slipList/${slip.slipId}/${question.questionId}`}
                      className="question-link"
                    >
                      {<p>{question.text}</p>}
                      <span className="marks-badge">
                        {question.marks} Marks
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlipList;
