import { useState } from 'react';
import { usePageContext } from '../PageContext';
import './About.css';
import { ClientsData, ServicesData, TestimonialsData } from './aboutData';

const About = () => {
  const { activePage } = usePageContext();

  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const handleTestimonialClick = (testimonial) => {
    setModalContent(testimonial);
    toggleModal();
  };

  return (
    <article className={`about ${activePage === 'about' ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>I&apos;m Fredy Quintero, and I&apos;m 20 years old. I&apos;m interested in high-impact projects that will allow me to combine differents frameworks and technologies, and also, learn a lot. I&apos;m an education enthusiastic, so I&apos;m constantly learning that help me improve my self often. I&apos;m always looking for new challenges and looking forward meeting new people.</p>
        <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I&apos;m fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>
      </section>
      {/* -service */}
      <section className="service">
        <h3 className="h3 service-title">What I&apos;m doing</h3>
        <ul className="service-list">
          {ServicesData.map((service) => (
            <li key={service.id} className="service-item">
              <div className="service-icon-box">
                <img src={service.image} alt={service.alt} width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* -testimonials */}
      {/* <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {TestimonialsData.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div className="content-card" data-testimonials-item onClick={() => handleTestimonialClick(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={`${testimonial.name} Icon`} width={60} data-testimonials-avatar/>
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section> */}
      {/* -testimonials modal */}
      <div className={`modal-container ${modalActive ? 'active' : ''}`} data-modal-container>
        <div className={`overlay ${modalActive ? 'active' : ''}`} data-overlay onClick={toggleModal}></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn onClick={toggleModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src={modalContent.avatar} alt={`${modalContent.name} Avatar`} width={60} data-modal-img/>
            </figure>
            <img src="/assets/icon-quote.svg" alt="Quote Icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>{modalContent.name}</h4>
            <time dateTime='2021-06-14'>14 June, 2021</time>
            <div className="modal-text">
              <p>{modalContent.text}</p>
            </div>
          </div>
        </section>
      </div>
      {/* -clients */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {ClientsData.map((client) => (
            <li key={client.id} className="clients-item">
              <a href="#">
                <img src={client.image} alt={client.alt} />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  )
}

export default About