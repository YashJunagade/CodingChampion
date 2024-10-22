import { motion } from 'framer-motion'

const TopicButton = ({
  point,
  index,
  isAnimating,
  selectedFrameworks,
  onSelect,
}) => {
  // Function to get display text based on topic and selected frameworks
  const getDisplayText = () => {
    // Check if the topic ends with 'F' (indicating it's a framework topic)
    if (point.topic.endsWith('F')) {
      // Get the base topic name without the 'F' suffix
      const baseTopic = point.topic.slice(0, -1) + ' Framework'
      // Return the selected framework for this topic if it exists, otherwise return the base topic
      return selectedFrameworks[baseTopic] || baseTopic
    }
    // If it's not a framework topic, return the original topic name
    return point.topic
  }

  return (
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
        <span className="text-sm font-bold">{getDisplayText()}</span>
      </motion.button>
    </div>
  )
}

export default TopicButton
