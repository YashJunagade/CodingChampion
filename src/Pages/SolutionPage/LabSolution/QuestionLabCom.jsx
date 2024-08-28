function QuestionCom({ assignmentNo, setName, questionNo, questionText }) {
  function findName(setNo) {
    let setname = "";
    if (setNo === 1) {
      setname = "A";
    } else if (setNo === 2) {
      setname = "B";
    } else if (setNo === 3) {
      setname = "C";
    }

    return setname;
  }

  return (
    <div
      className="preview-container"
      style={{
        maxHeight: "100%",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <div>Assignment No: {assignmentNo || "N/A"}</div>
      <div>Set: {findName(setName) || "N/A"}</div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            questionNo && questionText
              ? `Q ${questionNo}. ${questionText}`
              : "Question not available",
        }}
      />
    </div>
  );
}

export default QuestionCom;
