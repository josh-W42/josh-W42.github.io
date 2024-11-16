import { FunctionComponent } from 'react';
import { HomeComponent } from './component';

export const Home: FunctionComponent = () => {
  const typeTitles = [
    "I'm a...",
    1500,
    "I'm a... Software Engineer",
    1500,
    "I'm a... Marathon Runner",
    1500,
    "I'm a... Problem Solver",
    1500,
    "I'm a... UCLA Bruin",
    1500,
    "I'm a... Life Long Learner",
    1500,
    "I'm a... Trekkie",
    1500,
  ];

  return <HomeComponent titles={typeTitles} />;
};