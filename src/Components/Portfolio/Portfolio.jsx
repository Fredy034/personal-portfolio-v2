import './Portfolio.css'
import { usePageContext } from '../PageContext';

const Portfolio = () => {
  const { activePage } = usePageContext();

  return (
    <article className={`portfolio ${activePage === 'portfolio' ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <div className="call-to-action">
        <div className="call-text-container">
          <h3 className="h3">Do you have any project in mind?</h3>
          <p className="call-text">I can make it real, let&apos;s work together.</p>
        </div>
        <div className="call-social-container">
          <a href="https://www.linkedin.com/in/fredy-quintero" className="button-social">LinkedIn</a>
          <a href="mailto:fredy034@hotmail.com?Subject=I'm ineterested on working with you in a project" className="button-social">Hotmail</a>
        </div>
      </div>
      <div className="separator"></div>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active">All</button>
          </li>
          <li className="filter-item">
            <button>Web Design</button>
          </li>
          <li className="filter-item">
            <button>Web Development</button>
          </li>
          <li className="filter-item">
            <button>Mobile App</button>
          </li>
        </ul>
        <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">Select Category</div>
            <div className="select-icon">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button>All</button>
            </li>
            <li className="select-item">
              <button>Web Design</button>
            </li>
            <li className="select-item">
              <button>Web Development</button>
            </li>
            <li className="select-item">
              <button>Mobile App</button>
            </li>
          </ul>
        </div>
        <ul className="project-list">
          <li className="project-item active">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="fa-regular fa-eye"></i>
                </div>
                <img src="/images/project-1.jpg" alt="Finance" loading='lazy' />
              </figure>
              <h3 className="project-title">Finance</h3>
              <p className="project-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sit dolor doloremque magnam quo excepturi perspiciatis nisi eum incidunt omnis explicabo deleniti. Expedita sequi unde corrupti doloribus libero quasi consequatur.</p>
              <div className="project-category-container">
                <p className="project-category">Web Development</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Portfolio