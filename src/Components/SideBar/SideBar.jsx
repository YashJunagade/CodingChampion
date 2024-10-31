import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import DropDownMenu from './DropDownMenu'

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const dropDownList = [
    {
      name: 'Slip Solutions',
      years: ['First Year', 'Second Year', 'Third Year'],
      subjects: {
        'First Year': [
          { name: 'C Programming', link: '/C Programming/slipList' },
          { name: 'DBMS', link: '/DBMS/slipList' },
          { name: 'Web Technology', link: '/Web Technology/slipList' },
          { name: 'RDBMS', link: '/RDBMS/slipList' },
        ],
        'Second Year': [
          { name: 'Data Structure', link: '/Data Structure/slipList' },
          { name: 'Big Data', link: '/Big Data/slipList' },
          { name: 'Php', link: '/Php/slipList' },
          { name: 'Angular JS', link: '/Angular JS/slipList' },
          { name: 'CPP', link: '/CPP/slipList' },
          { name: 'Advance Php', link: '/Advance Php/slipList' },
          { name: 'Node JS', link: '/Node JS/slipList' },
        ],
        'Third Year': [
          { name: 'Core Java', link: '/Core Java/slipList' },
          { name: 'Python', link: '/Python/slipList' },
          { name: 'MongoDB', link: '/MongoDB/slipList' },
          { name: 'Advance Java', link: '/Advance Java/slipList' },
          {
            name: 'Android Programming',
            link: '/Android Programming/slipList',
          },
          { name: 'Dot Net Framework', link: '/Dot Net Framework/slipList' },
        ],
      },
    },
    {
      name: 'Labbook Solutions',
      years: ['First Year', 'Second Year', 'Third Year'],
      subjects: {
        'First Year': [
          { name: 'C Programming', link: '/C Programming/labList' },
          { name: 'DBMS', link: '/DBMS/labList' },
          { name: 'Web Technology', link: '/Web Technology/labList' },
          { name: 'RDBMS', link: '/RDBMS/labList' },
        ],
        'Second Year': [
          { name: 'Data Structure', link: '/Data Structure/labList' },
          { name: 'Big Data', link: '/Big Data/labList' },
          { name: 'Php', link: '/Php/labList' },
          { name: 'Angular JS', link: '/Angular JS/labList' },
          { name: 'CPP', link: '/CPP/labList' },
          { name: 'Advance Php', link: '/Advance Php/labList' },
          { name: 'Node JS', link: '/Node JS/labList' },
        ],
        'Third Year': [
          { name: 'Core Java', link: '/Core Java/labList' },
          { name: 'Python', link: '/Python/labList' },
          { name: 'MongoDB', link: '/MongoDB/labList' },
          { name: 'Advance Java', link: '/Advance Java/labList' },
          { name: 'Android Programming', link: '/Android Programming/labList' },
          { name: 'Dot Net Framework', link: '/Dot Net Framework/labList' },
        ],
      },
    },
    {
      name: 'Roadmaps',
      years: ['Web Development', 'Artificial Intelligence'],
      subjects: {
        'Web Development': [
          { name: 'Frontend Development', link: '/roadmaps/frontend' },
          { name: 'Backend Development', link: '/roadmaps/backend' },
          { name: 'Full Stack Development', link: '/roadmaps/fullstack' },
          { name: 'DevOps', link: '/UnderContruction' },
        ],
        'Artificial Intelligence': [
          { name: 'Data Science', link: '/UnderContruction' },
          { name: 'Machine Learning', link: '/UnderContruction' },
        ],
      },
    },
    {
      name: 'DSA',
      title: [
        'Basics Logic',
        'Computer Fundamentals',
        'Bind 75',
        'Favorite 150',
      ],
    },
  ]

  return (
    <>
      {/* Hamburger icon for mobile */}
      <div className="md:hidden lg:hidden fixed top-2 left-2 z-50">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="dark:text-white text-black p-2"
          >
            <FaBars size={24} />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 sm:top-16 left-0 h-screen z-40 w-52 lg:w-60 text-black bg-moreWhite dark:bg-moreBlack dark:text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header Section */}
        <div className="relative py-6 border-b border-accent">
          <h2 className="text-xl font-bold text-center">
            <Link to={'/profile'}>Profile</Link>
          </h2>
          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 dark:text-white text-black md:hidden lg:hidden"
            >
              <FaTimes size={20} />
            </button>
          )}
        </div>

        {/* Menu Section - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-4 flex flex-col items-center w-full">
            {dropDownList.map((menu, index) => (
              <div key={index} className="w-full">
                <DropDownMenu menu={menu} closeSidebar={closeSidebar} />
              </div>
            ))}
          </div>
        </div>

        {/* Contribute Button - Fixed at bottom */}
        <div className="border-t border-accent py-4 px-4 mb-16">
          <Link
            to="https://github.com/YashJunagade/Unknown"
            target="_blank"
            className="flex items-center justify-center w-full py-2 px-4 hover:bg-accent transition-colors duration-200 rounded hover:text-primary"
          >
            <FaGithub size={24} />
            <span className="ml-2">Contribute</span>
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-30 md:hidden lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default SideBar
