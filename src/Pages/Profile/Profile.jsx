import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify' // Ensure to install and import toast if using it

function Profile() {
  const [userDetails, setUserDetails] = useState(null)
  const navigate = useNavigate()

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
            navigate('/login')
          }
        } catch (error) {
          toast.error('Error fetching user data.', {
            position: 'bottom-center',
          })
          navigate('/login')
        }
      } else {
        navigate('/login')
      }
    })

    return () => unsubscribe() // Cleanup subscription on unmount
  }, [navigate])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/login') // Redirect to login after sign out
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <>
      {userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>User Name: {userDetails.userName}</p>
          {userDetails.profilePic && (
            <img src={userDetails.profilePic} alt="Profile" />
          )}
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Profile
