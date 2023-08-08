import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  Typography,
  Zoom,
  Paper,
  Chip,
  CardContent,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { ProjectModal } from '../partials/';
import { Project } from './projectsData';

interface Props {
  projects: Project[];
  setSort: (val: string) => void;
}

export const ProjectsComponent: FunctionComponent<Props> = ({ projects }) => {
  const projectArray = projects.map((project, index) => {
    const formattedDate = () => {
      const date = project.date.toDateString();
      const date_split = date.split(' ');
      return `${date_split[1]} ${date_split[3]}`;
    };

    const date = formattedDate();

    const skillArray = project.topSkills.map((skill) => {
      return (
        <li key={`top-skill-${skill}-for-${project.title}`}>
          <Chip
            label={skill}
            sx={{
              margin: '0',
              color: '#E5E5E5',
              borderColor: '#B7B7B7',
            }}
            variant="outlined"
          />
        </li>
      );
    });

    return (
      <Grid
        item
        xs={10}
        md={3}
        sx={{
          margin: '1px',
        }}
        key={`project-${project.title}`}
      >
        <Zoom in={true} style={{ transitionDelay: `${100 * index}ms` }}>
          <Card
            sx={{
              width: '100%',
              background: 'rgba(53, 58, 64, 0.7)',
              color: '#E5E5E5',
              minHeight: 550,
              margin: 1,
            }}
            elevation={3}
          >
            <CardMedia
              sx={{
                opacity: 0.8,
                width: '100%',
                height: 200,
              }}
              image={project.imageUrl}
              title={project.title}
            />
            <CardContent>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {project.title}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {date}
              </Typography>
              <Typography variant="body2" component="p">
                {project.short_description}
              </Typography>
              <hr></hr>
              <Typography variant="h6" component="p">
                Top Skills:
              </Typography>
              <Paper
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  padding: '5px',
                  margin: 0,
                  background: 'inherit',
                  color: '#E5E5E5',
                }}
                elevation={0}
                component="ul"
              >
                {skillArray}
              </Paper>
            </CardContent>
            <CardActions>
              <ProjectModal modifiedDate={date} project={project} />
            </CardActions>
          </Card>
        </Zoom>
      </Grid>
    );
  });

  return (
    <div
      id="ProjectsContainer"
      style={{
        width: '100%',
        margin: 'auto',
        color: '#E5E5E5',
        // [theme.breakpoints.up('sm')]: {
        //   width: '80%',
        // },
      }}
    >
      {/* <Grid container justify="space-evenly">
        <Grid item>
          <Button size="small" variant="outlined" onClick={() => } color="inherit">Sort By Date</Button>
        </Grid>
        <Grid item>
          <Button size="small" variant="outlined" color="inherit">Full Stack First</Button>
        </Grid>
        <Grid item>
          <Button size="small" variant="outlined" color="inherit">Front-End First</Button>
        </Grid>
      </Grid> */}
      <br />
      <Grid container justifyContent="center">
        {projectArray}
      </Grid>
    </div>
  );
};
