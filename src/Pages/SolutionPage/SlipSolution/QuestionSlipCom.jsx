function QuestionCom({ slipId, questionId, text, marks }) {
  return (
    // custom color here ( change when we have dark/light mode options)
    <div className="h-full overflow-y-auto p-4 bg-[#1e1e1e]">
      <div className="text-lg font-semibold mb-2 text-accent">
        Slip No : {slipId}
      </div>
      <div
        className="text-base mb-4 text-primary"
        dangerouslySetInnerHTML={{
          __html: `Q. ${text}`,
        }}
      />
      <div className="text-sm font-medium text-primary2">{marks} Marks</div>
    </div>
  )
}

export default QuestionCom
