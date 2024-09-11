import React from 'react'
import { Link } from 'react-router-dom'

const Roadmaps = () => {
  return (
    <div className="md:mt-20 m-2 p-8 bg-white dark:bg-black rounded-lg shadow-md h-full md:h-screen">
      <h1 className="text-4xl font-bold text-accent mb-6">
        CodingChampion Roadmaps - Coming Soon!
      </h1>
      <p className="text-lg mb-6 dark:text-gray-300">
        We're excited to announce that we're working on comprehensive roadmaps
        to guide you through your BCA and BBACA journey. These roadmaps will
        help you navigate your studies and prepare for a successful career in
        tech.
      </p>

      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          What to expect from our roadmaps:
        </h2>
        <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
          <li>Semester-wise study guides</li>
          <li>Key topics and concepts to master</li>
          <li>Recommended resources and practice materials</li>
          <li>Career path suggestions based on your interests</li>
          <li>Industry trends and skills in demand</li>
        </ul>
      </div>

      <p className="text-lg mb-6 dark:text-gray-300">
        While we're putting the finishing touches on this feature, why not
        explore our other resources?
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <Link
          to="/slip"
          className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition duration-300"
        >
          Check out our Practical Slips
        </Link>
        <Link
          to="/labbook"
          className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition duration-300"
        >
          Explore our Lab Book
        </Link>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">
          Stay Updated
        </h3>
        <p className="dark:text-gray-300">
          Want to be notified when our roadmaps are ready? Sign up for our
          newsletter!
        </p>
        {/* Add a newsletter signup form here */}
      </div>
    </div>
  )
}

export default Roadmaps
