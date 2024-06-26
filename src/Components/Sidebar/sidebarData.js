const ContactData = [
  {
    id: 1,
    icon: 'fa-regular fa-envelope',
    title: {
      en: 'Email',
      es: 'Correo',
    },
    link: 'mailto:fredy034@hotmail.com',
    linkText: {
      en: 'fredy034@hotmail.com',
      es: 'fredy034@hotmail.com',
    },
  },
  // {
  //   id: 2,
  //   icon: 'fa-solid fa-mobile-screen',
  //   title: 'Phone',
  //   link: 'tel:+573014588146',
  //   linkText: '+57 301 458 8146',
  // },
  {
    id: 3,
    icon: 'fa-regular fa-calendar',
    title: {
      en: 'Birthdate',
      es: 'Fecha de Nacimiento',
    },
    dateTime: '2003-08-16',
    linkText: {
      en: 'August 16, 2003',
      es: '16 de Agosto, 2003',
    },
    isTime: true,
  },
  {
    id: 4,
    icon: 'fa-regular fa-map',
    title: {
      en: 'Location',
      es: 'Ubicación',
    },
    linkText: {
      en: 'Itagüí, Antioquia, Colombia',
      es: 'Itagüí, Antioquia, Colombia',
    },
    isAddress: true,
  },
];

const SocialData = [
  // {
  //   id: 1,
  //   icon: 'fa-brands fa-instagram',
  //   link: 'https://www.instagram.com/fredy_0816/',
  // },
  {
    id: 2,
    icon: 'fa-brands fa-linkedin',
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fredy-quintero',
  },
  {
    id: 3,
    icon: 'fa-brands fa-github',
    alt: 'GitHub',
    link: 'https://github.com/Fredy034',
  },
];

export { ContactData, SocialData };
