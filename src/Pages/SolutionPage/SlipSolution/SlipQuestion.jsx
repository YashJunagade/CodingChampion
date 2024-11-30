import GoogleAds from '../../../GoogleAds'

function QuestionCom({ slipId, questionId, text, marks }) {
  return (
    // custom color here ( change when we have dark/light mode options)
    <div
      className="h-[100%] overflow-y-auto p-4 bg-moreWhite  dark:bg-[#1e1e1e] border-[2px] border-accent rounded-[10px]"
      style={{ color: 'black' }}
    >
      <div className="text-lg font-semibold mb-2 text-accent">
        Slip No : {slipId}
      </div>
      <div
        className="text-black dark:text-white mb-4 text-primary"
        dangerouslySetInnerHTML={{
          __html: `Q. ${text}`,
        }}
      />
      <div className="text-sm font-medium text-white inline-block bg-accent rounded px-2 py-1">
        {marks} Marks
      </div>
      <GoogleAds
        adSlot="7884444663"
        uniqueKey="SlipQuestionFromSolutionPage-attop"
        baseWidth={800}
        baseHeight={300}
      />
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1487916517080617"
          crossorigin="anonymous"
        ></script>
      </Helmet>
    </div>
  )
}

export default QuestionCom
