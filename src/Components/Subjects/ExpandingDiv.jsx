import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import Subject from './Subject'
import { ChevronDown, ChevronUp } from 'lucide-react'

function ExpandingDiv({ subjects, title }) {
  const [showSubjects, setShowSubjects] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const location = useLocation()
  const divRef = useRef(null)
  const controls = useAnimationControls()

  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        setDimensions({
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const toggleVisibility = () => {
    setShowSubjects(!showSubjects)
    controls.start({
      scale: [1, 0.98, 1],
      transition: { duration: 0.3, ease: 'easeInOut' },
    })
  }

  const isLabbokRoute = location.pathname.includes('/labbook')

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { type: 'spring', stiffness: 300, damping: 30, duration: 0.4 },
        opacity: { duration: 0.3, ease: 'easeInOut' },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { type: 'spring', stiffness: 300, damping: 30, duration: 0.4 },
        opacity: { duration: 0.3, ease: 'easeInOut' },
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  }

  const getYearWord = () => {
    if (title.includes('FY')) return 'First Year'
    if (title.includes('SY')) return 'Second Year'
    if (title.includes('TY')) return 'Third Year'
    return title
  }

  const yearWord = getYearWord()

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = (index, isLeft) => ({
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360,
      scale: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: index * 0.1,
        duration: 0.8,
      },
    },
  })

  const leftSubjects = subjects.slice(0, Math.ceil(subjects.length / 2))
  const rightSubjects = subjects.slice(Math.ceil(subjects.length / 2))

  return (
    <motion.div
      ref={divRef}
      className="bg-white dark:bg-black w-[94%] mx-auto mt-11 shadow-lg dark:shadow-gray-700/30 sm:mt-16 md:mb-16 px-4 py-4 min-h-40 sm:min-h-48 md:min-h-56 lg:min-h-64 rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700 relative overflow-hidden"
      onClick={toggleVisibility}
      whileHover={{ boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      animate={controls}
    >
      <AnimatePresence mode="wait">
        {showSubjects ? (
          <motion.div
            key="subjects"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden py-4"
          >
            <motion.div
              variants={contentVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 px-2 py-6 sm:py-8 md:py-10 my-4"
            >
              {subjects.map((subject, index) => (
                <motion.div key={index} custom={index} variants={childVariants}>
                  <Subject
                    subRoute={`/${subject.sName}/${isLabbokRoute ? 'labList' : 'slipList'}`}
                    subName={subject.sName}
                    imgLink={subject.imgLink}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-6 h-6 text-black dark:text-white" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="year-word"
            className="flex flex-col items-center justify-center h-full relative"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-center w-full">
              <div className="w-1/3 flex flex-col items-end justify-center">
                {leftSubjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    className="mb-2"
                    variants={imageVariants(index, true)}
                  >
                    <img
                      src={subject.imgLink || '/api/placeholder/48/48'}
                      alt={subject.sName}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="w-2/3 flex flex-col items-center justify-center z-10">
                <motion.h2
                  variants={titleVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white text-center mb-4"
                  style={{
                    fontSize: `${Math.min(dimensions.width / 12, dimensions.height / 3)}px`,
                  }}
                >
                  {yearWord}
                </motion.h2>
                <motion.div
                  variants={subtitleVariants}
                  className="text-lg sm:text-xl text-black dark:text-white text-center"
                >
                  Explore your academic journey
                </motion.div>
              </div>
              <div className="w-1/3 flex flex-col items-start justify-center">
                {rightSubjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    className="mb-2"
                    variants={imageVariants(index, false)}
                  >
                    <img
                      src={subject.imgLink || '/api/placeholder/48/48'}
                      alt={subject.sName}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-black dark:text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ExpandingDiv
