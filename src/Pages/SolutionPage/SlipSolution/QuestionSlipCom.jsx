function QuestionCom({ slipId, questionId, text, marks }) {
  return (
    <div className="h-full overflow-y-auto p-4 bg-primary shadow-even-shadow rounded-custom">
      <div className="text-lg font-semibold mb-2 text-secondary">
        Slip No : {slipId}
      </div>
      <div
        className="text-base mb-4 text-gray-800"
        dangerouslySetInnerHTML={{
          __html: `Q. ${text}`,
        }}
      />
      <div className="text-sm font-medium text-secondary2">{marks} Marks</div>
    </div>
  )
}

export default QuestionCom
