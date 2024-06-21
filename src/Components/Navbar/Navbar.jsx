import { usePageContext } from '../PageContext';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const { activePage, setActivePage } = usePageContext();

  const Pages = [
    { id: 'about', label: t('navbar-option-1') },
    { id: 'curriculum', label: t('navbar-option-2') },
    { id: 'portfolio', label: t('navbar-option-3') },
    // { id: 'blog', label: t('navbar-option-4') },
    // { id: 'contact', label: t('navbar-option-5') },
  ];

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {Pages.map((page) => (
          <li key={page.id} className='navbar-item'>
            <button
              className={`navbar-link ${activePage === page.id.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleNavLinkClick(page.id.toLowerCase())}
            >
              {page.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
