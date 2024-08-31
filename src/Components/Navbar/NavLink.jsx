/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function NavLink({ linkRoute, linkName }) {
  return (
    <>
      <li className="text-center  md:mx-4 lg:mx-8">
        <Link
          to={linkRoute}
          className="px-2 py-2 hover:bg-accent hover:text-white hover:text-bold cursor-pointer rounded transition ease-in-out duration-200"
        >
          {linkName}
        </Link>
      </li>
    </>
  )
}

export default NavLink
