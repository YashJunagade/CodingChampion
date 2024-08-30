import NavLink from '../../Components/Navbar/NavLink'
import { useUser } from '../../store/UserContext'

function Navbar() {
  const { userDetails } = useUser()

  return (
    <nav className="w-full h-14 bg-primary flex justify-between items-center px-4 md:px-6">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="">
        <ul className="sm:flex hidden font-semibold ">
          <NavLink linkRoute="/home" linkName="Home" />
          <NavLink linkRoute="/slip" linkName="Practical Slips" />
          <NavLink linkRoute="/labbook" linkName="Lab Book" />
          <NavLink linkRoute="/roadmaps" linkName="Roadmaps" />
          <NavLink linkRoute="/dsa" linkName="DSA" />
        </ul>
      </div>
      <div className="flex justify-between">
        {userDetails && userDetails.profilePic ? (
          <div className="h-10 w-10 rounded-full">
            <img
              src={`/src/assets/avatar/${userDetails.profilePic}`}
              alt="Profile"
            />
          </div>
        ) : (
          <a href="/login">
            <button className="bg-accent px-2 py-2 rounded-md text-primary font-bold hover:text-primary hover:bg-black transition ease-in-out duration-200">
              Login
            </button>
          </a>
        )}
      </div>
    </nav>
  )
}

export default Navbar
