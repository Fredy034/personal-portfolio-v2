import { useState } from 'react';
import './Sidebar.css';
import { ContactData, SocialData } from './sidebarData';

const Sidebar = ({isAviable = false}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const iconContacts = isActive ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  const textContacts = isActive ? 'Hide Contacts' : 'Show Contacts';

  return (
    <aside className={`sidebar${isActive ? ' active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./images/my-avatar.png" alt="" />
        </figure>
        <div className="info-content">
          <h1 className="name" title='Fredy Quintero'>Fredy Quintero</h1>
          <p className="title">Full Stack Developer</p>
          <div className="availability-container">
            <span className={`availability-status ${isAviable ? '' : 'offline'}`}></span>
            <span className="availability-title">{isAviable ? 'Available to Work' : 'Currently busy'}</span>
          </div>
        </div>
        <button className="info_more-btn" onClick={handleToggle}>
          <span>{textContacts}</span>
          <i className={iconContacts}></i>
        </button>
      </div>
      <div className="sidebar_info-more">
        <div className="separator"></div>
        <ul className="contacts-list">
          {ContactData.map((item) => (
            <li key={item.id} className="contact-item">
              <div className="icon-box">
                <i className={item.icon}></i>
              </div>
              <div className="contact-info">
                <p className="contact-title">{item.title}</p>
                {item.isTime 
                  ? (<time dateTime={item.dateTime}>{item.linkText}</time>) 
                  : item.isAddress 
                  ? (<address>{item.linkText}</address>) 
                  : (<a href={item.link} className='contact-link'>{item.linkText}</a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          {SocialData.map((item) => (
            <li key={item.id} className="social-item">
              <a href={item.link} className="social-link">
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar