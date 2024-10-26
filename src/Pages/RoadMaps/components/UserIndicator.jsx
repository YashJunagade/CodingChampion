import React from 'react'
import { motion } from 'framer-motion'

export const UserIndicator = ({ position }) => (
  <motion.div
    className="absolute w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg flex items-center justify-center border-2 border-white"
    animate={{
      left: `${position.x}%`,
      top: `${position.y + 8}%`, // change position here.
    }}
    initial={false}
    transition={{
      type: 'spring',
      stiffness: 70,
      damping: 15,
      mass: 1.2,
    }}
    style={{
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
    }}
  >
    <span className="text-xs md:text-sm text-white font-bold">You</span>
  </motion.div>
)
