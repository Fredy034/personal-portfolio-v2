import { usePageContext } from '../PageContext';
import './Curriculum.css';
import { EducationData, ExperienceData, SkillsData } from './curriculumData';
import { useTranslation } from 'react-i18next';

const Curriculum = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();

  const translateEducation = (data) => {
    return data.map((education) => {
      return {
        ...education,
        title: education.title[i18n.language],
        date: education.date[i18n.language],
        description: education.description[i18n.language],
      };
    });
  };

  const translateSkills = (data) => {
    return data.map((skill) => {
      return {
        ...skill,
        years: skill.years[i18n.language],
      };
    });
  };

  const Education = translateEducation(EducationData);
  const Experience = translateEducation(ExperienceData);
  const Skills = translateSkills(SkillsData);

  return (
    <article className={`resume ${activePage === 'curriculum' ? 'active' : ''}`}>
      <header>
        <h2 className='h2 article-title'>{t('curriculum-title')}</h2>
      </header>
      <section className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <i className='fa-solid fa-book'></i>
          </div>
          <h3 className='h3'>{t('curriculum-subtitle-1')}</h3>
        </div>
        <ol className='timeline-list'>
          {Education.map((education) => (
            <li key={education.id} className='timeline-item'>
              <div className='timeline-title'>
                <h4 className='h4 timeline-item-title'>{education.title}</h4>
                <span className='dot'></span>
                <span className='timeline-item-subtitle'>{education.school}</span>
              </div>
              <div className='timeline-year'>
                <i className='fa-regular fa-calendar-days'></i>
                <span>{education.date}</span>
              </div>
              <p className='timeline-text'>{education.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <i className='fa-solid fa-briefcase'></i>
          </div>
          <h3 className='h3'>{t('curriculum-subtitle-2')}</h3>
        </div>
        <ol className='timeline-list'>
          {Experience.length === 0 ? (
            <p className='no-experience'>{t('curriculum-no-experience')}</p>
          ) : (
            Experience.map((experience) => (
              <li key={experience.id} className='timeline-item'>
                <div className='timeline-title'>
                  <h4 className='h4 timeline-item-title'>{experience.title}</h4>
                  <span className='dot'></span>
                  <span className='timeline-item-subtitle'>{experience.company}</span>
                </div>
                <div className='timeline-year'>
                  <i className='fa-regular fa-calendar-days'></i>
                  <span>{experience.date}</span>
                </div>
                <p className='timeline-text'>{experience.description}</p>
              </li>
            ))
          )}
        </ol>
      </section>
      <section className='skill'>
        <h3 className='h3 skills-title'>{t('curriculum-subtitle-3')}</h3>
        <ul className='skills-list content-card'>
          {Skills.map((skill, index) => (
            <li key={index} className='skills-item'>
              <div className='title-wrapper'>
                <h5 className='h5'>{skill.title}</h5>
                <span>{skill.years}</span>
              </div>
              <div className='skill-progress-bg'>
                <div className='skill-progress-fill' style={{ width: skill.percentage }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className='full-resume'>
        <a href='https://fredy034.neocities.org/curriculum/index.html' target='_blank' className='resume-btn'>
          <span className='resume-text'>{t('curriculum-subtitle-4')}</span>
          <i className='fa-solid fa-arrow-right'></i>
        </a>
      </section>
    </article>
  );
};

export default Curriculum;
