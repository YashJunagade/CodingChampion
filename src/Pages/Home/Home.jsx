import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Twitter, Github, Linkedin } from 'lucide-react'
import FeaturesContainer from './FeaturesContainer'
import Footer from '../../Components/Footer/Footer'

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

const ProfileCard = ({ name, title, photoUrl, socialLinks }) => {
  return (
    <motion.div
      className="w-full max-w-sm bg-gradient-to-br lg:mx-24 from-purple-600 to-blue-500 rounded-2xl shadow-lg overflow-hidden m-4 mx-2 transition-all duration-500 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-6 flex flex-col items-center">
        <motion.div
          className="relative w-40 h-40 mb-4 rounded-full overflow-hidden shadow-xl"
          whileHover={{ scale: 1.1, rotate: 6 }}
        >
          <img
            className="object-cover w-full h-full"
            src={photoUrl}
            alt={`${name}'s profile`}
          />
        </motion.div>
        <div className="text-center z-10">
          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{ scale: 1.2, color: '#ffd700' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-gray-200 mb-4 transition-all duration-500 ease-in-out opacity-80 hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.p>
        </div>
      </div>
      <div className="bg-white p-4 transition-all duration-500 ease-in-out transform">
        <div className="flex justify-center space-x-8">
          {socialIcons.map(({ Icon, color, animation }, index) => (
            <motion.a
              key={index}
              href={socialLinks[index]}
              target="_blank"
              className={`${color} ${animation}`}
              whileHover={{ scale: 1.2, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-8 h-8" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const MeetContributors = () => {
  const profiles = [
    {
      name: 'Yash Junagade',
      title: 'Web Developer & Tech enthusiast',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725769845/YashJunagade_inr9w4.jpg',
      socialLinks: [
        'https://x.com/YashJunagade211',
        'https://github.com/YashJunagade',
        'https://linkedin.com/in/yashjunagade',
      ],
    },
    {
      name: 'Dipak Jadhav',
      title: 'Software Engineer & Tech enthusiast',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725769845/DipakJadhav_ifogkt.png',
      socialLinks: [
        'https://x.com/JustDipak',
        'https://github.com/TheDevotion',
        'https://www.linkedin.com/in/dipak-jadhav-6b0738250/',
      ],
    },
  ]

  return (
    <section className="py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 dark:text-gray-300 text-gray-800"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Meet Our Brilliant Minds
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-16 text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The passionate developers behind this platform, dedicated to making
          your coding journey smoother and more exciting!
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

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
      <MeetContributors />
      <Footer />
    </>
  )
}

export default Home
