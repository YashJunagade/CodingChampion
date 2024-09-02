import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../src/Components/Navbar/Navbar'
import SideBar from '../../src/Components/SideBar/SideBar'
import './LabList.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../src/config/firebase'

const SlipList = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState({
    subject: '',
    assignments: [],
  })

  useEffect(() => {
    const fetchSlipData = async () => {
      try {
        const slipDataSubject = await getDoc(doc(db, 'labSubjects', subjectId))
        if (slipDataSubject.exists()) {
          setSubject(slipDataSubject.data())
        } else {
          console.log('no such document!')
        }
      } catch (error) {
        console.log('error fetching document : ', error)
      }
    }

    fetchSlipData()
  }, [subjectId])

  if (!subject) {
    return <Loader />
  }

  function setName(setNo) {
    let setName = ''
    if (setNo === 1) {
      setName = 'A'
    } else if (setNo === 2) {
      setName = 'B'
    } else if (setNo === 3) {
      setName = 'C'
    } else {
      console.log('error in set name')
    }
    return setName
  }

  return (
    <div className="slip-list-container">
      <div className="slip-list-main-section">
        <SideBar />
        <div className="content-container">
          <h1>{subject.subject} Labbook</h1>
          {subject.assignments.map((assignment, index) => (
            <div key={index} className="assignment-set">
              <h2>Assignment {assignment.assignment}</h2>
              {assignment.sets.map((set, setIndex) => (
                <div key={setIndex} className="assignment-set">
                  <h3>Set: {setName(set.set)}</h3>
                  <ul className="question-list">
                    {set.questions.map((question, qIndex) => (
                      <li key={qIndex} className="question-item">
                        <Link
                          to={`/${subjectId}/${assignment.assignment}/${set.set}/${question.questionNo}`}
                          className="question-link"
                        >
                          <div
                            className="question-box"
                            dangerouslySetInnerHTML={{
                              __html: `Q${question.questionNo}. ${question.questionText}`,
                            }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlipList
