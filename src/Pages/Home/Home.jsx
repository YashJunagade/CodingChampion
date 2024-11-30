import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Twitter, Github, Linkedin } from 'lucide-react'
import FeaturesContainer from './FeaturesContainer'
import Footer from '../../Components/Footer/Footer'
import MeetContributors from './MeetContributors'
import { Helmet } from 'react-helmet'
import GoogleAdSense from '../../GoogleAdSense'

const socialIcons = [
  { Icon: Twitter, color: 'text-blue-400', animation: 'animate-bounce' },
  { Icon: Github, color: 'text-gray-800', animation: 'animate-pulse' },
  { Icon: Linkedin, color: 'text-blue-700', animation: 'animate-bounce' },
]

const animations = [
  'animate-spin',
  'animate-ping',
  'animate-bounce',
  'animate-pulse',
]

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

const lastLineVarient = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 1, // delay for last line
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
      delay: 1.2,
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
  const [isLargeScreen, setIsLargeScreen] = useState(null)
  const [key, setKey] = useState(0)

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth > 540)
    setKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const renderHeading = () => {
    if (isLargeScreen === null) return null // while loading, return null

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${isLargeScreen ? 'large' : 'small'}-${key}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {isLargeScreen ? (
            <>
              <div className="flex-col text-black dark:text-white">
                <div>
                  <motion.span
                    className="sm:text-2xl md:text-3xl inline-block"
                    variants={itemVariants}
                  >
                    Crack Every{' '}
                    <span className="text-accent"> Slip,&nbsp; </span>
                  </motion.span>
                  <motion.span
                    className="sm:text-2xl md:text-3xl inline-block"
                    variants={itemVariants}
                  >
                    Master Every{' '}
                    <span className="text-accent"> Lab,&nbsp;</span>
                  </motion.span>
                  <motion.span
                    className="sm:text-2xl md:text-3xl inline-block"
                    variants={itemVariants}
                  >
                    Solve Every<span className="text-accent"> Problem:</span>
                  </motion.span>
                </div>
                <motion.div
                  className="text-2xl md:text-4xl sm:text-3xl sm:mt-2 relative inline-block"
                  variants={lastLineVarient}
                >
                  <motion.span className="inline-block">Become a </motion.span>
                  {['Coding ', 'Champion!'].map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mx-1 text-accent"
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
              </div>
            </>
          ) : (
            <>
              <motion.span
                className="text-xl block my-2  text-black dark:text-white"
                variants={itemVariants}
              >
                Crack Every <span className="text-accent "> Slip, </span>
              </motion.span>
              <motion.span
                className="text-xl block my-2  text-black dark:text-white"
                variants={itemVariants}
              >
                Master Every <span className="text-accent"> Lab, </span>
              </motion.span>
              <motion.span
                className="text-xl block my-2  text-black dark:text-white"
                variants={itemVariants}
              >
                Solve Every<span className="text-accent"> Problem:</span>
              </motion.span>
              <motion.div
                className="text-2xl md:text-3xl sm:mt-2 relative inline-block  text-black dark:text-white"
                variants={lastLineVarient}
              >
                <motion.span>Become a </motion.span>
                {['Coding ', 'Champion!'].map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mx-1 text-accent"
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
            </>
          )}
        </motion.div>
      </AnimatePresence>
    )
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
        <title>BBACA BCA Practical Slip Solution Labbook Solution</title>
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
      <div className="pb-24 md:px-8 max-w-[1200px] mx-auto md:mt-16">
        <motion.h1
          className="text-xl font-bold text-black text-center pt-2 pb-8 sm:pt-8 sm:pb-8 md:pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {renderHeading()}
        </motion.h1>
        <div className="flex flex-col sm:grid md:grid-cols-2 gap-y-8 lg:gap-y-12 md:mt-6">
          <FeaturesContainer
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/PracticalWide.jpeg_ag6v9z.jpg"
            featureTitle="Practical Slips"
            featureDescription="FY, SY and TY BBA(C.A.) practical slips with solutions"
            pageRoute="/slip"
          />
          <FeaturesContainer
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            featureTitle="Lab Book"
            featureDescription="FY, SY and TY BBA(C.A.) Lab book Assignments with solutions"
            pageRoute="/labbook"
          />
          <FeaturesContainer
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725819008/dsa_w2lzol.jpg"
            featureTitle="Data Structures & Algorithms"
            featureDescription="Practice your DSA skills with 1000+ selected questions"
            pageRoute="/dsa"
          />
          <FeaturesContainer
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725817925/Roadmap.jpeg_tljvul.jpg"
            featureTitle="Roadmap"
            featureDescription="Roadmap with Recommended courses and Youtube links"
            pageRoute="/roadmaps"
          />
        </div>
      </div>
      {/* <GoogleAdSense adSlot="3195881308" /> */}

      {/* Custom base size for laptop/desktop */}
      <GoogleAdSense
        adSlot="3195881308"
        baseWidth={800} // Set your desired laptop width
        baseHeight={400} // Set your desired laptop height
        className="custom-ad-class"
      />
      <MeetContributors />
      <Footer />
    </>
  )
}

export default Home
