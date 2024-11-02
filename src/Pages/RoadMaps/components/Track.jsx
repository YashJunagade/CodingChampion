import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Track({ imgLink, trackTitle, pageRoute }) {
  return (
    <Link to={pageRoute} className="block w-full">
      <motion.div
        className="aspect-square w-full max-w-[240px] sm:max-w-[260px] mx-auto bg-white rounded-custom shadow-lg overflow-hidden"
        whileHover={{
          boxShadow: '0px 10px 20px rgba(245, 21, 36, 0.3)',
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
      >
        {/* // image container  */}
        <motion.div
          className="h-[75%] w-full rounded-t-custom overflow-hidden "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={imgLink}
            alt="feature"
            className=" w-full h-full object-cover rounded-t-custom"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className="h-[20%] flex items-center justify-center p-2">
          <motion.h2
            className="text-lg font-semibold  text-black truncate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {trackTitle}
          </motion.h2>
        </div>
      </motion.div>
    </Link>
  )
}

export default Track
