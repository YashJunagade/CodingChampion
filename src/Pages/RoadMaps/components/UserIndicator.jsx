import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useUser } from '../../../store/UserContext'

export const UserIndicator = ({ position }) => {
  const { userDetails, isLoggedIn } = useUser()
  const [isImageLoading, setIsImageLoading] = useState(true)

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

  return (
    <motion.div
      className="absolute mt-2 w-12 h-12 md:w-14 md:h-14 md:-mt-3 bg-accent rounded-full shadow-lg flex items-center justify-center border-2 border-white"
      animate={{
        left: `${position.x}%`,
        top: `${position.y + 3.8}%`, // change position here.
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
        zIndex: 10,
      }}
    >
      <span className="text-xs md:text-sm text-white font-bold">
        <img src={profilePicUrl} className="rounded-full" />
      </span>
    </motion.div>
  )
}
