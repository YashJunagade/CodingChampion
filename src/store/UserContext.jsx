// contexts/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'Users', user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            setUserDetails(docSnap.data())
          }
        } catch (error) {
          toast.error('Error fetching user data.', {
            position: 'bottom-center',
          })
        } finally {
          setLoading(false)
        }
      } else {
        setUserDetails(null)
        setLoading(false)
      }
    })

    return () => unsubscribe() // Cleanup subscription on unmount
  }, [])

  return (
    <UserContext.Provider value={{ userDetails, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
