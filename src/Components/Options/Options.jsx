import { useState } from 'react';
import './Options.css';

const Options = () => {
  const [selectedValue, setSelectedValue] = useState('english');
  const [lastCliked, setLastClicked] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Languages = ['English', 'Spanish'];

  const handleSelect = (value) => {
    setSelectedValue(value);
  }

  const handleFilterBtn = (event, value) => {
    setSelectedValue(value);

    if (lastCliked) {
      lastCliked.classList.remove('active');
    }

    event.currentTarget.classList.add('active');
    setLastClicked(event.currentTarget);
  }

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const icon = theme === 'dark' ? <i className="fa-regular fa-moon active"></i> : <i className="fa-regular fa-sun active"></i>;

  return (
    <aside className="options">
      <button className="icon-box theme-switch" onClick={toggleTheme}>
        {icon}
      </button>
      <ul className="filter-list">
        {Languages.map((language, index) => (
          <li key={index} className="filter-item">
            <button className={`filter-btn ${selectedValue === language.toLowerCase() ? 'active' : ''}`} onClick={(event) => handleFilterBtn(event, language.toLowerCase())} >
              {language}
            </button>
          </li>
        
        ))}
        </ul>
      <div className="filter-select-box">
          <button className={`filter-select ${isDropdownOpen ? 'active' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className="select-value">{selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)}</div>
            <div className="select-icon">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </button>
          <ul className="select-list" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {Languages.map((language, index) => (
              <li key={index} className="select-item">
                <button className={`select-btn ${selectedValue === language.toLowerCase() ? 'active' : ''}`} onClick={() => handleSelect(language.toLowerCase())} >
                  {language}
                </button>
              </li>
            ))}
          </ul>
        </div>
    </aside>
  )
}

export default Options