import { usePageContext } from '../PageContext';
import './Curriculum.css';

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
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">University School of Arts</h4>
            <div className="timeline-year">
              <i className="fa-regular fa-calendar-days"></i>
              <span>02/2007 - Present</span>
            </div>
            <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nobis dolore similique excepturi corrupti quisquam voluptas fuga facere obcaecati ea tenetur quas, aut neque? Dicta, unde similique! Non, fugit molestias?</p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <i className="fa-solid fa-book"></i>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">University School of Arts</h4>
            <div className="timeline-year">
              <i className="fa-regular fa-calendar-days"></i>
              <span>08/2007 - 11/2008</span>
            </div>
            <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nobis dolore similique excepturi corrupti quisquam voluptas fuga facere obcaecati ea tenetur quas, aut neque? Dicta, unde similique! Non, fugit molestias?</p>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Design</h5>
              <span>4 years</span>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Curriculum;