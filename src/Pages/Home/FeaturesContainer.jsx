/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function FeaturesContainer({ featureTitle, featureDescription, pageRoute }) {
  return (
    <motion.div
      className="w-[60%] md:w-[100%] max-w-[420px] mx-auto"
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: {
          stype: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <motion.div
        className="flex flex-col min-h-[300px] rounded-custom shadow-even-shadow bg-white overflow-hidden"
        whileHover={{
          boxShadow: '0px 10px 20px rgba(255, 80, 1, 0.2)',
        }}
        transition={{
          boxShadow: { duration: 0.3 },
        }}
      >
        <motion.div
          className=" rounded-t-custom bg-accent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="test.webp"
            alt="feature"
            className=" w-full h-40 rounded-t-custom object-cover "
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className="p-2 flex flex-col h-full">
          <motion.h1
            className="items-center text-lg font-semibold text-black sm:h-10 md:h-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {featureTitle}
          </motion.h1>
          <motion.p
            className=" text-sm text-secondary  h-16 mb-2 md:h-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {featureDescription}
          </motion.p>

          <Link to={pageRoute} className="mt-auto">
            <motion.button
              type="button"
              className="w-full mb-2 rounded-md  bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm "
              whileHover={{
                scale: 1.05,
                backgroundColor: '#FF5001',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Try it &rarr;
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FeaturesContainer
