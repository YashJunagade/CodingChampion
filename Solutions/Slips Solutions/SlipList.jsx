import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../src/Components/Loader/Loader'
import SideBar from '../../src/Components/SideBar/SideBar'
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../../src/config/firebase'
import './SlipList.css'

const SlipList = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState(null)
  const [filterMarks, setFilterMarks] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const subjectDoc = await getDoc(doc(db, 'slipSubjects', subjectId))
        if (subjectDoc.exists()) {
          setSubject(subjectDoc.data())
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error('Error fetching document:', error)
      }
    }

    fetchSubject()
  }, [subjectId])

  if (!subject) {
    return <Loader />
  }

  const filteredAndSortedSlips = subject.slips
    .map((slip) => ({
      ...slip,
      questions: slip.questions.filter(
        (q) => filterMarks === '' || q.marks.toString() === filterMarks
      ),
    }))
    .filter((slip) => slip.questions.length > 0)
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.slipId - b.slipId
      } else {
        return b.slipId - a.slipId
      }
    })

  const uniqueMarks = [
    ...new Set(
      subject.slips.flatMap((slip) => slip.questions.map((q) => q.marks))
    ),
  ]

  return (
    <div className="slip-list-container">
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
              {uniqueMarks.map((mark, index) => (
                <option key={index} value={mark}>
                  {mark} marks
                </option>
              ))}
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="sort-button"
            >
              Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
            </button>
          </div>
          {filteredAndSortedSlips.map((slip, index) => (
            <div key={index} className="slip-card">
              <h2>Slip No: {slip.slipId}</h2>
              <ul className="question-list">
                {slip.questions.map((question, qIndex) => (
                  <li key={qIndex} className="question-item">
                    <Link
                      to={`/${subjectId}/${slip.slipId}/${question.questionId}`}
                      className="question-link"
                    >
                      <div
                        className="question-box"
                        dangerouslySetInnerHTML={{
                          __html: `Q. ${question.text}`,
                        }}
                      />
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
  )
}

export default SlipList
