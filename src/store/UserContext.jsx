import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setLoading(true)
      if (user) {
        setIsLoggedIn(true)
        try {
          const docRef = doc(db, 'Users', user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            setUserDetails(docSnap.data())
          } else {
            console.warn('User authenticated but no Firestore document found')
            setUserDetails(null)
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
          toast.error('Error fetching user data.', {
            position: 'bottom-center',
          })
          setUserDetails(null)
        }
      } else {
        setIsLoggedIn(false)
        setUserDetails(null)
      }
      setLoading(false)
    })

    return () => unsubscribe() // Cleanup subscription on unmount
  }, [])

  return (
    <UserContext.Provider value={{ userDetails, loading, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
