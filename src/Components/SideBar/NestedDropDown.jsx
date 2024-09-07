import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function NestedDropdown({ title, subjects }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (e) => {
    e.stopPropagation() // Prevent the parent menu from toggling
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        className="flex items-center justify-between px-6 py-2 cursor-pointer hover:bg-accent transition-colors duration-200 rounded hover:text-primary"
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
            className=" py-2 overflow-hidden"
          >
            <div className="bg-base3 text-white pl-8">
              {subjects.map((subject, index) => (
                <Link
                  key={index}
                  to={subject.link}
                  className="block px-6 py-2 hover:bg-accent hover:text-primary transition-colors duration-200 rounded"
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
