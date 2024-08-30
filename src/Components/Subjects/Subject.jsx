import { Link } from 'react-router-dom'

function Subject({ subRoute, subName }) {
  return (
    <Link
      to={subRoute}
      className="mx-auto transition duration-200  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
    >
      <div className="flex flex-col h-44 w-32 bg-white shadow-even-shadow hover:shadow-accent  rounded-custom  text-center ">
        <img
          src="./src/assets/subLogo/Python.png"
          alt="sub logo"
          className="w-[70%] object-cover rounded-t-custom m-auto"
        />
        <h3 className="font-bold text-accent  text-center h-[35%] p-1">
          {subName}
        </h3>
      </div>
    </Link>
  )
}

export default Subject
