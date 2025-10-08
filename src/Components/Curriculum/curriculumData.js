const EducationData = [
  {
    id: 1,
    title: {
      en: 'Degree on Computer Engineering',
      es: 'Profesional en Ingeniería Informática',
    },
    school: 'Institución Universitaria de Envigado (IUE)',
    date: {
      en: '02/2021 - 08/2025',
      es: '02/2021 - 08/2025',
    },
    description: {
      en: 'I acquired a solid education in computer engineering, covering areas such as software development, databases, networks, and cybersecurity. I participated in practical projects that allowed me to apply my knowledge to real-world situations, developing technical and teamwork skills. Additionally, I stayed updated with the latest technological trends and industry best practices.',
      es: 'Adquirí una sólida formación en ingeniería informática, abarcando áreas como desarrollo de software, bases de datos, redes y seguridad informática. Participé en proyectos prácticos que me permitieron aplicar mis conocimientos en situaciones del mundo real, desarrollando habilidades técnicas y de trabajo en equipo. Además, me mantuve actualizado con las últimas tendencias tecnológicas y mejores prácticas de la industria.',
    },
    professionalCard: 'https://tramites.copnia.gov.co/Copnia_Microsite/CertificateOfGoodStanding/WaterMarkmethod?CertificateNumber=011246-0790641%20ANT',
  },
  {
    id: 2,
    title: {
      en: 'English Course',
      es: 'Curso de Inglés',
    },
    school: 'Language Centers Network (LCN Idiomas)',
    date: {
      en: '08/2020 - 05/2024',
      es: '08/2020 - 05/2024',
    },
    description: {
      en: 'I completed an English course at LCN Idiomas, achieving a C1 level according to the Common European Framework of Reference for Languages (CEFR). This level demonstrates my ability to understand and communicate effectively in English, both in written and spoken forms, in various contexts including academic and professional settings.',
      es: 'Completé un curso de inglés en LCN Idiomas, alcanzando un nivel C1 según el Marco Común Europeo de Referencia para las Lenguas (MCER). Este nivel demuestra mi capacidad para comprender y comunicarme eficazmente en inglés, tanto en formas escritas como habladas, en diversos contextos, incluyendo entornos académicos y profesionales.',
    },
  },
  {
    id: 3,
    title: {
      en: 'Software Development Technician',
      es: 'Técnico en Desarrollo de Software',
    },
    school: 'Servicio Nacional de Aprendizaje (SENA)',
    date: {
      en: '02/2019 - 11/2020',
      es: '02/2019 - 11/2020',
    },
    description: {
      en: 'I completed the Software Development Technician program at SENA, where I acquired fundamental knowledge in programming, databases, web development, and agile methodologies. During the course, I participated in practical projects that allowed me to apply my technical skills and work in teams, preparing me to face challenges in the field of software development.',
      es: 'Finalicé el programa de Técnico en Desarrollo de Software en el SENA, donde adquirí conocimientos fundamentales en programación, bases de datos, desarrollo web y metodologías ágiles. Durante el curso, participé en proyectos prácticos que me permitieron aplicar mis habilidades técnicas y trabajar en equipo, preparándome para enfrentar desafíos en el campo del desarrollo de software.',
    },
  },
];

const ExperienceData = [
  {
    id: 1,
    title: {
      en: 'IT Architecture Intern',
      es: 'Practicante TI Arquitectura',
    },
    company: 'Postobón S.A.',
    date: {
      en: '02/2025 - 08/2025',
      es: '02/2025 - 08/2025',
    },
    place: 'Medellín, Antioquia, Colombia',
    modality: {
      en: 'On-site',
      es: 'Presencial',
    },
    description: {
      en: 'Supported the IT department in various strategic initiatives: \nParticipated in the development of the internal “IT Needs Managment” application (Angular, .NET Core, SQL Server, Azure DevOps), focusing on feature implementation, production deployment, and end-user training. \nContributed to “DSD Master Data”, implementing Azure B2C with Angular and developing both frontend and backend in .NET Core, integrated with SQL Server and SAP HANA. \nAssisted in migrating the “Physical Inventory Optimization” project from Angular v14 to v19, ensuring compatibility and stability. \nTook part in Phase 1 of “At Your Service” (Angular 19, .NET Core 8, SQL Server), working under Scrum methodology and implementing new features and Azure B2C integrations. \nProvided support for RFI and RFP processes to evaluate and select technology vendors.',
      es: 'Apoyé al área de TI en diversas iniciativas estratégicas: \nParticipé en el desarrollo de la aplicación interna “Gestión de Necesidades TI” (Angular, .NET Core, SQL Server, Azure DevOps), con énfasis en la implementación de funcionalidades, el despliegue en entorno productivo y la capacitación de usuarios.\nContribuí en “Maestras DSD”, implementando Azure B2C con Angular y desarrollando frontend y backend en .NET Core, integrados con SQL Server y SAP HANA. \nApoyé en la migración del proyecto “Optimización de Toma de Inventario Físico” de Angular v14 a v19, garantizando compatibilidad y estabilidad. \nParticipé en la Fase 1 de “A tu Servicio” (Angular 19, .NET Core 8, SQL Server), trabajando bajo la metodología Scrum e implementando funcionalidades e integraciones con Azure B2C. \nBrindé soporte en los procesos de RFI y RFP para la evaluación y selección de proveedores tecnológicos.',
    },
    skills: {
      en: ['Angular', '.NET Core', 'Microsoft SQL Server', 'Azure DevOps', 'Time Management', 'SQL', 'Scrum'],
      es: ['Angular', '.NET Core', 'Microsoft SQL Server', 'Azure DevOps', 'Gestión del Tiempo', 'SQL', 'Scrum'],
    },
  },
  {
    id: 2,
    title: {
      en: 'Software Analyst',
      es: 'Analista de Software',
    },
    company: 'Compuhora S.A.S.',
    date: {
      en: '08/2025 - 10/2025',
      es: '08/2025 - 10/2025',
    },
    place: 'Medellín, Antioquia, Colombia',
    modality: {
      en: 'Remote',
      es: 'Remoto',
    },
    description: {
      en: 'Responsibilities and achievements:\nDeveloped an API with Python for text embeddings processing.\nDesigned and developed a remote desktop control application prototype using Node.js and React.js.\nCreated an AI-powered ChatBot prototype capable of handling context through a file manager and answering questions based on that context or the web, using .NET Core, JavaScript, HTML, CSS, and Swagger.',
      es: 'Responsabilidades y logros:\nDesarrollo de una API con Python para el procesamiento de text embeddings.\nDiseño y desarrollo de un prototipo de aplicación de control de escritorio remoto utilizando Node.js y React.js.\nCreación de un prototipo de ChatBot con inteligencia artificial, capaz de manejar contexto mediante un gestor de archivos y responder preguntas basadas en dicho contexto o en la web, empleando .NET Core, JavaScript, HTML, CSS y Swagger.',
    },
    skills: {
      en: ['Python', 'Node.js', 'React.js', '.NET Core', 'JavaScript', 'HTML', 'CSS', 'Swagger', 'APIs', 'Artificial Intelligence'],
      es: ['Python', 'Node.js', 'React.js', '.NET Core', 'JavaScript', 'HTML', 'CSS', 'Swagger', 'APIs', 'Inteligencia Artificial'],
    },
  },
];

const CoursesData = [
  {
    id: 1,
    title: {
      es: 'Desarrollando Aplicaciones en Angular 19 y ASP.NET Core 9',
      en: 'Developing Applications in Angular 19 and ASP.NET Core 9',
    },
    provider: 'Udemy',
    image: '/assets/courses/Udemy_dark.svg',
    date: {
      es: 'Jul. 2025',
      en: 'Jul. 2025',
    },
    url: 'https://www.udemy.com/certificate/UC-1b5ff103-997c-454d-b868-0e14d8c4a664/',
  },
  {
    id: 2,
    title: {
      es: 'Curso Práctico de SQL',
      en: 'Practical SQL Course',
    },
    provider: 'Platzi',
    image: '/assets/courses/platzi-full.svg',
    date: {
      es: 'Abr. 2025',
      en: 'Apr. 2025',
    },
    url: 'https://platzi.com/p/Fredy034/curso/2059-course/diploma/detalle/',
  },
  {
    id: 3,
    title: {
      es: 'Curso de Responsive Design: Maquetación Mobile First',
      en: 'Responsive Design Course: Mobile First Layout',
    },
    provider: 'Platzi',
    image: '/assets/courses/platzi-full.svg',
    date: {
      es: 'Abr. 2025',
      en: 'Apr. 2025',
    },
    url: 'https://platzi.com/p/Fredy034/curso/2030-course/diploma/detalle/',
  },
  {
    id: 4,
    title: {
      es: 'Angular 14 - La Guia Completa + 15 Proyectos',
      en: 'Angular 14 - The Complete Guide + 15 Projects',
    },
    provider: 'Udemy',
    image: '/assets/courses/Udemy_dark.svg',
    date: {
      es: 'Mar. 2025',
      en: 'Mar. 2025',
    },
    url: 'https://www.udemy.com/certificate/UC-ed649eae-3c30-4337-b0e6-2dd368b3ba80/',
  },
  {
    id: 5,
    title: {
      es: 'Introduction to Cybersecurity',
      en: 'Introduction to Cybersecurity',
    },
    provider: 'Cisco',
    image: '/assets/courses/Cisco_dark.svg',
    date: {
      es: 'Ago. 2024',
      en: 'Aug. 2024',
    },
    url: 'https://www.credly.com/badges/d75bd61b-07e4-4ca8-8085-78e613fdb589/linked_in_profile',
  },
  {
    id: 6,
    title: {
      es: 'Curso Definitivo de HTML y CSS',
      en: 'HTML and CSS Master Course',
    },
    provider: 'Platzi',
    image: '/assets/courses/platzi-full.svg',
    date: {
      es: 'Jul. 2023',
      en: 'Jul. 2023',
    },
    url: 'https://platzi.com/p/Fredy034/curso/2008-html-css/diploma/detalle/',
  },
  {
    id: 7,
    title: {
      es: 'Curso Profesional de Git y GitHub',
      en: 'Professional Git and GitHub Course',
    },
    provider: 'Platzi',
    image: '/assets/courses/platzi-full.svg',
    date: {
      es: 'May. 2023',
      en: 'May. 2023',
    },
    url: 'https://platzi.com/p/Fredy034/curso/1557-git-github/diploma/detalle/',
  },
  {
    id: 8,
    title: {
      es: 'CCNA: Introducción a Redes',
      en: 'CCNA: Introduction to Networks',
    },
    provider: 'Cisco',
    image: '/assets/courses/Cisco_dark.svg',
    date: {
      es: 'Ene. 2023',
      en: 'Jan. 2023',
    },
    url: 'https://www.credly.com/badges/20064c77-0ed4-4260-bfba-f391c6d6e9e0/linked_in_profile',
  },
];

export { EducationData, ExperienceData, CoursesData };
