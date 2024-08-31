import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react'
import { auth, db } from '../config/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const createUserDocument = async (user) => {
    const userRef = doc(db, 'Users', user.uid)
    const defaultUserData = {
      email: user.email,
      profilePic: `${Math.floor(Math.random() * 11) + 1}.jpeg`, // Profile picture logic
    }

    try {
      await setDoc(userRef, defaultUserData, { merge: true })
      return defaultUserData
    } catch (error) {
      console.error('Error creating user document:', error)
      toast.error('Error creating user profile.', {
        position: 'bottom-center',
      })
      return null
    }
  }

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
            console.warn('No document found. Creating one...')
            const newUserData = await createUserDocument(user)
            setUserDetails(newUserData)
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

  const value = useMemo(
    () => ({
      userDetails,
      loading,
      isLoggedIn,
    }),
    [userDetails, loading, isLoggedIn]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
