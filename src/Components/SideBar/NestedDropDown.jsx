import React, { useState } from "react";

function NestedDropdown({ title, subjects }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent the parent menu from toggling
    setIsOpen(!isOpen);
  };

  return (
    <div className="nested-dropdown">
      <a onClick={toggleMenu}>
        {title}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </a>
      {isOpen && (
        <div className="nested-menu">
          {subjects.map((subject, index) => (
            <a key={index} href="#">
              {subject}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NestedDropdown;
