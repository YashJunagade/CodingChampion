import React from 'react'
import { Link } from 'react-router-dom'
import Track from './components/Track'
import SideBar from '../../Components/SideBar/SideBar'

const Roadmaps = () => {
  const webDevTracks = [
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg',
      trackTitle: 'Frontend',
      pageRoute: '/roadmaps/frontend',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg',
      trackTitle: 'Backend',
      pageRoute: '/roadmaps/backend',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg',
      trackTitle: 'Fullstack',
      pageRoute: '/fullstack',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg',
      trackTitle: 'DevOps',
      pageRoute: '/devops',
    },
  ]

  const aiTracks = [
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg',
      trackTitle: 'Data Science',
      pageRoute: '/data-science',
    },
    {
      imgLink:
        'https://res.cloudinary.com/yashjunagade/image/upload/v1725818598/LabBookWide.jpeg_nqt9hr.jpg',
      trackTitle: 'Machine Learning',
      pageRoute: '/machine-learning',
    },
  ]

  const TrackSection = ({ title, tracks }) => (
    <section className="mb-16">
      <h2 className="dark:text-white text-2xl font-bold mb-6">{title}</h2>

      {/* Separator line */}
      <div className="w-full h-1 bg-accent my-6"></div>

      {/* Tracks container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {tracks.map((track, index) => (
          <div key={index} className="w-full max-w-[280px]">
            <Track {...track} />
          </div>
        ))}
      </div>
    </section>
  )

  return (
    <div className="mx-auto md:mt-10 p-4 md:p-8 bg-offWhite dark:bg-black rounded-lg shadow-md min-h-screen">
      <SideBar></SideBar>
      <div className="space-y-12">
        <TrackSection title="Web Development" tracks={webDevTracks} />
        <TrackSection title="Artificial Intelligence" tracks={aiTracks} />
      </div>
    </div>
  )
}

export default Roadmaps
