import React from 'react'
import { Link } from 'react-router-dom'
import Track from './components/Track'

const Roadmaps = () => {
  return (
    <div className="md:mt-16 m-2 p-8 bg-white dark:bg-black rounded-lg shadow-md min-h-screen">
      <section className="mb-12">
        <h2 className="dark:text-white mb-4 text-2xl font-bold">
          Web Development
        </h2>

        {/* line separation */}
        <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse my-8"></div>

        {/* tracks section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <Track
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            trackTitle="Frontend"
            pageRoute="/frontend"
          />
          <Track
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            trackTitle="Backend"
            pageRoute="/backend"
          />
          <Track
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            trackTitle="Fullstack"
            pageRoute="/fullstack"
          />
          <Track
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            trackTitle="DevOps"
            pageRoute="/devops"
          />
        </div>
      </section>

      <section>
        <h2 className="dark:text-white mb-4 text-2xl font-bold">
          Artificial Intelligence
        </h2>

        {/* line separation */}
        <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse my-8"></div>

        {/* tracks section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <Track
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            trackTitle="Data Science"
            pageRoute="/data-science"
          />
          <Track
            imgLink="https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg"
            trackTitle="Machine Learning"
            pageRoute="/machine-learning"
          />
        </div>
      </section>
    </div>
  )
}

export default Roadmaps
