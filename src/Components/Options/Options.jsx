import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../../../services/i18next';
import './Options.css';
import LanguagesData from './optionsData';

const Options = () => {
  const getTheme = () => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;

    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    } else if (userPrefersDark) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const { t, i18n } = useTranslation();

  const translateLanguages = (data) => {
    return data.map((language) => {
      return {
        ...language,
        lang: language.lang[i18n.language],
      };
    });
  };

  const Languages = translateLanguages(LanguagesData);

  const [selectedValue, setSelectedValue] = useState('english');
  const [lastCliked, setLastClicked] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(getTheme());

  const icon =
    theme === 'dark' ? <i className='fa-regular fa-moon active'></i> : <i className='fa-regular fa-sun active'></i>;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const changeLanguage = async (language) => {
    let lng = language === 'english' ? 'en' : language === 'inglés' ? 'en' : 'es';
    await i18next.changeLanguage(lng);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    changeLanguage(value);
  };

  const handleFilterBtn = (event, value) => {
    setSelectedValue(value);
    changeLanguage(value);

    if (lastCliked) {
      lastCliked.classList.remove('active');
    }

    event.currentTarget.classList.add('active');
    setLastClicked(event.currentTarget);
  };

  useEffect(() => {
    if (theme !== undefined && theme !== null) {
      localStorage.setItem('theme', theme);
    }
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <aside className='options'>
      <button className='icon-box theme-switch' onClick={toggleTheme}>
        {icon}
      </button>
      <ul className='filter-list'>
        {Languages.map((language, index) => (
          <li key={index} className='filter-item'>
            <button
              className={`filter-btn ${selectedValue === language.lang.toLowerCase() ? 'active' : ''}`}
              onClick={(event) => handleFilterBtn(event, language.lang.toLowerCase())}
            >
              {language.lang}
            </button>
          </li>
        ))}
      </ul>
      <div className='filter-select-box'>
        <button
          className={`filter-select ${isDropdownOpen ? 'active' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className='select-value'>{selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)}</div>
          <div className='select-icon'>
            <i className='fa-solid fa-chevron-down'></i>
          </div>
        </button>
        <ul className='select-list' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {Languages.map((language, index) => (
            <li key={index} className='select-item'>
              <button
                className={`select-btn ${selectedValue === language.lang.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleSelect(language.lang.toLowerCase())}
              >
                {language.lang}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Options;
