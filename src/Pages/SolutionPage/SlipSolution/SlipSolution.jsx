import React, { Suspense, useEffect, useRef, useState } from 'react';
import './SlipSolution.css';
import { db } from '../../../config/firebase';
import { useParams } from 'react-router-dom';
import Navbar from '../../Home/Navbar';
import CodeEditor from '../CodeEditor';
import { doc, getDoc } from 'firebase/firestore';
import QuestionSlipCom from './QuestionSlipCom';

const SlipSolution = () => {
  const [width, setWidth] = useState(40); // Initial width in percentage
  const panelRef = useRef(null);
  const { subjectId, slipId, questionId } = useParams();
  const [qId, setQId] = useState();
  const [marks, setMarks] = useState();
  const [text, setText] = useState();
  const [solution, setSolution] = useState();
  const [language, setLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      const subjectDoc = await getDoc(doc(db, 'slipSubjects', subjectId));
      if (subjectDoc.exists()) {
        setLanguage(subjectDoc.data().language);
        const question =
          subjectDoc.data().slips[slipId - 1].questions[questionId - 1];

        setQId(question.questionId);
        setMarks(question.marks);
        setText(question.text);
        setSolution(
          question.sol ??
            'Currently there is no solution for this Question\n\t Our team is working on it \n\t\t try after some time...'
        );
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchQuestion();
  }, [subjectId, slipId, questionId]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const panelLeft = panelRef.current.getBoundingClientRect().left;
    const newWidth =
      ((e.clientX - panelLeft) / panelRef.current.offsetWidth) * 100;

    // Set minimum and maximum widths to prevent panels from disappearing
    if (newWidth > 10 && newWidth < 90) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="codeEditor" ref={panelRef}>
        <div className="panel" style={{ width: `${width}%` }}>
          {loading ? (
            <div>Loading Question...</div>
          ) : (
            <QuestionSlipCom
              slipId={slipId}
              questionId={qId}
              text={text}
              marks={marks}
            />
          )}
        </div>
        <div className="resizer" onMouseDown={handleMouseDown} />
        <div
          className="panel"
          style={{ width: `calc(100% - ${width}% - 10px)` }}
        >
          <Suspense fallback={<div>Loading Editor...</div>}>
            <CodeEditor language={language} solution={solution} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SlipSolution;
