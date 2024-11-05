import { FunctionComponent, useEffect, useState } from 'react';
import { ProjectsComponent } from './component';
import { Project, projectsData } from './projectsData';
import './projects.css';

export const Projects: FunctionComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortKey, setSortKey] = useState('date');

  useEffect(() => {
    sortProjects(sortKey);
  }, [sortKey]);

  const sortProjects = (key: string) => {
    switch (key) {
      case 'date':
        setProjects(() => {
          return projectsData.sort(
            (a, b) => b.date.valueOf() - a.date.valueOf()
          );
        });
        break;
      case 'front-end':
        setProjects(() => {
          return projectsData.sort(
            (a, b) =>
              Number(b.skills.includes('Front-End')) -
              Number(a.skills.includes('Front-End'))
          );
        });
        break;
      case 'full-stack':
        setProjects(() => {
          return projectsData.sort(
            (a, b) =>
              Number(b.skills.includes('Full-Stack')) -
              Number(a.skills.includes('Full-Stack'))
          );
        });
        break;
      default:
        console.log('No sort');
        setProjects(projectsData);
        break;
    }
  };

  return (
    <ProjectsComponent projects={projects} setSort={(val) => setSortKey(val)} />
  );
};
