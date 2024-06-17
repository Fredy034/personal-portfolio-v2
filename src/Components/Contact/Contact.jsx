import { useEffect, useState } from 'react';
import { usePageContext } from '../PageContext';
import './Contact.css';

const Contact = () => {
  const { activePage } = usePageContext();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect (() => {
    const form = document.querySelector('.form')
    setIsFormValid(form.checkValidity())
  }, [formData])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect (() => {
    console.log(formData)
  }, [formData])

  return (
    <article className={`contact ${activePage === 'contact' ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.23369403913!2d-75.63475317336793!3d6.177022870681071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46822e075e9cd5%3A0x6dd21cc8445c3d42!2sItag%C3%BCi%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1718552637402!5m2!1ses-419!2sco" width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input type="text" name="fullname" placeholder='Full name' className="form-input" value={formData.fullname} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder='Email address' className="form-input" value={formData.email} onChange={handleInputChange} required />
          </div>
          <textarea name="message" className="form-input" placeholder='Your Message' value={formData.message} onChange={handleInputChange} required></textarea>
          <button className="form-btn" type='submit' disabled={!isFormValid}>
            <i className="fa-regular fa-paper-plane"></i>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact;