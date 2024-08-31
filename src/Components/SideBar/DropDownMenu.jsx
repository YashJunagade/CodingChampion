import { useState } from 'react'
import NestedDropdown from './NestedDropDown'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

function DropDownMenu({ menu }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapsibleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-accent last:border-b-0">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent transition-colors duration-200 rounded hover:text-primary"
        onClick={toggleCollapsibleMenu}
      >
        <span className="font-medium">{menu.name}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </div>
      {/* {isOpen && menu.years && ( */}
      {isOpen && (
        <div className="bg-primary py-2">
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
                className="block px-6 py-2 hover:bg-accent transition-colors duration-200 rounded hover:text-primary"
              >
                {data}
              </Link>
            ))}
        </div>
      )}
    </div>
  )
}

export default DropDownMenu
