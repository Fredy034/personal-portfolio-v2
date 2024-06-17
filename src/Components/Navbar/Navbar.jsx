import { usePageContext } from '../PageContext';
import './Navbar.css';

const Navbar = () => {
  const { activePage, setActivePage } = usePageContext();

  // const Pages = ['About', 'Curriculum', 'Portfolio', 'Blog', 'Contact'];
  const Pages = ['About', 'Curriculum', 'Portfolio'];

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {Pages.map((page) => (
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