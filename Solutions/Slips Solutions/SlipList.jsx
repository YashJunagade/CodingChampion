import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../src/Components/Loader/Loader'
import SideBar from '../../src/Components/SideBar/SideBar'
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../../src/config/firebase'
import { motion } from 'framer-motion'

const SlipList = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState(null)
  const [filterMarks, setFilterMarks] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const subjectDoc = await getDoc(doc(db, 'slipSubjects', subjectId))
        if (subjectDoc.exists()) {
          setSubject(subjectDoc.data())
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error('Error fetching document:', error)
      }
    }

    fetchSubject()
  }, [subjectId])

  if (!subject) {
    return <Loader />
  }

  const filteredAndSortedSlips = subject.slips
    .map((slip) => ({
      ...slip,
      questions: slip.questions.filter(
        (q) => filterMarks === '' || q.marks.toString() === filterMarks
      ),
    }))
    .filter((slip) => slip.questions.length > 0)
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.slipId - b.slipId
      } else {
        return b.slipId - a.slipId
      }
    })

  const uniqueMarks = [
    ...new Set(
      subject.slips.flatMap((slip) => slip.questions.map((q) => q.marks))
    ),
  ]

  return (
    <div className="flex min-h-screen bg-primary">
      <div className="hidden md:inline relative">
        <SideBar />
      </div>
      <div className="flex-grow p-4 lg:p8">
        <h1 className="text-3xl font-bold mb-6 text-black">
          {subject.subject} Slips
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <select
            value={filterMarks}
            onChange={(e) => setFilterMarks(e.target.value)}
            className="w-full sm:w-48 p-2 mb-4 sm:mb-0 rounded-md border border-primary2"
          >
            <option value="">All Marks</option>
            {uniqueMarks.map((mark, index) => (
              <option key={index} value={mark}>
                {mark} marks
              </option>
            ))}
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded hover:bg-accent transition-colors duration-300"
          >
            Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className=""
        >
          {filteredAndSortedSlips.map((slip, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-custom overflow-hidden shadow-even-shadow mt-4"
            >
              <div className="p-4 bg-secondary2 text-black">
                <h2 className="text-xl font-semibold">
                  Slip No: {slip.slipId}
                </h2>
              </div>
              <ul className="divide-y divide-primary2">
                {slip.questions.map((question, qIndex) => (
                  <li
                    key={qIndex}
                    className="p-4 bg-primary2 mt-2 hover:bg-accent transition-colors duration-200"
                  >
                    <Link
                      to={`/${subjectId}/${slip.slipId}/${question.questionId}`}
                      className="block"
                    >
                      <div
                        className="text-black mb-2"
                        dangerouslySetInnerHTML={{
                          __html: `Q. ${question.text}`,
                        }}
                      />
                      <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-accent rounded-full">
                        {question.marks} Marks
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SlipList
