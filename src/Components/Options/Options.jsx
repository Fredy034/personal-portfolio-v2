import './Options.css'

const Options = () => {
  const theme = localStorage.getItem('theme');
  const themeDefault = theme === 'dark' ? 'dark' : 'light';

  const lang = 'en'

  return (
    <aside className="options">
      <button className="icon-box theme-switch">
        <i className={`fa-regular fa-moon ${themeDefault === 'dark' ? 'active' : ''}`}></i>
        <i className={`fa-regular fa-sun ${themeDefault === 'light' ? 'active' : ''}`}></i>
      </button>
      <ul className="filter-list">
          <li className="filter-item">
            <button className={`${lang === 'en' ? 'active' : ''}`}>English</button>
          </li>
          <li className="filter-item">
            <button className={`${lang === 'es' ? 'active' : ''}`}>Spanish</button>
          </li>
        </ul>
      <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">Select your Language</div>
            <div className="select-icon">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button>English</button>
            </li>
            <li className="select-item">
              <button>Spanish</button>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default Options