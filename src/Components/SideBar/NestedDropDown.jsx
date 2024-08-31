import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
      {isOpen && (
        <div className="bg-primary pl-8">
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
      )}
    </div>
  )
}

export default NestedDropdown
