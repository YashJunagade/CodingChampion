// Profile.js
import React from 'react'
// Adjust the path accordingly
import { useUser } from '../../store/UserContext'
function Profile() {
  const { userDetails, loading, handleSignOut } = useUser()

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
