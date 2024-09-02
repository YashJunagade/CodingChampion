import React, { Suspense, useEffect, useRef, useState } from 'react'
import { db } from '../../../config/firebase'
import { useParams } from 'react-router-dom'
import CodeEditor from '../CodeEditor'
import { doc, getDoc } from 'firebase/firestore'
import QuestionSlipCom from './QuestionSlipCom'

const SlipSolution = () => {
  const [width, setWidth] = useState(100) // Initial width in percentage (changed from 40 to 100 for mobile screens)
  const panelRef = useRef(null)
  const { subjectId, slipId, questionId } = useParams()
  const [qId, setQId] = useState()
  const [marks, setMarks] = useState()
  const [text, setText] = useState()
  const [solution, setSolution] = useState()
  const [language, setLanguage] = useState()
  const [loading, setLoading] = useState(true)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true)
      const subjectDoc = await getDoc(doc(db, 'slipSubjects', subjectId))
      if (subjectDoc.exists()) {
        setLanguage(subjectDoc.data().language)
        const question =
          subjectDoc.data().slips[slipId - 1].questions[questionId - 1]

        setQId(question.questionId)
        setMarks(question.marks)
        setText(question.text)
        setSolution(
          question.sol ??
            'A solution for this coding question is not available at the moment.\n\t Our team is actively working on it.\n\t\tPlease check back later'
        )
      } else {
        console.log('No such document!')
      }
      setLoading(false)
    }

    fetchQuestion()
  }, [subjectId, slipId, questionId])

  // function to handle resizing
  const handleResize = () => {
    const newIsLargeScreen = window.innerWidth > 768
    setIsLargeScreen(newIsLargeScreen)
    setWidth(newIsLargeScreen ? 40 : 100)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    <div className="flex flex-col h-auto mx-auto px-4 py-4 min-h-screen">
      <div className="flex flex-col md:flex-row " ref={panelRef}>
        {/* question slip  */}
        <div
          className={`flex-shrink-0 ${isLargeScreen ? `w-${width}%` : 'w-full'} md:min-w-[20%]`}
          // overflow-y-visible : try this if flex-shrink gives problem
        >
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12  border-b-2 border-accent"></div>
            </div>
          ) : (
            <QuestionSlipCom
              slipId={slipId}
              questionId={qId}
              text={text}
              marks={marks}
            />
          )}
        </div>
        {isLargeScreen && (
          <div
            className="w-1 bg-primary2 cursor-col-resize"
            onMouseDown={handleMouseDown}
          />
        )}
        <div
          className={`overflow-hidden ${
            isLargeScreen ? `w-${100 - width}%` : 'w-full h-full mt-4 mb-4'
          } md:min-w-[20%]`}
        >
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full ">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
              </div>
            }
          >
            <CodeEditor language={language} solution={solution} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SlipSolution
