import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavLink from '../../Components/Navbar/NavLink'
import { useUser } from '../../store/UserContext'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'

// Modal Component
const ProfileModal = React.memo(({ userName, onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
      <div className="p-4">
        <p className="font-semibold">Hi, {userName}!</p>
      </div>
      <div className="border-t border-gray-200"></div>
      <div className="p-4">
        <Link
          to="/profile"
          className="block px-4 py-2 hover:bg-gray-100 rounded-md"
        >
          Profile
        </Link>
        <button
          onClick={onLogout}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  )
})

const Navbar = React.memo(() => {
  const { userDetails, isLoggedIn } = useUser()
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const modalRef = useRef(null)

  // Memoize the profile picture URL to prevent unnecessary recalculations
  const profilePicUrl = useMemo(() => {
    return userDetails?.profilePic
      ? `/avatar/${userDetails.profilePic}?t=${new Date().getTime()}`
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
    <nav className="w-full h-14 bg-primary flex justify-between items-center px-4 md:px-6">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="">
        <ul className="sm:flex hidden font-semibold">
          <NavLink linkRoute="/" linkName="Home" />
          <NavLink linkRoute="/slip" linkName="Practical Slips" />
          <NavLink linkRoute="/labbook" linkName="Lab Book" />
          <NavLink linkRoute="/roadmaps" linkName="Roadmaps" />
          <NavLink linkRoute="/dsa" linkName="DSA" />
        </ul>
      </div>
      <div className="flex justify-between items-center relative">
        {isLoggedIn ? (
          <div
            className="h-10 w-10 rounded-full relative cursor-pointer"
            onClick={handleProfileClick}
          >
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            )}
            <img
              src={profilePicUrl}
              alt="Profile"
              className={`${isImageLoading ? 'hidden' : 'block'} h-full w-full rounded-full`}
              onLoad={handleImageLoad}
            />
            {isModalOpen && (
              <div ref={modalRef}>
                <ProfileModal
                  userName={userDetails?.userName || 'User'}
                  onLogout={handleLogout}
                />
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-accent px-2 py-2 rounded-md text-primary font-bold hover:text-primary hover:bg-black transition ease-in-out duration-200">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
})

export default Navbar
