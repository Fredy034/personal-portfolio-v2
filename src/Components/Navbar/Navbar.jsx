import { usePageContext } from '../PageContext';
import './Navbar.css';

const Navbar = () => {
  const { activePage, setActivePage } = usePageContext();

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['About', 'Curriculum', 'Portfolio', 'Blog', 'Contact'].map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${activePage === page.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleNavLinkClick(page.toLowerCase())}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar