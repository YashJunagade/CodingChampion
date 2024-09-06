import { useState } from 'react'
import Subject from './Subject'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function ExpandingDiv({ subjects, title }) {
  const [showSubjects, setShowSubjects] = useState(false)
  const location = useLocation()

  const toggleVisibility = () => {
    setShowSubjects(!showSubjects) // showing the subjects after clicked.
  }

  const isLabbokRoute = location.pathname.includes('/labbook')

  // custom motion container Varients for smooth animations :
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
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
        duration: 0.2,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <motion.div
      className="bg-base1 w-[94%] mx-auto mt-11 shadow-even-shadow md:mt-16 md:mb-16 px-2 py-2 min-h-40 md:min-h-48 rounded-custom cursor-pointer hover:border-accent border-2"
      onClick={toggleVisibility}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
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
                <Subject
                  key={index}
                  subRoute={`/${subject.sName}/${isLabbokRoute ? 'labList' : 'slipList'}`}
                  subName={subject.sName}
                  imgLink={subject.imgLink}
                />
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
        >
          {title || 'Show Subjects'}
        </motion.div>
      )}
    </motion.div>
  )
}

export default ExpandingDiv
