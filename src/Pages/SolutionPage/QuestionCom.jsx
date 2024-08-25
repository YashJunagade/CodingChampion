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
      <div
        dangerouslySetInnerHTML={{
          __html: `Q. ${text}`,
        }}
      />
      <div>{marks} marks</div>
    </div>
  );
}

export default QuestionCom;
