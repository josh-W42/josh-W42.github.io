import React, { useState } from "react";
import projectsData from "./projectsData";
import ProjectModal from "../partials/ProjectModal";
import { makeStyles } from '@material-ui/core/styles';


import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    [theme.breakpoints.up('sm')]: {
      width: "80%",
    },
  },
  card: {
    width: "100%",
    background: "rgba(53, 58, 64, 0.7)",
    color: "white",
    minHeight: 350,
    margin: 10,
  },
  grid: {
    margin: "1px",
  },
  projectImg: {
    opacity: 0.8,
    width: "100%",
    height: 200,
  },
}));


const Projects = (props) => {
  const [projects, setProjects] = useState(projectsData);

  const classes = useStyles();

  const projectArray = projects.map((project, index) => {
    return (
      <Grid item xs={10} md={3} className={classes.grid} key={`project-${project.title}`}>
        <Fade in={true} style={{ transitionDelay: `${100 * index}ms` }}>
          <Card className={classes.card} elevation={3}>
            <CardMedia
              className={classes.projectImg}
              image={project.imageUrl}
              title={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body2" component="p">
                {project.short_description}
              </Typography>
            </CardContent>
            {/* <CardActionArea>
            </CardActionArea> */}
            <CardActions>
              <ProjectModal />
            </CardActions>
          </Card>
        </Fade>
      </Grid>
    );
  });


  return ( 
    <div id="projectsContainer" className={classes.root}>
      <Grid container justify="space-around">
        {projectArray}
      </Grid>
    </div>
  )
}

export default Projects;