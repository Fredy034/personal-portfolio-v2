import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';
import { ContactData, SocialData } from './sidebarData';

const Sidebar = ({ isAviable = false }) => {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const translateContacts = (data) => {
    return data.map((contact) => {
      return {
        ...contact,
        title: contact.title[i18n.language],
        linkText: contact.linkText[i18n.language],
      };
    });
  };

  const Contacts = translateContacts(ContactData);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const iconContacts = isActive ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  const textContacts = isActive ? t('sidebar-option-1') : t('sidebar-option-2');

  return (
    <aside className={`sidebar${isActive ? ' active' : ''}`}>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img className='hover-hidden' src='./images/my-avatar.png' alt="Fredy Quintero's Avatar" />
          <img className='hover-flex' src='./images/my-avatar-blink.png' alt="Fredy Quintero's Avatar Blinking" />
        </figure>
        <div className='info-content'>
          <h1 className='name' title='Fredy Quintero'>
            Fredy Quintero
          </h1>
          <p className='title'>{t('sidebar-title')}</p>
          <div className='availability-container'>
            <span className={`availability-status ${isAviable ? '' : 'offline'}`}></span>
            <span className='availability-title'>
              {isAviable ? t('sidebar-aviability-1') : t('sidebar-aviability-2')}
            </span>
          </div>
        </div>
        <button className='info_more-btn' onClick={handleToggle}>
          <span>{textContacts}</span>
          <i className={iconContacts}></i>
        </button>
      </div>
      <div className='sidebar_info-more'>
        <div className='separator'></div>
        <ul className='contacts-list'>
          {Contacts.map((item) => (
            <li key={item.id} className='contact-item'>
              <div className='icon-box'>
                <i className={item.icon}></i>
              </div>
              <div className='contact-info'>
                <p className='contact-title'>{item.title}</p>
                {item.isTime ? (
                  <time dateTime={item.dateTime}>{item.linkText}</time>
                ) : item.isAddress ? (
                  <address>{item.linkText}</address>
                ) : (
                  <a href={item.link} className='contact-link'>
                    {item.linkText}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className='separator'></div>
        <ul className='social-list'>
          {SocialData.map((item) => (
            <li key={item.id} className='social-item'>
              <a href={item.link} className='social-link'>
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
