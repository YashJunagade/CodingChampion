import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './CurvedLines.css'

function NestedDropdown({ title, subjects, isLast }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname.startsWith(path)
  }

  return (
    <div className={`relative nested-item ${isLast ? 'last-item' : ''}`}>
      <div
        className={`flex items-center justify-between px-6 py-2 cursor-pointer hover:bg-accent transition-colors duration-200 rounded hover:text-white ${
          isOpen ? 'text-accent' : ''
        }`}
        onClick={toggleMenu}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="py-2 overflow-hidden"
          >
            <div className=" text-white pl-4 relative">
              {subjects.map((subject, index) => (
                <Link
                  key={index}
                  to={subject.link}
                  className={`block px-6 py-2 hover:bg-accent hover:text-white transition-colors duration-200 rounded ${
                    isActive(subject.link) ? 'text-accent' : ''
                  } ${index === subjects.length - 1 ? 'last-subject' : ''}`}
                >
                  {subject.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NestedDropdown
