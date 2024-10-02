import React, { useState, useRef } from 'react';
import '../App.css'; // Ensure to import the CSS for styles

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the dropdown is open
  const dropdownRef = useRef(null); // Ref to track the dropdown menu

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown open/close
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Drop Down Menu</button>
      {isOpen && (
        <ul ref={dropdownRef}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};
