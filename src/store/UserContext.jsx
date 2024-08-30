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
          } else {
            toast.error('No user data found.', {
              position: 'bottom-center',
            })
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

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      setUserDetails(null)
    } catch (error) {
      toast.error('Error signing out.', { position: 'bottom-center' })
      console.error('Error signing out:', error)
    }
  }

  return (
    <UserContext.Provider value={{ userDetails, loading, handleSignOut }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
