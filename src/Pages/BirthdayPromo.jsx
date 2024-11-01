import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Sparkles, PartyPopper, Gift, Cake, X } from 'lucide-react'
import { useUser } from '../../src/store/UserContext'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      <div className="flex min-h-full items-center justify-center p-4">
        {children}
      </div>
    </div>
  )
}

const BirthdayPromo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Use the UserContext to get login status
  const { isLoggedIn } = useUser()

  const floatingIcons = [
    { Icon: PartyPopper, delay: 0, left: '10%' },
    { Icon: Gift, delay: 0.2, left: '20%' },
    { Icon: Sparkles, delay: 0.4, left: '80%' },
    { Icon: Cake, delay: 0.6, left: '90%' },
  ]

  useEffect(() => {
    // Check if user has seen the modal today using session storage instead
    const hasSeenModal = sessionStorage.getItem('birthdayPromoSeen')
    const today = new Date().toDateString()

    if (!hasSeenModal) {
      setIsOpen(true)
      sessionStorage.setItem('birthdayPromoSeen', today)
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours >= 0 ? newHours : 23,
          minutes: newMinutes >= 0 ? newMinutes : 59,
          seconds: newSeconds >= 0 ? newSeconds : 59,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handlePrimaryAction = () => {
    if (isLoggedIn) {
      window.location.href = '/roadmaps'
    } else {
      window.location.href = '/login'
    }
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, left }, index) => (
          <motion.div
            key={index}
            className="absolute top-0"
            style={{ left }}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, -15, 0],
              opacity: 1,
              scale: [1, 1.2, 1],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay,
              },
              opacity: { duration: 0.3, delay },
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay,
              },
            }}
          >
            <Icon className="w-5 h-5 text-accent" />
          </motion.div>
        ))}

        <div className="p-6">
          {/* Birthday Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1">
              <Cake className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm text-accent">
                Founder's (Yash) Birthday Special! 🎉
              </span>
            </div>
          </motion.div>

          {/* Timer Section */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <div className="flex gap-4">
              {[
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((time) => (
                <motion.div
                  key={time.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-accent text-white rounded px-2 py-1 min-w-[40px]">
                    {String(time.value).padStart(2, '0')}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                    {time.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <motion.h3
              className="font-semibold text-black dark:text-white flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              Free Access to All Roadmaps!
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            </motion.h3>

            {/* Benefits */}
            <motion.div
              className="flex justify-center gap-6 text-sm text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {['All Roadmaps', 'Future Updates', 'Early Access'].map(
                (benefit) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-accent animate-pulse">✨</span>
                    <span>{benefit}</span>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                onClick={handlePrimaryAction}
                className="px-6 py-2 bg-accent text-white rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoggedIn ? 'View New Features' : 'Login'}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Maybe Later
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </Modal>
  )
}

export default BirthdayPromo
