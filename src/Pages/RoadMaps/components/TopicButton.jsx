import { motion } from 'framer-motion'

const TopicButton = ({ point, index, isAnimating, onSelect }) => (
  <div
    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
    style={{
      left: `${point.x}%`,
      top: `${point.y}%`,
    }}
  >
    <motion.button
      className="w-20 h-20 bg-white rounded-full shadow-even-shadow flex items-center justify-center cursor-pointer text-center"
      onClick={onSelect}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isAnimating}
    >
      <span className="text-sm font-bold">{point.topic}</span>
    </motion.button>
  </div>
)

export default TopicButton
