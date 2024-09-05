import React, { useState, useEffect } from 'react'
import { useUser } from '../../store/UserContext'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/SideBar/SideBar'

function Profile() {
  const { userDetails, loading, isLoggedIn, updateProfilePic } = useUser()
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPic, setSelectedPic] = useState(userDetails?.profilePic || '')

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    if (userDetails) {
      setSelectedPic(userDetails.profilePic)
    }
  }, [userDetails])

  if (loading) {
    return <p>Loading...</p>
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      navigate('/login')
    } catch (error) {
      toast.error('Error signing out.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      console.error('Error signing out:', error)
    }
  }

  const handlePicSelect = async (picName) => {
    await updateProfilePic(picName)
    setSelectedPic(picName)
    setModalOpen(false)
  }

  return (
    <div className="md:flex w-full h-full">
      <Sidebar></Sidebar>
      <div className="p-4">
        {userDetails ? (
          <>
            <p>Email: {userDetails.email}</p>
            <p>User Name: {userDetails.userName || 'No username set'}</p>
            <img
              src={`${selectedPic}?t=${new Date().getTime()}`}
              alt="Profile"
              className="w-48 h-48 cursor-pointer rounded-full"
              onClick={() => setModalOpen(true)}
            />
            <button
              onClick={handleSignOut}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign Out
            </button>

            {modalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg relative">
                  <span
                    className="absolute top-2 right-2 text-xl cursor-pointer"
                    onClick={() => setModalOpen(false)}
                  >
                    &times;
                  </span>
                  <h2 className="text-lg font-semibold mb-4">
                    Select Profile Picture
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {[
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
                    ].map((picName) => (
                      <img
                        key={picName}
                        src={`${picName}`}
                        alt={picName}
                        onClick={() => handlePicSelect(picName)}
                        className="w-24 h-24 cursor-pointer border-2 border-gray-300 rounded-[50%] hover:border-blue-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>No user details available.</p>
        )}
      </div>
    </div>
  )
}

export default Profile
