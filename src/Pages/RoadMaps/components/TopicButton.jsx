import React from 'react'
import { motion } from 'framer-motion'

export const TopicButton = ({
  point,
  index,
  isAnimating,
  selectedFrameworks,
  onSelect,
}) => {
  const getDisplayText = () => {
    if (point.topic.endsWith('F')) {
      const baseTopic = point.topic.slice(0, -1)
      return selectedFrameworks[baseTopic] || baseTopic
    }
    return point.topic
  }

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
      style={{
        left: `${point.x}%`,
        top: `${point.y}%`,
      }}
    >
      <motion.button
        className="min-w-[140px] md:min-w-[180px] px-3 md:px-4 py-2 md:py-3 
                   bg-white rounded-lg shadow-md 
                 flex flex-col items-center 
                   justify-center gap-1 border "
        onClick={onSelect}
        whileHover={{
          boxShadow: '0px 5px 10px rgba(245, 21, 36, 0.3)',
          scale: 1.05,
          y: -10,
          transition: {
            stype: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
        transition={{
          boxShadow: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        disabled={isAnimating}
      >
        <span className="text-sm md:text-base font-bold text-gray-800 leading-tight">
          {getDisplayText()}
        </span>

        {/* added steps count  */}
        <span className="text-xs md:text-sm text-gray-500">
          Step {index + 1}
        </span>
      </motion.button>
    </div>
  )
}
