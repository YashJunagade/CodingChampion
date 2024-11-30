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
import { Helmet } from 'react-helmet'
import GoogleAds from '../../src/GoogleAds'

const SlipList = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState(null)
  const [filterMarks, setFilterMarks] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [hoveredIndex, setHoveredIndex] = useState(null)

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
    return (
      <div className="md:mt-16">
        <Loader />
      </div>
    )
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
      const aNum = parseInt(a.slipId, 10)
      const bNum = parseInt(b.slipId, 10)
      return sortOrder === 'asc' ? aNum - bNum : bNum - aNum
    })

  const uniqueMarks = [
    ...new Set(
      subject.slips.flatMap((slip) => slip.questions.map((q) => q.marks))
    ),
  ]

  return (
    <>
      <Helmet>
        <title>
          {subject.subject} Slips BBACA BCA Slip Solution First Year Second Year
          Third Year BBACA BCA
        </title>
        <meta
          name="description"
          content="BBACA BCA bbaca bba ca bca Practical Slip Solution Labbook Solution First Year Second Year Third
              Year BBACA BCA SPPU University Coding Champion C DBMS RDBMS Web Technology data structure Big Data Php Cpp Angular JS Advance Php Node JS Core Java Python MongoDB Advance Java Android Programming Dot Net Framework"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1487916517080617"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div className="flex min-h-screen md:mt-16 md:ml-52 lg:ml-60">
        <div className="hidden md:inline relative">
          <SideBar />
        </div>
        <div className="flex-row p-4 lg:p8">
          <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
            {subject.subject} Slips
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <select
              value={filterMarks}
              onChange={(e) => setFilterMarks(e.target.value)}
              className="w-full px-8 py-2 m-4 md:mb-0 rounded-md border-white shadow-md  bg-accent text-white dark:bg-white dark:text-black text-center font-bold"
            >
              <option value="" className="bg-black hover:bg-accent">
                All Marks
              </option>
              {uniqueMarks.map((mark, index) => (
                <option key={index} value={mark} className="bg-black ">
                  {mark} marks
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
            {filteredAndSortedSlips.map((slip, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-t-custom shadow-even-shadow mt-4 bg-white"
              >
                <div
                  style={{ background: '#E2E2E2' }}
                  className="p-4 rounded-t-custom bg-lightGray text-black"
                >
                  <h2 className="text-xl font-semibold">
                    Slip No: {slip.slipId}
                  </h2>
                </div>
                <ul className="divide-y" style={{ background: '#E2E2E2' }}>
                  {slip.questions.map((question, qIndex) => (
                    <li
                      key={qIndex}
                      onMouseEnter={() => setHoveredIndex(`${index}-${qIndex}`)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        backgroundColor:
                          hoveredIndex === `${index}-${qIndex}`
                            ? '#E2E2E2'
                            : '#FFFFFF',
                        transition: 'background-color 0.2s ease',
                      }}
                      className="p-4 mt-2"
                    >
                      <Link
                        to={`/${subjectId}/${slip.slipId}/${question.questionId}`}
                        className="block"
                      >
                        <div className="md:flex justify-between h-full">
                          <div
                            style={style}
                            className="text-black mb-2"
                            dangerouslySetInnerHTML={{
                              __html: `Q. ${question.text}`,
                            }}
                          />
                          <span className="inline-block h-full text-sm px-2 py-2 font-semibold text-white bg-black rounded-full w-[15%]">
                            {question.marks} Marks
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SlipList

const style = {
  width: window.innerWidth >= 768 ? '90%' : '100%',
}
