import React, { useEffect, useRef, useState } from 'react'
import './Labsolution.css'
import Navbar from '../../../Components/Navbar/Navbar'
import QuestionLabCom from './QuestionLabCom'
import CodeEditor from '../CodeEditor'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'

function LabSolution() {
  const panelRef = useRef(null)
  const [width, setWidth] = useState(40)
  const { subjectId, assignment, set, question } = useParams()
  const [language, setLanguage] = useState('')
  const [assignmentNo, setAssignmentNo] = useState('')
  const [setName, setSetName] = useState('')
  const [questionNo, setQuestionNo] = useState('')
  const [questionText, setQuestionText] = useState('')
  const [solution, setSolution] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Labdata = await getDoc(doc(db, 'labSubjects', subjectId))
        if (Labdata.exists()) {
          const data = Labdata.data()

          setLanguage(data.language)
          setAssignmentNo(data.assignments[assignment - 1].assignment)
          setSetName(data.assignments[assignment - 1].sets[set - 1].set)
          const qData =
            data.assignments[assignment - 1].sets[set - 1].questions[
              question - 1
            ]
          setQuestionNo(qData.questionNo)
          setQuestionText(qData.questionText)
          setSolution(
            qData.solution ??
              'Currently there is no solution for this Question\n\t Our team is working on it \n\t\t try after some time...'
          )
        } else {
          console.log('no question found')
        }
      } catch (error) {
        console.log('error fetching data : ', error)
      }
    }

    fetchData()
  }, [subjectId, assignment, set, question])

  const handleMouseDown = (e) => {
    e.preventDefault()
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e) => {
    const panelLeft = panelRef.current.getBoundingClientRect().left
    const newWidth =
      ((e.clientX - panelLeft) / panelRef.current.offsetWidth) * 100

    // Set minimum and maximum widths to prevent panels from disappearing
    if (newWidth > 10 && newWidth < 90) {
      setWidth(newWidth)
    }
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className="container">
      <Navbar />
      <div className="codeEditor" ref={panelRef}>
        <div className="panel" style={{ width: `${width}%` }}>
          <QuestionLabCom
            assignmentNo={assignmentNo}
            setName={setName}
            questionNo={questionNo}
            questionText={questionText}
          />
        </div>
        <div className="resizer" onMouseDown={handleMouseDown} />
        <div
          className="panel"
          style={{ width: `calc(100% - ${width}% - 10px)` }}
        >
          <CodeEditor language={language} solution={solution} />
        </div>
      </div>
    </div>
  )
}

export default LabSolution
