import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SideBar from '../../src/Components/SideBar/SideBar'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../src/config/firebase'
import Loader from '../../src/Components/Loader/Loader'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

const LabList = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState(null)
  const [filterAssignment, setFilterAssignment] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const subjectDoc = await getDoc(doc(db, 'labSubjects', subjectId))
        if (subjectDoc.exists()) {
          setSubject(subjectDoc.data())
        } else {
          console.log('no such document!')
        }
      } catch (error) {
        console.error('error fetching document : ', error)
      }
    }

    fetchSubject()
  }, [subjectId])

  if (!subject) {
    return (
      <div className="md:mt-16">
        <Loader />
      </div>
    )
  }

  const filteredAndSortedAssignments = subject.assignments
    .filter(
      (assignment) =>
        filterAssignment === '' ||
        assignment.assignment.toString() === filterAssignment
    )
    .sort((a, b) => {
      const aNum = parseInt(a.assignment, 10)
      const bNum = parseInt(b.assignment, 10)
      return sortOrder === 'asc' ? aNum - bNum : bNum - aNum
    })

  const uniqueAssignments = [
    ...new Set(subject.assignments.map((assignment) => assignment.assignment)),
  ]

  const setName = (setNo) => {
    const setNames = ['A', 'B', 'C']
    return setNames[setNo - 1] || 'Unknown'
  }

  return (
    <>
      <Helmet>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1487916517080617`}
          crossOrigin="anonymous"
        />
        <script>
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-1487916517080617",
              enable_page_level_ads: true
            });
          `}
        </script>
        <title>
          {subject.subject} Labbook BBACA BCA Labbook Solution First Year Second
          Year Third Year BBACA BCA
        </title>
        <meta
          name="description"
          content="BBACA BCA bbaca bba ca bca Practical Slip Solution Labbook Solution First Year Second Year Third
              Year BBACA BCA SPPU University Coding Champion C DBMS RDBMS Web Technology data structure Big Data Php Cpp Angular JS Advance Php Node JS Core Java Python MongoDB Advance Java Android Programming Dot Net Framework"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-1487916517080617"
        ></meta>
      </Helmet>
      <div className="flex min-h-screen md:mt-16 md:ml-52 lg:ml-60 bg-offWhite dark:bg-black">
        <div className="hidden md:inline relative">
          <SideBar />
        </div>
        <div className="flex-grow p-4 lg:p8">
          <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
            {subject.subject} Labbook
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <select
              value={filterAssignment}
              onChange={(e) => setFilterAssignment(e.target.value)}
              className="w-full px-8 py-2 m-4 md:mb-0 rounded-md border-white shadow-md bg-accent text-white dark:bg-white dark:text-black text-center font-bold"
            >
              <option value="" className="bg-black hover:bg-accent">
                All Assignments
              </option>
              {uniqueAssignments.map((assignment, index) => (
                <option key={index} value={assignment} className="bg-black">
                  Assignment {assignment}
                </option>
              ))}
            </select>
            <motion.button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="bg-accent w-full md:w-60 px-4 py-2 rounded-md text-white font-bold m-4"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className=""
          >
            {filteredAndSortedAssignments.map((assignment, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-t-custom shadow-even-shadow mt-4 bg-white"
              >
                <div
                  style={{ background: '#A2A2A2' }}
                  className="p-4 rounded-t-custom bg-lightGray text-black"
                >
                  <h2 className="text-xl font-bold">
                    Assignment {assignment.assignment}
                  </h2>
                </div>
                {assignment.sets.map((set, setIndex) => (
                  <div
                    key={setIndex}
                    className="mt-2"
                    style={{ background: '#E2E2E2' }}
                  >
                    <h3 className="text-lg font-semibold p-2">
                      Set: {setName(set.set)}
                    </h3>
                    <ul className="divide-y">
                      {set.questions.map((question, qIndex) => (
                        <li
                          key={qIndex}
                          onMouseEnter={() =>
                            setHoveredIndex(`${index}-${setIndex}-${qIndex}`)
                          }
                          onMouseLeave={() => setHoveredIndex(null)}
                          style={{
                            backgroundColor:
                              hoveredIndex === `${index}-${setIndex}-${qIndex}`
                                ? '#E2E2E2'
                                : '#FFFFFF',
                            transition: 'background-color 0.2s ease',
                          }}
                          className="p-4 mt-2"
                        >
                          <Link
                            to={`/${subjectId}/${assignment.assignment}/${set.set}/${question.questionNo}`}
                            className="block"
                          >
                            <div
                              style={style}
                              className="text-black mb-2"
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
    </>
  )
}

export default LabList

const style = {
  width: window.innerWidth >= 768 ? '90%' : '100%',
}
