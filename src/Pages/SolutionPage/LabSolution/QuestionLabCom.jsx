function QuestionLabCom({ assignmentNo, setName, questionNo, questionText }) {
  function findName(setNo) {
    let setname = ''
    if (setNo === 1) {
      setname = 'A'
    } else if (setNo === 2) {
      setname = 'B'
    } else if (setNo === 3) {
      setname = 'C'
    }

    return setname
  }

  return (
    <div
      className="h-[100%] overflow-y-auto p-4 bg-moreWhite dark:bg-[#1e1e1e] border-[2px] border-accent rounded-[10px]"
      style={{ color: 'black' }}
    >
      <div className="text-lg font-semibold mb-2 text-accent">
        Assignment No: {assignmentNo || 'N/A'}
      </div>
      <div className="text-base mb-2 text-primary">
        Set: {findName(setName) || 'N/A'}
      </div>
      <div
        className="text-black dark:text-white mb-4 text-primary"
        dangerouslySetInnerHTML={{
          __html:
            questionNo && questionText
              ? `Q ${questionNo}. ${questionText}`
              : 'Question not available',
        }}
      />
    </div>
  )
}

export default QuestionLabCom
