import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  Twitter,
  Trophy,
  Medal,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

const RankBadge = ({ rank }) => {
  const getBadgeProps = () => {
    switch (rank) {
      case 1:
        return {
          icon: Trophy,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-100',
          borderColor: 'border-yellow-500',
          label: '1st Place',
        }
      case 2:
        return {
          icon: Medal,
          color: 'text-gray-400',
          bgColor: 'bg-gray-100',
          borderColor: 'border-gray-400',
          label: '2nd Place',
        }
      case 3:
        return {
          icon: Award,
          color: 'text-amber-700',
          bgColor: 'bg-amber-100',
          borderColor: 'border-amber-700',
          label: '3rd Place',
        }
      default:
        return null
    }
  }

  const badgeProps = getBadgeProps()
  if (!badgeProps) return null

  const Icon = badgeProps.icon
  return (
    <motion.div
      className={`absolute -top-2 -right-2 ${badgeProps.bgColor} ${badgeProps.borderColor} border-2 rounded-full p-1.5`}
      whileHover={{ scale: 1.1, rotate: 12 }}
    >
      <Icon className={`w-4 h-4 ${badgeProps.color}`} />
      <span className="sr-only">{badgeProps.label}</span>
    </motion.div>
  )
}

const ProfileCard = ({ name, title, photoUrl, socialLinks }) => {
  return (
    <motion.div
      className="w-full max-w-[280px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-lg overflow-hidden m-4 transition-all duration-500 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-6 flex flex-col items-center">
        <motion.div
          className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full overflow-hidden shadow-xl"
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
            className="text-xl sm:text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{ scale: 1.2, color: '#ffd700' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p className="text-gray-200 mb-2 text-sm sm:text-base">
            {title}
          </motion.p>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="flex justify-center space-x-6">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const Icon =
              platform === 'twitter'
                ? Twitter
                : platform === 'github'
                  ? Github
                  : Linkedin
            const colorClass =
              platform === 'twitter'
                ? 'text-blue-400'
                : platform === 'github'
                  ? 'text-gray-800'
                  : 'text-blue-700'

            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colorClass} hover:scale-110`}
                whileHover={{ scale: 1.2, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

const ContributorRow = ({
  name,
  title,
  photoUrl,
  socialLinks,
  rank,
  contributions,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile View */}
      <div className="block sm:hidden">
        <div
          className="p-4 flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                <img
                  src={photoUrl}
                  alt={`${name}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <RankBadge rank={rank} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white">
                {name}
              </h3>
              <div className="flex gap-2">
                {Object.entries(socialLinks).map(([platform, url]) => {
                  const Icon =
                    platform === 'github'
                      ? Github
                      : platform === 'linkedin'
                        ? Linkedin
                        : Twitter
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 pb-4"
            >
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">
                  {title}
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                  {contributions} contributions
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="p-4 flex flex-row md:items-start items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-500">
                <img
                  src={photoUrl}
                  alt={`${name}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <RankBadge rank={rank} />
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {name}
              </h3>
              <span className="text-sm text-purple-600 dark:text-purple-400">
                ({contributions} contributions)
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">
              {title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const Icon =
                platform === 'github'
                  ? Github
                  : platform === 'linkedin'
                    ? Linkedin
                    : Twitter
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const MeetContributors = () => {
  const mainProfiles = [
    {
      name: 'Yash Junagade',
      title: 'Software Engineer & Tech enthusiast',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725769845/YashJunagade_inr9w4.jpg',
      socialLinks: {
        twitter: 'https://x.com/YashJunagade211',
        github: 'https://github.com/YashJunagade',
        linkedin: 'https://www.linkedin.com/in/yashjunagade/',
      },
    },
    {
      name: 'Dipak Jadhav',
      title: 'Software Engineer & Tech enthusiast',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725769845/DipakJadhav_ifogkt.png',
      socialLinks: {
        twitter: 'https://x.com/JustDipak',
        github: 'https://github.com/TheDevotion',
        linkedin: 'https://www.linkedin.com/in/dipak-jadhav-6b0738250/',
      },
    },
  ]

  const additionalContributors = [
    {
      name: 'Niranjan Majgaonkar',
      title: 'Full Stack Developer',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1730122152/niranjan_profile_pic_2_1_xdsxsz.jpg',
      description: 'Constributing in Roadmap Feature',
      socialLinks: {
        github: 'https://github.com/Niranjanmajgaonkar',
        linkedin: 'https://www.linkedin.com/in/niranjanmajgaonkar',
      },
      contributions: 11,
      rank: 1,
    },
    {
      name: 'Santosh Bhor',
      title: 'Java FullStack Developer',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1728277298/santosh_pic_xeppco.png',
      description: 'Contributing in DSA compilation and UI.',
      socialLinks: {
        github: 'https://github.com/sbhor007',
        linkedin: 'https://www.linkedin.com/in/santosh-bhor-a6436a327/',
      },
      contributions: 4,
      rank: 2,
    },
    {
      name: 'Nidhey Joshi',
      title: 'Web Developer',
      photoUrl:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1729237825/Nidhey_Joshi_Profile_Pic_cowvgh.jpg',
      description: 'Contributing in Roadmap and handing social media.',
      socialLinks: {
        github: 'https://github.com/NidheyJoshi',
        linkedin: 'https://www.linkedin.com/in/nidhey-joshi-15027b267',
      },
      contributions: 1,
      rank: 3,
    },
  ]

  return (
    <section className="py-8 sm:py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 dark:text-gray-300 text-gray-800"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Meet Our Brilliant Minds
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-center mb-12 sm:mb-16 text-gray-500 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The passionate developers behind this platform, dedicated to making
          your coding journey smoother and more exciting!
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 mb-16">
          {mainProfiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>

        {additionalContributors.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-2xl font-bold text-center mb-8 dark:text-gray-300 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Top Contributors
            </motion.h3>
            <div className="space-y-4">
              {additionalContributors.map((contributor, index) => (
                <ContributorRow key={index} {...contributor} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default MeetContributors
