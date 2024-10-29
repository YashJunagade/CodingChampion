import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NavLink from '../../Components/Navbar/NavLink'
import { useUser } from '../../store/UserContext'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from './Switch'
import SideBar from '../SideBar/SideBar'
import { matchPath } from 'react-router-dom'

// Modal Component
const ProfileModal = React.memo(({ userName, onLogout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-[50] hover:shadow-sm hover:shadow-accent  text-black"
    >
      <div className="p-4 z-50">
        <p className="font-semibold">Hi, {userName}!</p>
      </div>
      <div className="border-t border-gray-200"></div>
      <div className="p-4">
        <Link to="/profile">
          <motion.button
            className="block w-full text-left px-4 py-2 hover:bg-accent rounded-md z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Profile
          </motion.button>
        </Link>
        <motion.button
          onClick={onLogout}
          className="block w-full text-left px-4 py-2 hover:bg-accent rounded-md z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </div>
    </motion.div>
  )
})

const Navbar = React.memo(() => {
  const { userDetails, isLoggedIn } = useUser()
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const modalRef = useRef(null)
  const location = useLocation()

  // Array of routes where the sidebar should not appear
  const noSidBarRoutes = [
    '/roadmaps',
    '/slip',
    '/labbook',
    '/:subjectId/slipList',
    '/:subjectId/labList',
    '/profile',
  ]

  // Function to check if the current route matches any of the no-sidebar routes
  const shouldDisplaySideBar = !noSidBarRoutes.some((route) =>
    matchPath(route, location.pathname)
  )

  const profilePicUrl = useMemo(() => {
    return userDetails?.profilePic
      ? `${userDetails.profilePic}?t=${new Date().getTime()}`
      : 'default-avatar.png'
  }, [userDetails?.profilePic])

  useEffect(() => {
    if (userDetails?.profilePic) {
      setIsImageLoading(true)
    }
  }, [userDetails?.profilePic])

  const handleImageLoad = useCallback(() => {
    setIsImageLoading(false)
  }, [])

  const handleProfileClick = () => {
    setIsModalOpen((prev) => !prev)
  }

  const handleLogout = async () => {
    try {
      await auth.signOut()
      toast.success("Come back later, I'm waiting!", {
        position: 'bottom-right',
        autoClose: 3000,
      })
      navigate('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }

    setIsModalOpen(false)
  }

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
      }, 0)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <div className="relative z-40">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-14 md:h-16 bg-offWhite dark:bg-black dark:text-white text-black flex justify-between items-center px-4 
        md:px-6 md:fixed top-0 left-0 right-0"
      >
        <div className="flex">
          {!shouldDisplaySideBar && (
            <div className="">
              <SideBar />
              {/* SideBar will only render if it's not the homepage */}
            </div>
          )}
          <div className="w-40 pt-1 ml-8 md:ml-0">
            <Link to="/">
              <img
                className="hidden dark:block"
                src="https://res.cloudinary.com/yashjunagade/image/upload/v1725779658/DarkModeLogo_if19sr.svg"
                alt="CodingChampion logo"
                width={200}
              />
              <img
                className="dark:hidden"
                src="https://res.cloudinary.com/yashjunagade/image/upload/v1725779657/LightModeLogo_b4g7mj.svg"
                alt="CodingChampion logo"
                width={200}
              />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ul className="md:flex hidden font-semibold">
            <NavLink linkRoute="/" linkName="Home" />
            <NavLink linkRoute="/slip" linkName="Practical Slips" />
            <NavLink linkRoute="/labbook" linkName="Lab Book" />
            <NavLink linkRoute="/roadmaps" linkName="Roadmaps" />
            <NavLink linkRoute="/dsa" linkName="DSA" />
          </ul>
        </motion.div>

        <div className="flex justify-between items-center relative ">
          <div className="w-[120px] h-10 flex justify-end items-center">
            <div className="mr-4 md:mr-6 lg:mr-8">
              <Switch />
            </div>
            {isLoggedIn ? (
              <motion.div
                className="h-10 w-10 rounded-full relative cursor-pointer"
                onClick={handleProfileClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isImageLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
                  </motion.div>
                )}
                <motion.img
                  key={profilePicUrl} // Add this line to force re-render when URL changes
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isImageLoading ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  src={profilePicUrl}
                  alt="Profile"
                  className={`${isImageLoading ? 'hidden' : 'block'} h-full w-full rounded-full`}
                  onLoad={handleImageLoad}
                />
                <AnimatePresence>
                  {isModalOpen && (
                    <div ref={modalRef}>
                      <ProfileModal
                        userName={userDetails?.userName || 'User'}
                        onLogout={handleLogout}
                      />
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <Link to="/login">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-accent md:px-4 px-3 py-1 md:py-2 rounded-md text-white  font-semibold md:font-bold"
                >
                  Login
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  )
})

export default Navbar
