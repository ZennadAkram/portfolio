import { Github,Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoFlutter from '/public/images/logos/icon-flutter.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoDart from '/public/images/logos/icon-dart.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoDjango from '/public/images/logos/icon-django-rest.svg';
import LogoDeepseek from '/public/images/logos/icon-deepseek.svg';
import LogoFirebase from '/public/images/logos/icon-firebase.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoMysql from '/public/images/logos/icon-mysql.svg';
import LogoSmolagents from '/public/images/logos/icon-smolagents.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';
import ProjectCharacterAI from '/public/images/project-character-ai.png';
import ProjectAlearning from '/public/images/project-alearning.png';
import ProjectTechstore from '/public/images/tech-store-new.png';
import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ZennadAkram',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  LinkedIn: 'https://www.linkedin.com/in/akram-zennad-201027378/',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  /*{
    label: 'Testimonials',
    href: '#testimonials',
  },
  */
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/ZennadAkram',
  },
  
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/akram-zennad-201027378/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Dart',
    logo: LogoDart,
    url: 'https://dart.dev/',
  },
  {    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  
  
  {
    label:'Java',
    logo:LogoJava,
    url:'https://www.java.com/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url:'https://flutter.dev/', 
  },

  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
 
  {
    label: 'Django',
    logo: LogoDjango,
    url: 'https://www.django-rest-framework.org/',
  },
   {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  
  {
    label: 'Smolagents',
    logo: LogoSmolagents,
    url: 'https://huggingface.co/docs/smolagents/',
  },
  {    label: 'Deepseek API',
    logo: LogoDeepseek,
    url: 'https://deepseek.ai/',
  },
  {    label: 'Firebase',
    logo: LogoFirebase,
    url: 'https://firebase.google.com/',
  },
  {
    label: 'MySQL',
    logo: LogoMysql,
    url: 'https://www.mysql.com/',
  },
  
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
 
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Greenapex logo',
    position: 'Team Lead',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Full Stack Developer',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ['Worked as a full stack developer (React / Laravel).'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Tech Store',
    description:
      'An e-commerce platform for web and mobile, allowing users to browse and purchase products easily, with an AI chatbot assistant to provide recommendations, answer questions, and enhance the shopping experience in just a few simple clicks.',
    url: 'https://github.com/ZennadAkram/tech_store',
    previewImage: ProjectTechstore,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
       'Context API',
      'Flutter',
      'Dart',
      'Django Rest Framework',
      'Deepseek API',
      'PostgreSQL',
      'Websockets',
     
    ],
  },
  {
    name: 'Character AI',
    description:
      'A mobile app for chatting with AI-powered characters—fictional or custom—using text, STT, and TTS for immersive, interactive conversations.',
    url: 'https://github.com/ZennadAkram/celebrity_ai',
    previewImage:ProjectCharacterAI ,
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Django Rest Framework',
      'Deepseek API',
      'Smolagents',
      
      'PostgreSQL',
      'Hive',
      'TTS',
      'STT',
      'Websockets',
      'Google Cloud',
    ],
  },
  {
    name: 'A Learning',
    description:
      'An e-learning platform for students, teachers, and admins to manage courses, submit and grade assignments, and organize users across the academic system.',
    url: 'https://github.com/lokHamid/A-Learning',
    previewImage: ProjectAlearning,
    technologies: [
      'Flutter',
      'Dart',
      'Provider',
      'Spring Boot',
      'Java',
      'Supabase',
      
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
