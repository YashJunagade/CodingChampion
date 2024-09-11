import React from 'react'
import { Link } from 'react-router-dom'

const Dsa = () => {
  return (
    <div className="md:mt-10 p-8 bg-white dark:bg-black rounded-lg shadow-md h-full md:h-screen">
      <h1 className="text-4xl font-bold text-accent mb-6">
        Data Structures and Algorithms - Coming Soon!
      </h1>
      <p className="text-lg mb-6 dark:text-gray-300">
        We're working hard to bring you a comprehensive DSA resource tailored
        for BCA and BBACA students. This section will help you master the
        fundamentals of Data Structures and Algorithms, crucial for your
        academic success and future career in tech.
      </p>

      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          What to expect in our DSA section:
        </h2>
        <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
          <li>
            In-depth explanations of key data structures (arrays, linked lists,
            trees, graphs, etc.)
          </li>
          <li>
            Step-by-step tutorials on essential algorithms (sorting, searching,
            dynamic programming, etc.)
          </li>
          <li>Practice problems with solutions and explanations</li>
          <li>Time and space complexity analysis</li>
          <li>Implementation examples in popular programming languages</li>
          <li>Tips for DSA interviews and competitive programming</li>
        </ul>
      </div>

      <p className="text-lg mb-6 dark:text-gray-300">
        While we're finalizing this section, here are some resources to get you
        started with DSA:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <a
          href="https://www.geeksforgeeks.org/data-structures/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition duration-300 text-center"
        >
          GeeksforGeeks DSA
        </a>
        <a
          href="https://leetcode.com/explore/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition duration-300 text-center"
        >
          LeetCode Problems
        </a>
      </div>

      <p className="text-lg mb-6 dark:text-gray-300">
        In the meantime, why not check out our other resources to support your
        studies?
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <Link
          to="/slip"
          className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition duration-300"
        >
          Practical Slips
        </Link>
        <Link
          to="/labbook"
          className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition duration-300"
        >
          Lab Book
        </Link>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">
          Stay Updated
        </h3>
        <p className="dark:text-gray-300">
          Want to be notified when our DSA section is ready? Sign up for our
          newsletter!
        </p>
        {/* Add a newsletter signup form here */}
      </div>
    </div>
  )
}

export default Dsa
