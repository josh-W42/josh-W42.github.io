import {
  Dialog,
  IconButton,
  Link,
  Paper,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { Project } from '../../Projects/projectsData';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  project: Project;
  date: string;
  handleOpen: () => void;
  handleClose: () => void;
  isOpen: boolean;
}

export const ProjectModalComponent: FunctionComponent<Props> = ({
  project,
  date,
  handleClose,
  handleOpen,
  isOpen,
}) => {
  const skillArray = project.skills.map((skill) => {
    return (
      <li key={`skill-${skill}-for-${project.title}`}>
        <Chip
          label={skill}
          sx={{
            margin: 0.5,
            color: '#E5E5E5',
            borderColor: '#B7B7B7',
          }}
          variant="outlined"
        />
      </li>
    );
  });

  return (
    <div className="m-auto">
      <Button variant="outlined" color="inherit" onClick={handleOpen}>
        More Details
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <div
          style={{
            background: '#212121',
            color: '#E5E5E5',
          }}
          id="customized-dialog-title"
        >
          <Typography
            sx={{
              margin: 0,
              padding: 5,
            }}
            variant="h6"
          >
            {project.title} - {date}
          </Typography>
          <IconButton
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 2,
              top: 2,
              color: 'lightgrey',
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div
          style={{
            padding: '40px',
            background: '#212121',
            color: '#E5E5E5',
            textAlign: 'justify',
          }}
        >
          <Typography gutterBottom>{project.long_description}</Typography>
          <Typography variant="h6">Skills Used:</Typography>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 2,
              margin: 0,
              background: '#212121',
              color: '#E5E5E5',
            }}
            elevation={4}
            component="ul"
          >
            {skillArray}
          </Paper>
        </div>
        <div
          style={{
            margin: 0,
            padding: 2,
            background: '#212121',
            color: '#E5E5E5',
          }}
        >
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Button color="inherit" variant="outlined" sx={{ margin: 1 }}>
              Link to Github Repo
            </Button>
          </Link>
          <Link
            display={project.deployedUrl ? undefined : 'none'}
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Button color="inherit" variant="outlined" sx={{ margin: 1 }}>
              Link to Deployed App
            </Button>
          </Link>
        </div>
      </Dialog>
    </div>
  );
};
