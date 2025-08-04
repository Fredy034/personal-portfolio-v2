import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../PageContext';
import './Portfolio.css';
import { ArchiveData, ProjectsData } from './portfolioData';
import { translateProjects } from '../../helpers/translate';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();

  const [selectedValue, setSelectedValue] = useState('all');
  const [lastCliked, setLastClicked] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArchiveActive, setIsArchiveActive] = useState(false);

  const Categories = [
    { id: 'all', label: t('portfolio-filter-1') },
    { id: 'web development', label: t('portfolio-filter-2') },
    { id: 'mobile development', label: t('portfolio-filter-3') },
    { id: 'desktop development', label: t('portfolio-filter-4') },
  ];

  const selectedCategory = Categories.find((category) => category.id === selectedValue);

  const Projects = translateProjects(ProjectsData, i18n.language);
  const Archive = translateProjects(ArchiveData, i18n.language);

  const toggleArchive = () => {
    setIsArchiveActive(!isArchiveActive);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    filterFunc(value);
  };

  const filterFunc = (selectedValue) => {
    return Projects.map((project) => {
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
          <a href={`mailto:fredy034@hotmail.com?Subject=${t('portfolio-call-subject')}`} className='button-social'>
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
                className={`filter-btn ${selectedValue === category.id.toLowerCase() ? 'active' : ''}`}
                onClick={(event) => handleFilterBtn(event, category.id.toLowerCase())}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
        <div className='filter-select-box'>
          <button
            className={`filter-select ${isDropdownOpen ? 'active' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className='select-value'>{selectedCategory ? selectedCategory.label : 'Category not found'}</div>
            <div className='select-icon'>
              <i className='fa-solid fa-chevron-down'></i>
            </div>
          </button>
          <ul className='select-list' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {Categories.map((category, index) => (
              <li key={index} className='select-item'>
                <button
                  className={`select-btn ${selectedValue === category.id.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleSelect(category.id.toLowerCase())}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className='project-list'>
          {filteredProjects.map((project, index) => (
            <li key={index} className={`project-item ${project.active ? 'active' : ''}`}>
              <div
                className='project-item-container'
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    window.open(project.demo);
                  }
                }}
              >
                <figure className='project-img'>
                  <div className='project-item-icon-container'>
                    {project.demo !== '' ? (
                      <a href={project.demo} target='_blank' title={t('portfolio-click-title-1')}>
                        <div className='project-item-icon-box'>
                          <i className='fa-solid fa-arrow-up-right-from-square'></i>
                        </div>
                      </a>
                    ) : null}
                    {project.github !== '' ? (
                      <a href={project.github} target='_blank' title={t('portfolio-click-title-2')}>
                        <div className='project-item-icon-box'>
                          <i className='fa-brands fa-github'></i>
                        </div>
                      </a>
                    ) : null}
                    {project.figma !== '' ? (
                      <a href={project.github} target='_blank' title={t('portfolio-click-title-3')}>
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
                  <h5 className='project-date'>
                    {t('portfolio-project-date')} {project.date}
                  </h5>
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
          <span className='archive-text'>{t('portfolio-subtitle-1')}</span>
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
            <h2 className='h2 article-title'>{t('portfolio-modal-title')}</h2>
          </header>
          <div className='table-archive-container'>
            <table className='archive-container'>
              <thead>
                <tr>
                  <th>{t('portfolio-modal-table-1')}</th>
                  <th>{t('portfolio-modal-table-2')}</th>
                  <th className='archive-hidden'>{t('portfolio-modal-table-3')}</th>
                  <th className='archive-hidden'>{t('portfolio-modal-table-4')}</th>
                  <th>{t('portfolio-modal-table-5')}</th>
                </tr>
              </thead>
              <tbody>
                {Archive.map((project, index) => (
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
                          <a
                            href={project.demo}
                            target='_blank'
                            className='archive-link'
                            title={t('portfolio-click-title-1')}
                          >
                            <i className='fa-solid fa-arrow-up-right-from-square'></i>
                          </a>
                        ) : null}
                        {project.github !== '' ? (
                          <a
                            href={project.github}
                            target='_blank'
                            className='archive-link'
                            title={t('portfolio-click-title-2')}
                          >
                            <i className='fa-brands fa-github'></i>
                          </a>
                        ) : null}
                        {project.figma !== '' ? (
                          <a
                            href={project.github}
                            target='_blank'
                            className='archive-link'
                            title={t('portfolio-click-title-3')}
                          >
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
