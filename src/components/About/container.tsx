import { FunctionComponent } from 'react';
import { AboutComponent } from './component';

const csSkills = [
  'Python',
  'Data Structures',
  'Algorithms',
  'Object Oriented Programming',
  'Object Relational Mappers (ORMs)',
  'Object Document Mappers (ODMs)',
];

const webDevSkills = [
  'HTML5 / CSS3',
  'JavaScript',
  'Bootstrap.js',
  'Material-UI',
  'React.js',
  'Node.js',
  'Express.js',
  'Django',
  'MongoDB',
  'PostgreSQL',
];

export const About: FunctionComponent = () => {
  return <AboutComponent webSkills={webDevSkills} csSkills={csSkills} />;
};
