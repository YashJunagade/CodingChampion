import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import { auth, db } from '../config/firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
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
      userName: user.displayName || user.email.split('@')[0],
      profilePic: `${Math.floor(Math.random() * 11) + 1}.jpeg`,
    }

    try {
      await setDoc(userRef, defaultUserData, { merge: true })
      return defaultUserData
    } catch (error) {
      console.error('Error creating user document:', error)
      toast.error('Error creating user profile.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      return null
    }
  }

  const updateProfilePic = useCallback(async (picName) => {
    if (!auth.currentUser) return

    const userRef = doc(db, 'Users', auth.currentUser.uid)
    try {
      await updateDoc(userRef, { profilePic: picName })
      setUserDetails((prev) => ({ ...prev, profilePic: picName }))
      toast.success('Profile picture updated successfully.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } catch (error) {
      console.error('Error updating profile picture:', error)
      toast.error('Error updating profile picture.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
    }
  }, [])

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
            position: 'bottom-right',
            autoClose: 3000,
          })
          setUserDetails(null)
        }
      } else {
        setIsLoggedIn(false)
        setUserDetails(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = useMemo(
    () => ({
      userDetails,
      loading,
      isLoggedIn,
      updateProfilePic,
    }),
    [userDetails, loading, isLoggedIn, updateProfilePic]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
