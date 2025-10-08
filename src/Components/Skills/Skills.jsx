import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translateSkills } from '../../helpers/translate';
import { usePageContext } from '../PageContext';
import './Skills.css';
import { OtherTechnologiesData, SkillsData } from './skillsData';

const Skills = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();
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
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Siempre prioriza localStorage, luego data-theme, luego media query
      setTheme(getTheme());
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const Skills = translateSkills(SkillsData, i18n.language);
  const Technologies = OtherTechnologiesData;

  return (
    <article className={`skills${activePage === 'skills' ? ' active' : ''}`}>
      <header>
        <h2 className='h2 article-title'>{t('skills-title')}</h2>
      </header>

      <section className='about-text'>
        <p>{t('skills-text-1')}</p>
      </section>

      <section className='skills'>
        <ul className='skills-list'>
          {Skills.map((skill) => (
            <a
              href={skill.url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
              key={skill.id}
              className='skills-item'
            >
              <div className='card-link'>
                <i className='fa-solid fa-arrow-up-right-from-square'></i>
              </div>
              <div className='skills-icon-box'>
                <img
                  src={theme === 'dark' ? skill.logoDark : skill.logoLight}
                  alt={`${skill.title} logo`}
                  width={40}
                  height={'auto'}
                  loading='lazy'
                />
              </div>
              <div className='skills-content-box'>
                <h4 className='h4 skills-item-title'>{skill.title}</h4>
                <p className='skills-item-text'>{skill.description}</p>
              </div>
            </a>
          ))}
        </ul>
      </section>

      <section className='technologies'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <i className='fa-solid fa-layer-group'></i>
          </div>
          <h3 className='h3'>{t('skills-subtitle-1')}</h3>
        </div>

        <ul className='technologies-list has-scrollbar'>
          {Technologies.map((tech) => (
            <a
              href={tech.url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
              key={tech.id}
              className='technologies-item'
            >
              <div className='tech-tooltip-container'>
                <img
                  src={theme === 'dark' ? tech.logoDark : tech.logoLight}
                  alt={`${tech.title} logo`}
                  width={40}
                  height={'auto'}
                  loading='lazy'
                />
                <span className='tech-tooltip'>{tech.title}</span>
              </div>
            </a>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Skills;
