import { FunctionComponent, useState } from 'react';
import { ProjectModalComponent } from './component';
import { Project } from '../../Projects/projectsData';

interface Props {
  project: Project;
  modifiedDate: string;
}

export const ProjectModal: FunctionComponent<Props> = ({
  project,
  modifiedDate: date,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ProjectModalComponent
      handleClose={handleClose}
      handleOpen={handleOpen}
      isOpen={isOpen}
      project={project}
      date={date}
    />
  );
};
