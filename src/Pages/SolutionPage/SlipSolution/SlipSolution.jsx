import React, { Suspense, useEffect, useRef, useState } from 'react'
import { db } from '../../../config/firebase'
import { useParams } from 'react-router-dom'
import CodeEditor from '../CodeEditor'
import { doc, getDoc } from 'firebase/firestore'
import QuestionSlipCom from './QuestionSlipCom'
import Loader from '../../../Components/Loader/Loader'
import { Resizable } from 're-resizable'

const SlipSolution = () => {
  const [width, setWidth] = useState(100) //  changed back to 50% for resizing logic

  const panelRef = useRef(null)
  const { subjectId, slipId, questionId } = useParams()
  const [qId, setQId] = useState()
  const [marks, setMarks] = useState()
  const [text, setText] = useState()
  const [solution, setSolution] = useState()
  const [language, setLanguage] = useState()
  const [loading, setLoading] = useState(true)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)
  const [questionSlipWidth, setQuestionSlipWidth] = useState('35%')

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

    // function to handle resizing
  }, [subjectId, slipId, questionId])

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseDown = (e) => {
    e.preventDefault()
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className="flex flex-col h-auto mx-auto px-2  py-2 min-h-screen bg-black md:mt-16 ">
      <div className="flex flex-col md:flex-row w-full h-full" ref={panelRef}>
        {/* question slip  div */}
        {/* // */}
        {isLargeScreen ? (
          <Resizable
            size={{ width: questionSlipWidth, height: 'auto' }}
            minWidth="20%"
            maxWidth="70%"
            enable={{ right: true }}
            onResizeStop={(e, direction, ref, d) => {
              setQuestionSlipWidth(ref.style.width)
            }}
          >
            <div className="h-full overflow-y-auto md:mr-1 md:rounded-lg">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <Loader />
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
          </Resizable>
        ) : (
          <div className="w-full md:w-[35%] md:mt-11">
            {loading ? (
              <div classname="flex justify-center items-center h-full">
                <Loader />
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
        )}

        {/* //question slip div ends  */}

        {isLargeScreen && (
          <div
            className="w-4 cursor-col-resize"
            onMouseDown={handleMouseDown}
          />
        )}

        {/* // code editor div */}
        <div
          className={`overflow-y-auto ${
            isLargeScreen ? `w-[${100 - width}]%` : 'w-full h-screen mt-6 mb-2'
          } md:w-[80%] md:h-screen md:flex-grow`}
        >
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full">
                <Loader />
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
