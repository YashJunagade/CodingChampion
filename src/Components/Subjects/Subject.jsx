import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Subject({ subRoute, subName, imgLink }) {
  console.log(imgLink)
  console.log(subName)
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -10,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 10,
        },
      }}
    >
      <Link to={subRoute} className="mx-auto block">
        <motion.div
          className="flex flex-col h-44 w-32 bg-primary shadow-even-shadow  rounded-custom text-center sm:h-48 sm:w-36 lg:h-52 lg:w-40 mx-auto"
          whileHover={{
            boxShadow: '0px 0px 8px rgba(255, 80, 1, 0.2)',
          }}
          transition={{
            boxShadow: { duratoin: 0.2 },
          }}
        >
          <motion.img
            src={imgLink}
            alt="sub logo"
            className="w-[70%] object-cover rounded-t-custom m-auto"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          />
          <motion.h3
            className="font-bold text-primary rounded-b-custom text-center bg-black h-[35%] p-1 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {subName}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default Subject
