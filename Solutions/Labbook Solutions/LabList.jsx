import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SideBar from "../../src/Components/SideBar/SideBar"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../src/config/firebase"
import Loader from "../../src/Components/Loader/Loader"
import { motion } from "framer-motion"

// this comment is for reference: changin Name from SlipList to LabList :
// import LabList from '../Solutions/Labbook Solutions/LabList'

const LabList = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState(null)
  const [filterAssignment, setFilterAssignment] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const subjectDoc = await getDoc(doc(db, "labSubjects", subjectId))
        if (subjectDoc.exists()) {
          setSubject(subjectDoc.data())
        } else {
          console.log("no such document!")
        }
      } catch (error) {
        console.error("error fetching document : ", error)
      }
    }

    fetchSubject()
  }, [subjectId])

  if (!subject) {
    return <Loader />
  }

  const filteredAndSortedAssignments = subject.assignments
    .filter(
      (assignment) =>
        filterAssignment === "" ||
        assignment.assignment.toString() === filterAssignment
    )
    .sort((a, b) => {
      // assignment was a string converting it to no. to sort

      const aNum = parseInt(a.assignment, 10)
      const bNum = parseInt(b.assignment, 10)
      if (sortOrder === "asc") {
        return aNum - bNum
      } else {
        return bNum - aNum
      }
    })

  const uniqueAssignments = [
    ...new Set(subject.assignments.map((assignment) => assignment.assignment)),
  ]

  const setName = (setNo) => {
    const setNames = ["A", "B", "C"]
    return setNames[setNo - 1] || "Unknown"
  }

  return (
    <div className='flex min-h-screen bg-primary'>
      <div className='hidden md:inline relative'>
        <SideBar />
      </div>
      <div className='flex-grow p-4 lg:p8'>
        <h1 className='text-3xl; font-bold mb-6 text-black'>
          {subject.subject} Labbook
        </h1>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
          <select
            value={filterAssignment}
            onChange={(e) => setFilterAssignment(e.target.value)}
            className='w-full sm:w-48 p-2 mb-4 sm:mb-0 rounded-md border border-primary2'
          >
            <option value=''>All Assignments</option>
            {uniqueAssignments.map((assignment, index) => (
              <option key={index} value={assignment}>
                Assignment {assignment}
              </option>
            ))}
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className='w-full sm:w-auto px-4 py-2 bg-black text-white rounded hover:bg-accent transition-colors duration-300'
          >
            Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className=''
        >
          {filteredAndSortedAssignments.map((assignment, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className='rounded-custom overflow-hidden shadow-even-shadow mt-4'
            >
              <div className='p-4 bg-secondary2 text-black'>
                <h2 className='text-xl font-semibold'>
                  Assignment {assignment.assignment}
                </h2>
              </div>
              {assignment.sets.map((set, setIndex) => (
                <div key={setIndex} className='p-4 bg-primary2 mt-2'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Set: {setName(set.set)}
                  </h3>
                  <ul className='divide-y divide-primary2'>
                    {set.questions.map((question, qIndex) => (
                      <li
                        key={qIndex}
                        className='py-2 hover:bg-accent transition-colors duration-200'
                      >
                        <Link
                          to={`/${subjectId}/${assignment.assignment}/${set.set}/${question.questionNo}`}
                          className='block'
                        >
                          <div
                            className='text-black mb-2'
                            dangerouslySetInnerHTML={{
                              __html: `Q${question.questionNo}. ${question.questionText}`,
                            }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LabList
