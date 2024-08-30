import { useState } from 'react'
import Subject from './Subject'

function ExpandingDiv({ subjects, title }) {
  const [showSubjects, setShowSubjects] = useState(false)

  const toggleVisibility = () => {
    setShowSubjects(!showSubjects) // showing the subjects after clicked.
  }
  return (
    <>
      <div
        className="bg-primary w-[94%] mx-auto min-h-44 mt-8 px-2 py-4 rounded-custom cursor-pointer"
        onClick={toggleVisibility}
      >
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            showSubjects ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div
            className={`grid grid-cols-2 gap-4 gap-y-8 px-2 py-2 my-4 transition-transform duration-300 ease-in-out ${
              showSubjects ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            {subjects.map((subject, index) => (
              <Subject
                key={index}
                subRoute={`/${subject.sName}/slipList`}
                subName={subject.sName}
              />
            ))}
          </div>
        </div>
        {!showSubjects && (
          <div className="text-center">{title || 'Show Subjects'}</div>
        )}
      </div>
    </>
  )
}

export default ExpandingDiv
