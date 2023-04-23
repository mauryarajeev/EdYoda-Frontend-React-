import React, { useState } from 'react';


const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="home-page">
      <div className="dropdown">
        <button onClick={handleDropdownClick}>Homepage Dropdown</button>
        {dropdownOpen && (
          <ul>
            <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
            <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
            <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
          </ul>
        )}
      </div>
      <div className="selected-option">{selectedOption}</div>
      <div className="static-content">
        <h1 className="title">Data Scientist Program</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="cta">Enroll Now</button>
      </div>
    </div>
  );
};

export default HomePage;
