import { div } from 'framer-motion/client'
import DropDownMenu from './DropDownMenu'

function SideBar() {
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
    <div className="relative z-40">
      <nav className="bg-primary2 text-black h-screen w-52 lg:w-60 overflow-y-auto transition-all duration-300 ease-in-out  fixed top-16 left-0 bottom-0">
        <div className="p-4 border-b border-accent ">
          <h2 className="text-xl font-semibold">Profile</h2>
        </div>
        <nav className="mt-4">
          {dropDownList.map((menu, index) => (
            <DropDownMenu key={index} menu={menu} />
          ))}
        </nav>
      </nav>
    </div>
  )
}

export default SideBar
