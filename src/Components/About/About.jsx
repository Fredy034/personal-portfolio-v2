import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translateService, translateTestimonials } from '../../helpers/translate';
import { usePageContext } from '../PageContext';
import './About.css';
import { ServicesData, TestimonialsData } from './aboutData';

const About = () => {
  const { t, i18n } = useTranslation();
  const { activePage } = usePageContext();

  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const Services = translateService(ServicesData, i18n.language);
  const Testimonials = translateTestimonials(TestimonialsData, i18n.language);

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
        <h2 className='h2 article-title'>{t('about-title')}</h2>
      </header>
      <section className='about-text'>
        <p>{t('about-text-1')}</p>
        <p>{t('about-text-2')}</p>
      </section>
      {/* -service */}
      <section className='service'>
        <h3 className='h3 service-title'>{t('about-subtitle-1')}</h3>
        <ul className='service-list'>
          {Services.map((service) => (
            <li key={service.id} className='service-item'>
              <div className='service-icon-box'>
                <img src={service.image} alt={service.alt} width={40} height={'auto'} loading='lazy' />
              </div>
              <div className='service-content-box'>
                <h4 className='h4 service-item-title'>{service.title}</h4>
                <p className='service-item-text'>{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* -testimonials */}
      {/* <section className='testimonials'>
        <h3 className='h3 testimonials-title'>{t('about-subtitle-2')}</h3>
        <ul className='testimonials-list has-scrollbar'>
          {Testimonials.map((testimonial) => (
            <li key={testimonial.id} className='testimonials-item'>
              <div className='content-card' data-testimonials-item onClick={() => handleTestimonialClick(testimonial)}>
                <figure className='testimonials-avatar-box'>
                  <img src={testimonial.avatar} alt={`${testimonial.name} Icon`} width={60} data-testimonials-avatar />
                </figure>
                <h4 className='h4 testimonials-item-title' data-testimonials-title>
                  {testimonial.name}
                </h4>
                <div className='testimonials-text' data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section> */}
      {/* -testimonials modal */}
      <div className={`modal-container ${modalActive ? 'active' : ''}`}>
        <div className={`overlay ${modalActive ? 'active' : ''}`} onClick={toggleModal}></div>
        <section className='testimonials-modal'>
          <button className='modal-close-btn' onClick={toggleModal}>
            <i className='fa-solid fa-xmark'></i>
          </button>
          <div className='modal-img-wrapper'>
            <figure className='modal-avatar-box'>
              <img
                src={modalContent.avatar}
                alt={`${modalContent.name} Avatar`}
                width={60}
                height={'auto'}
                loading='lazy'
              />
            </figure>
            <img src='/assets/icon-quote.svg' alt='Quote Icon' />
          </div>
          <div className='modal-content'>
            <h4 className='h3 modal-title'>{modalContent.name}</h4>
            <time dateTime='2021-06-14'>14 June, 2021</time>
            <div className='modal-text'>
              <p>{modalContent.text}</p>
            </div>
          </div>
        </section>
      </div>
      {/* -clients */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">{t('about-subtitle-3')}</h3>
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
  );
};

export default About;
