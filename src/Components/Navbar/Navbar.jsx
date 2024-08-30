import { useNavigate } from 'react-router-dom'
import NavLink from '../../Components/Navbar/NavLink'
import { useUser } from '../../store/UserContext'
import { useState, useEffect } from 'react'

function Navbar() {
  const { userDetails, loading } = useUser()
  const [isImageLoading, setIsImageLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (userDetails && userDetails.profilePic) {
      setIsImageLoading(true)
    }
  }, [userDetails])

  const handleImageLoad = () => {
    setIsImageLoading(false)
  }

  // Use default profile picture if userDetails.profilePic is not available
  const profilePicUrl = userDetails?.profilePic
    ? `/avatar/${userDetails.profilePic}`
    : ''

  return (
    <nav className="w-full h-14 bg-primary flex justify-between items-center px-4 md:px-6">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="">
        <ul className="sm:flex hidden font-semibold">
          <NavLink linkRoute="/" linkName="Home" />
          <NavLink linkRoute="/slip" linkName="Practical Slips" />
          <NavLink linkRoute="/labbook" linkName="Lab Book" />
          <NavLink linkRoute="/roadmaps" linkName="Roadmaps" />
          <NavLink linkRoute="/dsa" linkName="DSA" />
        </ul>
      </div>
      <div className="flex justify-between items-center">
        {userDetails && userDetails.profilePic ? (
          <div className="h-10 w-10 rounded-full relative">
            <a href="/profile">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              )}
              <img
                src={profilePicUrl}
                alt="Profile"
                className={`${isImageLoading ? 'hidden' : 'block'} h-full w-full rounded-full`}
                onLoad={handleImageLoad}
              />
            </a>
          </div>
        ) : (
          loading && (
            <a href="/login">
              <button
                className={`${loading ? 'hidden' : 'block'}bg-accent px-2 py-2 rounded-md text-primary font-bold hover:text-primary hover:bg-black transition ease-in-out duration-200`}
              >
                Login
              </button>
            </a>
          )
        )}
      </div>
    </nav>
  )
}

export default Navbar
