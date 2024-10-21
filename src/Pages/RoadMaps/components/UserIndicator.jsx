import { motion } from 'framer-motion'

const UserIndicator = ({ position }) => (
  <motion.div
    className="absolute w-10 h-10 bg-yellow-400 rounded-full shadow-lg z-20 flex items-center justify-center"
    animate={{
      left: `${position.x}%`,
      top: `${position.y + 10}%`,
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
    }}
  >
    <span className="text-white font-bold">You</span>
  </motion.div>
)

export default UserIndicator
