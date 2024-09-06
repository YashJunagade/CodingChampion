import { useState } from 'react'
import NestedDropdown from './NestedDropDown'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function DropDownMenu({ menu }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapsibleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent transition-colors duration-200 rounded hover:text-white"
        onClick={toggleCollapsibleMenu}
      >
        <span className="font-medium"> {menu.name}</span>
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
            className="bg-font3 overflow-hidden"
          >
            <div className="">
              {menu.years &&
                menu.years.map((year, index) => (
                  <NestedDropdown
                    key={index}
                    title={year}
                    subjects={menu.subjects[year]}
                  />
                ))}
              {menu.title &&
                menu.title.map((data, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="block px-6 py-2 hover:bg-accent transition-colors duration-200 rounded hover:text-white"
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
