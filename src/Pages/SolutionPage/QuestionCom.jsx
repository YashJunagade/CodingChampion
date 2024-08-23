function QuestionCom({ slipId, questionId, text, marks }) {
  return (
    <div
      className="preview-container"
      style={{
        maxHeight: "100%",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <div>Slip No : {slipId}</div>
      <div>Question No : {questionId}</div>
      <div>Q.{text}</div>
      <div>{marks} marks</div>
    </div>
  );
}

export default QuestionCom;
