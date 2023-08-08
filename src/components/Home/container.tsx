import { FunctionComponent } from 'react';
import { HomeComponent } from './component';

export const Home: FunctionComponent = () => {
  const typeTitles = [
    "I'm a...",
    1500,
    "I'm a... Software Engineer",
    1500,
    "I'm a... Long Distance Runner",
    1500,
    "I'm a... Gaming Enthusiast",
    1500,
    "I'm a... Life Long Learner",
    1500,
  ];

  return <HomeComponent titles={typeTitles} />;
};
