import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translateResources } from '../../helpers/translate';
import { usePageContext } from '../PageContext';
import './Resources.css';
import { resourcesData } from './resourcesData';

const Resources = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();
  const [openFolders, setOpenFolders] = useState({});

  const resources = translateResources(resourcesData, i18n.language);

  const toggleFolder = (id) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <article className={`resources${activePage === 'resources' ? ' active' : ''}`}>
      <header>
        <h2 className='h2 article-title'>{t('resources-title')}</h2>
      </header>
      <section className='about-text'>
        <p>{t('resources-text-1')}</p>
      </section>

      <section className='resources-list'>
        {resources.map((resource) => (
          <div key={resource.id} className={`resource-folder ${openFolders[resource.id] ? 'open' : ''}`}>
            <button
              className={`folder-row ${openFolders[resource.id] ? 'open' : ''}`}
              onClick={() => toggleFolder(resource.id)}
              aria-expanded={!!openFolders[resource.id]}
            >
              <div className='folder-header'>
                <span className='folder-icon'>
                  <i className={`fa-solid fa-folder${openFolders[resource.id] ? '-open' : ''}`} aria-hidden='true'></i>
                </span>
                <span className='folder-name'>{resource.title}</span>
                <span className='folder-count'>{resource.links.length}</span>
              </div>
              <p className='resource-description'>{resource.description}</p>
            </button>

            <div className={`folder-contents ${openFolders[resource.id] ? 'visible' : ''}`}>
              <ul className='resource-files'>
                {resource.links.map((link, index) => (
                  <li key={index} className='file-item'>
                    <img className='file-icon' src={link.icon} alt='' aria-hidden='true' />
                    <a href={link.url} target='_blank' rel='noopener noreferrer' className='file-link'>
                      {link.description}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Resources;
