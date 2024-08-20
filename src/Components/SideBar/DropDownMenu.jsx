import { useState } from "react";
import NestedDropdown from "./NestedDropDown";
import "./DropDownMenu.css";

function DropDownMenu({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsibleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="CollapsibleMenu">
      <div className="CollapsibleMenu-header" onClick={toggleCollapsibleMenu}>
        <span>{menu.name}</span>
        <span className="arrow">{isOpen ? "▲ Up" : "▼ Down"}</span>
      </div>
      {isOpen && menu.years && (
        <div className="CollapibleMenu-content">
          {menu.years.map((year, index) => (
            <NestedDropdown
              key={index}
              title={year}
              subjects={menu.subjects[year]}
            />
          ))}
        </div>
      )}
      {isOpen && menu.title && (
        <div className="CollapibleMenu-content">
          {menu.title.map((data, index) => (
            <div className="nested-menu">
              <a key={index} href="#">
                {data}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
