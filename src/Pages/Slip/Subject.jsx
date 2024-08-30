import { Link } from 'react-router-dom'

function Subject({ subRoute, subName }) {
  return (
    <div>
      <Link to={subRoute}>
        <div className="flex flex-col h-48 w-32 bg-accent shadow-md  rounded-custom p-2  text-center">
          img
          <h3>{subName}</h3>
        </div>
      </Link>
    </div>
  )
}

export default Subject
