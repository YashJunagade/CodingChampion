import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import DropDownMenu from './DropDownMenu'
import './CurvedLines.css'

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
          {
            name: 'Web Technology',
            link: '/Web Technology/slipList',
          },
          { name: 'RDBMS', link: '/RDBMS/slipList' },
        ],
        'Second Year': [
          {
            name: 'Data Structure',
            link: '/Data Structure/slipList',
          },
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
          {
            name: 'Dot Net Framework',
            link: '/Dot Net Framework/slipList',
          },
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
          {
            name: 'Android Programming',
            link: '/Android Programming/labList',
          },
          {
            name: 'Dot Net Framework',
            link: '/Dot Net Framework/labList',
          },
        ],
      },
    },

    {
      name: 'RoadMaps',
      title: ['Frontend', 'Backend', 'Full Stack', 'DevOps'],
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
      {/* Hamburger icon for mobile (only visible on small screens) */}
      <div className="md:hidden lg:hidden  z-50">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="dark:text-white text:black p-2 mt-2"
          >
            <FaBars size={24} />
          </button>
        )}
      </div>

      {/* Sidebar (visible by default on md and lg, hidden on sm) */}

      {/* changing the width of sidebar to 52 by default until the  size issue gets fixed  */}
      <div
        className={`fixed md:mt-16 inset-y-0 left-0 z-40 w-52 lg:w-60 text-black bg-moreWhite dark:bg-moreBlack dark:text-white  border-accent dark:ext-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <nav className="h-full flex flex-col">
          <div className="py-8 border-b border-accent relative text-center pr-4">
            <h2 className="text-xl font-bold">
              <Link to={'/profile'}>Profile</Link>
            </h2>
            {isSidebarOpen && (
              <button
                onClick={toggleSidebar}
                className="absolute top-1/3 right-4 transform -translate-y-1/2 text-white sm:block md:hidden lg:hidden"
              >
                <FaTimes size={20} />
              </button>
            )}
          </div>
          <div className="flex-grow overflow-y-auto">
            <nav className="mt-4">
              {dropDownList.map((menu, index) => (
                <DropDownMenu
                  key={index}
                  menu={menu}
                  closeSidebar={closeSidebar}
                />
              ))}
            </nav>
          </div>
          <div className="border-t border-accent p-4">
            <Link
              to="https://github.com/YashJunagade/Unknown"
              target="_blank"
              className="w-full py-2 px-4 inline-block hover:bg-accent transition-colors duration-200 rounded hover:text-primary"
            >
              <div className="flex items-center">
                <FaGithub size={24} />
                <span className="ml-2">Contribute</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile (only visible on small screens) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:block md:hidden lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

export default SideBar
