/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function FeaturesContainer({
  imgLink,
  featureTitle,
  featureDescription,
  pageRoute,
}) {
  return (
    <motion.div
      className="flex flex-col min-h-[260px] rounded-[15px] shadow-even-shadow overflow-hidden w-[72%] md:w-[90%] md:max-w-[360px] max-w-[320px] mx-auto"
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
        className=" rounded-t-custom bg-black"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={imgLink}
          alt="feature"
          className=" w-full h-36 rounded-t-custom object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <div className="p-2 flex flex-col h-full bg-white">
        <motion.h2
          className="items-center text-lg font-semibold text-black h-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {featureTitle}
        </motion.h2>
        <motion.p
          className=" text-sm text-secondary h-auto mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {featureDescription}
        </motion.p>

        <Link to={pageRoute} className="mt-auto text-center">
          <motion.button
            type="button"
            className="w-[97%] mb-1 rounded-md  bg-black px-2 py-2 font-semibold text-white shadow-sm"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--accent)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Try it &rarr;
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default FeaturesContainer
