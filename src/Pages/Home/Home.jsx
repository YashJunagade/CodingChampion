import FeaturesContainer from './FeaturesContainer'
import Footer from '../../Components/Footer/Footer'
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const wordVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: i * 0.1,
    },
  }),
}

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      delay: 1.5,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

function Home() {
  return (
    <>
      <div className="pb-24 md:px-8 max-w-[1200px] mx-auto">
        <motion.h1
          className="text-xl font-bold text-black text-center pt-4 pb-6 sm:pt-6 sm:pb-8 md:pb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-xl sm:text-3xl  block"
            variants={itemVariants}
          >
            Crack Every <span className="text-accent"> Slip, </span> Master
            Every <span className="text-accent"> Lab:</span>
          </motion.span>
          <motion.div
            className="text-xl sm:text-2xl mt-2 relative inline-block"
            variants={itemVariants}
          >
            <motion.span variants={itemVariants}>Become a </motion.span>
            {['Coding ', 'Champion!'].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block m-[1px] text-accent"
                variants={wordVariants}
                custom={index}
              >
                {word}{' '}
              </motion.span>
            ))}
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
              variants={underlineVariants}
            />
          </motion.div>
        </motion.h1>
        <div className="flex flex-col sm:grid md:grid-cols-2 gap-y-8 lg:gap-y-12">
          <FeaturesContainer
            featureTitle="Practical Slips"
            featureDescription="FY, SY and TY BBA(C.A.) practical slips with solutions"
            pageRoute="/slip"
          />
          <FeaturesContainer
            featureTitle="Lab Book"
            featureDescription="FY, SY and TY BBA(C.A.) Lab book Assignments with solutions"
            pageRoute="/labbook"
          />
          <FeaturesContainer
            featureTitle="Data Structures & Algorithms"
            featureDescription="Practice your DSA skills with 1000+ selected questions"
            pageRoute="/dsa"
          />
          <FeaturesContainer
            featureTitle="Roadmap"
            featureDescription="Roadmap with Recommended courses and Youtube links"
            pageRoute="/roadmaps"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
