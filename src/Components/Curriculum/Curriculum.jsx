import { useTranslation } from 'react-i18next';
import { translateCourses, translateEducation } from '../../helpers/translate';
import { usePageContext } from '../PageContext';
import './Curriculum.css';
import { CoursesData, EducationData, ExperienceData } from './curriculumData';

const Curriculum = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();

  const Education = translateEducation(EducationData, i18n.language);
  const Experience = translateEducation(ExperienceData, i18n.language);
  const Courses = translateCourses(CoursesData, i18n.language);

  return (
    <article className={`resume ${activePage === 'curriculum' ? 'active' : ''}`}>
      <header>
        <h2 className='h2 article-title'>{t('curriculum-title')}</h2>
      </header>
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
                <div className='timeline-text'>
                  {experience.description.split('\n').map((line, index) =>
                    index === 0 ? (
                      <p key={index}>{line.trim()}</p>
                    ) : (
                      <ul key={index} className='timeline-text-list'>
                        <li className='timeline-text-list-item'>{line.trim()}</li>
                      </ul>
                    )
                  )}
                </div>
              </li>
            ))
          )}
        </ol>
      </section>

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

      <section className='timeline' style={{ marginTop: '40px' }}>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <i className='fa-solid fa-laptop-code'></i>
          </div>
          <h3 className='h3'>{t('curriculum-subtitle-3')}</h3>
        </div>

        <ol className='timeline-list'>
          {Courses.map((course) => (
              <a
                href={course.url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => e.stopPropagation()}
                key={course.id}
                className='timeline-item'
              >
                <div className='timeline-title timeline-title-course'>
                  <div className='course-row-1'>
                    <img src={course.image} alt={course.provider} title={course.provider} />
                    <span className='course-date'>{course.date}</span>
                  </div>
                  <div className='course-row-2'>
                    <h4 className='h4 timeline-item-title'>{course.title}</h4>
                    <span className='timeline-item-subtitle'>by {course.provider}</span>
                  </div>
                </div>
              </a>
          ))}
        </ol>
      </section>

      <section className='full-resume'>
        <a
          href='https://fredy034.neocities.org/curriculum/index.html'
          target='_blank'
          onClick={(e) => e.stopPropagation()}
          className='resume-btn'
        >
          <span className='resume-text'>{t('curriculum-subtitle-4')}</span>
          <i className='fa-solid fa-arrow-right'></i>
        </a>
      </section>
    </article>
  );
};

export default Curriculum;
