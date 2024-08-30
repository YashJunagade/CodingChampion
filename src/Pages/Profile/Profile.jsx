// Profile.js
import React from 'react'
// Adjust the path accordingly
import { useUser } from '../../store/UserContext'
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
function Profile() {
  const { userDetails, loading } = useUser()
  const navigate = useNavigate()

  if (loading) {
    return <p>Loading...</p>
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      navigate('/login')
    } catch (error) {
      toast.error('Error signing out.', { position: 'bottom-center' })
      console.error('Error signing out:', error)
    }
  }
  console.log('ProfilePic in Profile:', userDetails.profilePic)

  return (
    <>
      {userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>User Name: {userDetails.userName || 'No username set'}</p>
          <img
            src={`/avatar/${userDetails.profilePic}`}
            alt="Profile"
            width={'200px'}
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
