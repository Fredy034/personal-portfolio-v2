import { usePageContext } from '../PageContext';
import './Curriculum.css';
import { EducationData, ExperienceData, SkillsData } from './curriculumData';

const Curriculum = () => {
  const { activePage } = usePageContext();

  return (
    <article className={`resume ${activePage === 'curriculum' ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">Curriculum</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <i className="fa-solid fa-book"></i>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {EducationData.map((education) => (
            <li key={education.id} className="timeline-item">
              <div className="timeline-title">
                <h4 className="h4 timeline-item-title">{education.title}</h4>
                <span className="dot"></span>
                <span className="timeline-item-subtitle">{education.school}</span>
              </div>
              <div className="timeline-year">
                <i className="fa-regular fa-calendar-days"></i>
                <span>{education.date}</span>
              </div>
              <p className="timeline-text">{education.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {ExperienceData.map((experience) => (
            <li key={experience.id} className="timeline-item">
              <div className="timeline-title">
                <h4 className="h4 timeline-item-title">{experience.title}</h4>
                <span className="dot"></span>
                <span className="timeline-item-subtitle">{experience.company}</span>
              </div>
              <div className="timeline-year">
                <i className="fa-regular fa-calendar-days"></i>
                <span>{experience.date}</span>
              </div>
              <p className="timeline-text">{experience.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          {SkillsData.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.title}</h5>
                <span>{skill.years}</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: skill.percentage }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="full-resume">
        <a href='https://fredy034.neocities.org/curriculum/index.html' target='_blank' className="resume-btn">
          <span className="resume-text">View Full Résumé</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </article>
  )
}

export default Curriculum;