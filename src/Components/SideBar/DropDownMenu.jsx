import React, { useState } from 'react'
import NestedDropdown from './NestedDropDown'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './CurvedLines.css'

function DropDownMenu({ menu }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleCollapsibleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname.startsWith(path)
  }

  return (
    <div className="menu-item">
      <div
        className={`flex items-center justify-between p-4 cursor-pointer hover:bg-accent transition-colors duration-200 rounded hover:text-white ${
          isOpen ? 'text-accent' : ''
        }`}
        onClick={toggleCollapsibleMenu}
      >
        <span className="font-semibold">{menu.name}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="menu-content"
          >
            <div className="relative">
              {menu.years &&
                menu.years.map((year, index) => (
                  <NestedDropdown
                    key={index}
                    title={year}
                    subjects={menu.subjects[year]}
                    isLast={index === menu.years.length - 1}
                  />
                ))}
              {menu.title &&
                menu.title.map((data, index) => (
                  <Link
                    key={index}
                    to="#"
                    className={`block px-6 py-2 hover:bg-accent transition-colors duration-200 rounded hover:text-white ${
                      isActive('#') ? 'text-accent' : ''
                    }`}
                  >
                    {data}
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropDownMenu
