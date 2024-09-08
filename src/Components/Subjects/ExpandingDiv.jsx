import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Subject from './Subject'

function ExpandingDiv({ subjects, title }) {
  const [showSubjects, setShowSubjects] = useState(false)
  const location = useLocation()

  const toggleVisibility = () => {
    setShowSubjects(!showSubjects)
  }

  const isLabbokRoute = location.pathname.includes('/labbook')

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.6,
        },
        opacity: { duration: 0.3, ease: 'easeInOut' },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.6,
        },
        opacity: { duration: 0.3, ease: 'easeInOut' },
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
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
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  return (
    <motion.div
      className="bg-base1 bg-[#ffffff] w-[94%] mx-auto mt-11 shadow-even-shadow dark:bg-[#000000] sm:mt-16 md:mb-16 px-2 py-2 min-h-40 sm:min-h-48 rounded-custom cursor-pointer hover:border-accent border-2"
      onClick={toggleVisibility}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <AnimatePresence>
        {showSubjects && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
      {!showSubjects && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {title || 'Show Subjects'}
        </motion.div>
      )}
    </motion.div>
  )
}

export default ExpandingDiv
