import { Link } from 'react-router-dom'

function Subject({ subRoute, subName }) {
  return (
    <div>
      <Link to={subRoute}>
        <div className="flex flex-col h-60 w-40 bg-primary2 shadow-md  rounded px-4 py-6  text-center">
          {subName}
        </div>
      </Link>
    </div>
  )
}

export default Subject
