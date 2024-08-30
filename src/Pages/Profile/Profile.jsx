import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [userDetails, setUserDetails] = useState(null)
  const navigate = useNavigate()

  async function fetchUserData() {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, 'Users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setUserDetails(docSnap.data())
        console.log(docSnap.data())
      } else {
        toast.error(error.message, {
          position: 'bottom-center',
        })
        navigate('/login')
      }
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      {userDetails ? (
        <div>
          <p>first Name{userDetails.fName}</p>
          <p>{userDetails.lName}</p>
          <img src={userDetails.profilePic} />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  )
}

export default Profile
