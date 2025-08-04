const EducationData = [
  {
    id: 1,
    title: {
      en: 'Degree on Computer Engineering',
      es: 'Profesional en Ingeniería Informática',
    },
    school: 'Institución Universitaria de Envigado (IUE)',
    date: {
      en: '02/2021 - Present',
      es: '02/2021 - Actualidad',
    },
    description: {
      en: 'I am currently working on obtaining my undergraduate degree, which will help me improve the skills I already obtained while doing my technical degree and further develop my experience.',
      es: 'Actualmente estoy trabajando en obtener mi título de pregrado, lo que me ayudará a mejorar las habilidades que ya obtuve mientras hacía mi técnica y desarrollar aún más mi experiencia.',
    },
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
      en: "I dedicated my time on enhancing my English communication skills, which I belive it is a crucial language in today's world.",
      es: 'Dediqué mi tiempo a mejorar mis habilidades de comunicación en inglés, el cuál considero un idioma crucial en el mundo actual.',
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
      en: 'I successfully obtained my title as a Software Development Technician while still in high school.',
      es: 'Obtuve con éxito mi titulo como Técnico en Desarrollo de Software mientras aún estaba en bachillerato.',
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
    description: {
      en: 'Supported the IT department in various strategic initiatives: \nParticipated in the development of the internal “IT Needs Managment” application (Angular, .NET Core, SQL Server, Azure DevOps), focusing on feature implementation, production deployment, and end-user training. \nContributed to “DSD Master Data”, implementing Azure B2C with Angular and developing both frontend and backend in .NET Core, integrated with SQL Server and SAP HANA. \nAssisted in migrating the “Physical Inventory Optimization” project from Angular v14 to v19, ensuring compatibility and stability. \nTook part in Phase 1 of “At Your Service” (Angular 19, .NET Core 8, SQL Server), working under Scrum methodology and implementing new features and Azure B2C integrations. \nProvided support for RFI and RFP processes to evaluate and select technology vendors.',
      es: 'Apoyé al área de TI en diversas iniciativas estratégicas: \nParticipé en el desarrollo de la aplicación interna “Gestión de Necesidades TI” (Angular, .NET Core, SQL Server, Azure DevOps), con énfasis en la implementación de funcionalidades, el despliegue en entorno productivo y la capacitación de usuarios.\nContribuí en “Maestras DSD”, implementando Azure B2C con Angular y desarrollando frontend y backend en .NET Core, integrados con SQL Server y SAP HANA. \nApoyé en la migración del proyecto “Optimización de Toma de Inventario Físico” de Angular v14 a v19, garantizando compatibilidad y estabilidad. \nParticipé en la Fase 1 de “A tu Servicio” (Angular 19, .NET Core 8, SQL Server), trabajando bajo la metodología Scrum e implementando funcionalidades e integraciones con Azure B2C. \nBrindé soporte en los procesos de RFI y RFP para la evaluación y selección de proveedores tecnológicos.',
    },
  },
];

const SkillsData = [
  {
    id: 'angular',
    title: 'Angular',
    logo: '/assets/skills/angular.svg',
    description: {
      es: 'Framework de Google para construir aplicaciones SPA escalables, con inyección de dependencias y tipado estricto en TypeScript.',
      en: 'Google framework for building scalable SPA applications, with dependency injection and strict typing in TypeScript.',
    },
    url: 'https://angular.io',
  },
  {
    id: 'react',
    title: 'React & React Native',
    logo: '/assets/skills/React_dark.svg',
    description: {
      es: 'Biblioteca de Facebook basada en componentes para desarrollar interfaces declarativas y reutilizables con Virtual DOM.',
      en: 'Facebook library based on components for developing declarative and reusable interfaces with Virtual DOM.',
    },
    url: 'https://reactjs.org',
  },
  {
    id: 'dotnet-core',
    title: '.NET Core',
    logo: '/assets/skills/visual-studio.svg',
    description: {
      es: 'Framework multiplataforma de Microsoft para construir aplicaciones backend robustas y servicios web con C# y ASP.NET.',
      en: 'Microsoft cross-platform framework for building robust backend applications and web services with C# and ASP.NET.',
    },
    url: 'https://docs.microsoft.com/dotnet/core',
  },
  {
    id: 'python',
    title: 'Python',
    logo: '/assets/skills/python.svg',
    description: {
      es: 'Lenguaje de propósito general, muy legible, usado tanto en scripting como en data science y backend con Django o FastAPI.',
      en: 'General-purpose language, very readable, used in both scripting and data science, as well as backend development with Django or FastAPI.',
    },
    url: 'https://www.python.org',
  },
  {
    id: 'sql-server',
    title: 'Microsoft SQL Server',
    logo: '/assets/skills/sql-server.svg',
    description: {
      es: 'Sistema gestor de bases de datos relacionales con T-SQL, optimizado para transacciones empresariales.',
      en: 'Relational database management system with T-SQL, optimized for enterprise transactions.',
    },
    url: 'https://docs.microsoft.com/sql/sql-server',
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    logo: '/assets/skills/mongodb.svg',
    description: {
      es: 'Base de datos NoSQL orientada a documentos, que facilita la gestión de grandes volúmenes de datos semi-estructurados.',
      en: 'Document-oriented NoSQL database that makes it easy to manage large volumes of semi-structured data.',
    },
    url: 'https://www.mongodb.com',
  },
  {
    id: 'figma',
    title: 'Figma',
    logo: '/assets/skills/figma.svg',
    description: {
      es: 'Herramienta colaborativa de diseño UI/UX basada en la nube, perfecta para prototipado y hand-off con desarrolladores.',
      en: 'Collaborative cloud-based UI/UX design tool, perfect for prototyping and hand-off with developers.',
    },
    url: 'https://www.figma.com',
  },
  {
    id: 'powerbi',
    title: 'Power BI',
    logo: '/assets/skills/power-bi.svg',
    description: {
      es: 'Servicio de Microsoft para análisis de datos y creación de dashboards interactivos sin necesidad de codificar.',
      en: 'Microsoft service for data analysis and creation of interactive dashboards without the need for coding.',
    },
    url: 'https://powerbi.microsoft.com',
  },
  {
    id: 'github',
    title: 'GitHub',
    logo: '/assets/skills/GitHub_dark.svg',
    description: {
      es: 'Plataforma de desarrollo colaborativo que utiliza Git para el control de versiones y la gestión de proyectos.',
      en: 'Collaborative development platform that uses Git for version control and project management.',
    },
    url: 'https://github.com',
  },
  {
    id: 'azure-devops',
    title: 'Azure DevOps',
    logo: '/assets/skills/azure-devops.svg',
    description: {
      es: 'Conjunto de servicios en la nube para CI/CD, repositorios Git, gestión de proyectos y pipelines automatizados.',
      en: 'Cloud service suite for CI/CD, Git repositories, project management, and automated pipelines.',
    },
    url: 'https://azure.microsoft.com/services/devops',
  },
];

const OtherTechnologiesData = [
  {
    id: 'html5',
    title: 'HTML5',
    logo: '/assets/skills/html5.svg',
    url: 'https://developer.mozilla.org/docs/Web/HTML',
  },
  {
    id: 'css3',
    title: 'CSS3',
    logo: '/assets/skills/css_old.svg',
    url: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    logo: '/assets/skills/javascript.svg',
    url: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    logo: '/assets/skills/typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    id: 'csharp',
    title: 'C#',
    logo: '/assets/skills/csharp.svg',
    url: 'https://learn.microsoft.com/dotnet/csharp/',
  },
  {
    id: 'java',
    title: 'Java',
    logo: '/assets/skills/java.svg',
    url: 'https://www.java.com/en/',
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    logo: '/assets/skills/nodejs.svg',
    url: 'https://nodejs.org/',
  },
  {
    id: 'expressjs',
    title: 'Express.js',
    logo: '/assets/skills/Express.js_dark.svg',
    url: 'https://expressjs.com/',
  },
  {
    id: 'tailwindcss',
    title: 'Tailwind CSS',
    logo: '/assets/skills/tailwindcss.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    id: 'git',
    title: 'Git',
    logo: '/assets/skills/git.svg',
    url: 'https://git-scm.com/',
  },
  {
    id: 'postman',
    title: 'Postman',
    logo: '/assets/skills/postman.svg',
    url: 'https://www.postman.com/',
  },
  {
    id: 'npm',
    title: 'npm',
    logo: '/assets/skills/npm.svg',
    url: 'https://www.npmjs.com/',
  },
  {
    id: 'notion',
    title: 'Notion',
    logo: '/assets/skills/notion.svg',
    url: 'https://www.notion.so/',
  },
  {
    id: 'vscode',
    title: 'Visual Studio Code',
    logo: '/assets/skills/vscode.svg',
    url: 'https://code.visualstudio.com/',
  },
  {
    id: 'visual-studio',
    title: 'Visual Studio',
    logo: '/assets/skills/visual-studio.svg',
    url: 'https://visualstudio.microsoft.com/',
  },
  {
    id: 'netlify',
    title: 'Netlify',
    logo: '/assets/skills/netlify.svg',
    url: 'https://www.netlify.com/',
  },
  {
    id: 'jwt',
    title: 'JSON Web Tokens (JWT)',
    logo: '/assets/skills/jwt.svg',
    url: 'https://jwt.io/',
  },
  {
    id: 'canva',
    title: 'Canva',
    logo: '/assets/skills/canva.svg',
    url: 'https://www.canva.com/',
  },
  {
    id: 'google-colab',
    title: 'Google Colaboratory',
    logo: '/assets/skills/Google_Colaboratory.svg',
    url: 'https://colab.research.google.com/',
  }
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

export { EducationData, ExperienceData, SkillsData, OtherTechnologiesData, CoursesData };
