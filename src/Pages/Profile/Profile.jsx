import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

function Profile() {
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true)
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
        } finally {
          setLoading(false)
        }
      } else {
        navigate('/login')
      }
    })

    return () => unsubscribe() // Cleanup subscription on unmount
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/login') // Redirect to login after sign out
    } catch (error) {
      toast.error('Error signing out.', { position: 'bottom-center' })
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>User Name: {userDetails.userName || 'No username set'}</p>
          <img
            src={`/src/assets/avatar/${userDetails.profilePic}`}
            alt="Profile"
          />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
    </>
  )
}

export default Profile
