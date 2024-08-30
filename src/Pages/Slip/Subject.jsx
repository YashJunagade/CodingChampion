import { Link } from 'react-router-dom'

function Subject({ subRoute, subName }) {
  return (
    <Link
      to={subRoute}
      className="mx-auto transition duration-200  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
    >
      <div className="flex flex-col h-48 w-32 bg-accent shadow-even-shadow hover:shadow-accent  rounded-custom  text-center ">
        <img
          src=""
          alt="sub logo"
          className="w-full h-[70%] object-cover bg-white rounded-t-custom"
        />
        <h3 className="font-bold text-white text-center p-2">{subName}</h3>
      </div>
    </Link>
  )
}

export default Subject
