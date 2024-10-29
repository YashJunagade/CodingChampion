import React from 'react'

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 md:p-8 dark:bg-black dark:text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        This Roadmap is Under Construction
      </h1>
      <p className="text-base md:text-lg mb-6 text-center">
        Our team is consistently working on it. Please check back after some
        time!
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button
          className="w-full md:w-auto px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-300"
          onClick={() => navigateTo('/frontend')}
        >
          Check out Frontend Roadmap
        </button>
        <button
          className="w-full md:w-auto px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-300"
          onClick={() => navigateTo('/backend')}
        >
          Check out Backend Roadmap
        </button>
        <button
          className="w-full md:w-auto px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-300"
          onClick={() => navigateTo('/fullstack')}
        >
          Check out Fullstack Roadmap
        </button>
      </div>
    </div>
  )
}

export default UnderConstruction
