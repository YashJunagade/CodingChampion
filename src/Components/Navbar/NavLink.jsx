/* eslint-disable react/prop-types */

import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavLink({ linkRoute, linkName }) {
  const location = useLocation()
  const isActive = location.pathname === linkRoute
  return (
    <>
      <li className="text-center md:mx-4 lg:mx-8 relative">
        <Link to={linkRoute}>
          <motion.div
            whileHover={{ backgroundColor: '#FF5001', color: 'white' }}
            animate={{
              color: isActive ? '#FF5001' : 'inherit',
            }}
            transition={{ duration: 0.2 }}
            className="px-2 py-2 hover:bg-accent hover:text-white hover:text-bold cursor-pointer rounded "
          >
            {linkName}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </Link>
      </li>
    </>
  )
}

export default NavLink
