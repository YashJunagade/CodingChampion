import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Track({ imgLink, trackTitle, pageRoute }) {
  return (
    <Link to={pageRoute} className="mt-auto text-center">
      <motion.div
        className="flex flex-col min-h-[200px] sm:min-h-[280px] rounded-[15px] shadow-even-shadow overflow-hidden w-[62%] md:w-[70%] md:max-w-[280px] max-w-[280px] mx-auto sm:mx-0 bg-white"
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
        <motion.div
          className="rounded-t-custom"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={imgLink}
            alt="feature"
            className=" w-full h-full rounded-t-custom object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className=" flex flex-col h-full bg-white">
          <motion.h2
            className="items-center pt-2 text-lg font-semibold  text-black"
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
