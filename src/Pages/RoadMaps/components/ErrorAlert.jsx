const ErrorAlert = ({ message, type = 'error' }) => {
  const styles = {
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`${styles[type]} border px-4 py-3 rounded relative`}
        role="alert"
      >
        <strong className="font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)}:
        </strong>
        <span className="block sm:inline"> {message}</span>
      </div>
    </div>
  )
}

export default ErrorAlert
