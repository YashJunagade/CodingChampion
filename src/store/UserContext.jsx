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

const profilePicContainer = [
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552109/1_e5x60h.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552109/2_waioan.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552109/3_xzky8n.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552109/4_nvmpvq.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552109/5_geek0f.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552109/6_k3o1wj.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552110/7_uharyc.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552110/8_twqbsh.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552110/9_yuwpyy.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552110/10_j892oj.jpg',
  'https://res.cloudinary.com/yashjunagade/image/upload/v1725552110/11_trvpva.jpg',
]

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const createOrUpdateUserDocument = async (user) => {
    const userRef = doc(db, 'Users', user.uid)
    try {
      const docSnap = await getDoc(userRef)
      if (!docSnap.exists()) {
        const defaultUserData = {
          uid: user.uid, // Add the UID here
          email: user.email,
          userName: user.displayName || user.email.split('@')[0],
          profilePic:
            profilePicContainer[
              Math.floor(Math.random() * profilePicContainer.length)
            ],
        }
        await setDoc(userRef, defaultUserData)
        console.log('New user document created:', defaultUserData)
        return defaultUserData
      } else {
        const existingData = docSnap.data()
        // Ensure UID is included in existing data
        if (!existingData.uid) {
          await updateDoc(userRef, { uid: user.uid })
          existingData.uid = user.uid
        }
        console.log('Existing user document found:', existingData)
        return existingData
      }
    } catch (error) {
      console.error('Error in createOrUpdateUserDocument:', error)
      toast.error('Error managing user profile.', {
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
          const userData = await createOrUpdateUserDocument(user)
          setUserDetails(userData)
          console.log('User data set:', userData)
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
