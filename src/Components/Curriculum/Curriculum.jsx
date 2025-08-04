import { useTranslation } from 'react-i18next';
import { usePageContext } from '../PageContext';
import './Curriculum.css';
import { CoursesData, EducationData, ExperienceData, OtherTechnologiesData, SkillsData } from './curriculumData';

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
        description: skill.description[i18n.language],
      };
    });
  };

  const translateCourses = (data) => {
    return data.map((course) => {
      return {
        ...course,
        title: course.title[i18n.language],
        date: course.date[i18n.language],
      };
    });
  };

  const Education = translateEducation(EducationData);
  const Experience = translateEducation(ExperienceData);
  const Skills = translateSkills(SkillsData);
  const Technologies = OtherTechnologiesData;
  const Courses = translateCourses(CoursesData);

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
      <section className='skills'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <i className='fa-solid fa-layer-group'></i>
          </div>
          <h3 className='h3'>{t('curriculum-subtitle-3')}</h3>
        </div>

        <div className='skills-text'>
          <p>{t('curriculum-skills-text-1')}</p>
        </div>

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
                <img src={skill.logo} alt={`${skill.title} logo`} width={40} height={'auto'} loading='lazy' />
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
            <i className='fa-solid fa-cubes-stacked'></i>
          </div>
          <h3 className='h3'>{t('curriculum-subtitle-5')}</h3>
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
              <img src={tech.logo} alt={`${tech.title} logo`} title={tech.title} />
            </a>
          ))}
        </ul>
      </section>

      <section className='timeline' style={{ marginTop: '40px' }}>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <i className='fa-solid fa-laptop-code'></i>
          </div>
          <h3 className='h3'>{t('curriculum-subtitle-6')}</h3>
        </div>

        <ol className='timeline-list'>
          {Courses.map((course) => (
            <li key={course.id} className='timeline-item'>
              <a
                href={course.url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => e.stopPropagation()}
                className='timeline-link'
              >
                <div className='timeline-title'>
                  <img src={course.image} alt={course.provider} title={course.provider} />
                  <span>{course.date}</span>
                  <div className="dot"></div>
                  <h4 className='h4 timeline-item-title'>{course.title}</h4>
                  <span className='timeline-item-subtitle'>by {course.provider}</span>
                </div>
              </a>
            </li>
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
