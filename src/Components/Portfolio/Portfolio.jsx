import { useState } from 'react';
import { usePageContext } from '../PageContext';
import './Portfolio.css';
import { ArchiveData, ProjectsData } from './portfolioData';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();

  const [selectedValue, setSelectedValue] = useState('all');
  const [lastCliked, setLastClicked] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isArchiveActive, setIsArchiveActive] = useState(false);

  const toggleArchive = () => {
    setIsArchiveActive(!isArchiveActive);
  };

  const Categories = ['All', 'Web Development', 'Mobile Development', 'Desktop Development'];

  const handleSelect = (value) => {
    setSelectedValue(value);
    filterFunc(value);
  };

  const filterFunc = (selectedValue) => {
    return ProjectsData.map((project) => {
      if (selectedValue === 'all' || project.category.map((c) => c.toLowerCase()).includes(selectedValue)) {
        return { ...project, active: true };
      } else {
        return { ...project, active: false };
      }
    });
  };

  const handleFilterBtn = (event, value) => {
    setSelectedValue(value);

    if (lastCliked) {
      lastCliked.classList.remove('active');
    }

    event.currentTarget.classList.add('active');
    setLastClicked(event.currentTarget);
  };

  const filteredProjects = filterFunc(selectedValue);

  return (
    <article className={`portfolio ${activePage === 'portfolio' ? 'active' : ''}`}>
      <header>
        <h2 className='h2 article-title'>{t('portfolio-title')}</h2>
      </header>
      <div className='call-to-action'>
        <div className='call-text-container'>
          <h3 className='h3'>{t('portfolio-call-title')}</h3>
          <p className='call-text'>{t('portfolio-call-text')}</p>
        </div>
        <div className='call-social-container'>
          <a href='https://www.linkedin.com/in/fredy-quintero' className='button-social'>
            LinkedIn
          </a>
          <a
            href="mailto:fredy034@hotmail.com?Subject=I'm ineterested on working with you in a project"
            className='button-social'
          >
            Hotmail
          </a>
        </div>
      </div>
      <div className='separator'></div>
      <section className='projects'>
        <ul className='filter-list'>
          {Categories.map((category, index) => (
            <li key={index} className='filter-item'>
              <button
                className={`filter-btn ${selectedValue === category.toLowerCase() ? 'active' : ''}`}
                onClick={(event) => handleFilterBtn(event, category.toLowerCase())}
              >
                {category}
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
            {Categories.map((category, index) => (
              <li key={index} className='select-item'>
                <button
                  className={`select-btn ${selectedValue === category.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleSelect(category.toLowerCase())}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className='project-list'>
          {filteredProjects.map((project, index) => (
            <li key={index} className={`project-item ${project.active ? 'active' : ''}`}>
              <div className='project-item-container' onClick={() => window.open(project.demo)} target='_blank'>
                <figure className='project-img'>
                  <div className='project-item-icon-container'>
                    {project.demo !== '' ? (
                      <a href={project.demo} target='_blank' title='View Demo'>
                        <div className='project-item-icon-box'>
                          <i className='fa-solid fa-arrow-up-right-from-square'></i>
                        </div>
                      </a>
                    ) : null}
                    {project.github !== '' ? (
                      <a href={project.github} target='_blank' title='View Code'>
                        <div className='project-item-icon-box'>
                          <i className='fa-brands fa-github'></i>
                        </div>
                      </a>
                    ) : null}
                    {project.figma !== '' ? (
                      <a href={project.github} target='_blank' title='View Figma'>
                        <div className='project-item-icon-box'>
                          <i className='fa-brands fa-figma'></i>
                        </div>
                      </a>
                    ) : null}
                  </div>
                  <img src={project.image} alt={project.title} loading='lazy' />
                </figure>
                <div className='project-header'>
                  <h3 className='project-title'>{project.title}</h3>
                  <div className='dot'></div>
                  <h5 className='project-date'>Developed in {project.date}</h5>
                </div>
                <p className='project-description'>{project.description}</p>
                <div className='project-category-container'>
                  {project.category.map((category, index) => (
                    <p key={index} className='project-category'>
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className='archive-projects'>
        <div className='archive-btn' onClick={toggleArchive}>
          <span className='archive-text'>View full project archive</span>
          <i className='fa-solid fa-arrow-right'></i>
        </div>
      </section>
      <div className={`modal-container ${isArchiveActive ? 'active' : ''}`}>
        <div className={`overlay ${isArchiveActive ? 'active' : ''}`} onClick={toggleArchive}></div>
        <section className='archive-modal'>
          <button className='modal-close-btn' onClick={toggleArchive}>
            <i className='fa-solid fa-xmark'></i>
          </button>
          <header>
            <h2 className='h2 article-title'>All my projects</h2>
          </header>
          <div className='table-archive-container'>
            <table className='archive-container'>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Project</th>
                  <th className='archive-hidden'>Made at</th>
                  <th className='archive-hidden'>Built with</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {ArchiveData.map((project, index) => (
                  <tr key={index}>
                    <td>{project.date}</td>
                    <td>
                      <span className='name-project'>{project.title}</span>
                    </td>
                    <td className='archive-hidden'>{project.made}</td>
                    <td className='archive-hidden'>
                      <ul>
                        {project.category.map((category, index) => (
                          <li key={index} className='technologies'>
                            {category}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <div className='archive-link-container'>
                        {project.demo !== '' ? (
                          <a href={project.demo} target='_blank' className='archive-link' title='View Demo'>
                            <i className='fa-solid fa-arrow-up-right-from-square'></i>
                          </a>
                        ) : null}
                        {project.github !== '' ? (
                          <a href={project.github} target='_blank' className='archive-link' title='View Code'>
                            <i className='fa-brands fa-github'></i>
                          </a>
                        ) : null}
                        {project.figma !== '' ? (
                          <a href={project.github} target='_blank' className='archive-link' title='View Figma'>
                            <i className='fa-brands fa-figma'></i>
                          </a>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Portfolio;
