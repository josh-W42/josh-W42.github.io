import { useEffect, useState } from "react";
import projectsData from "./projectsData";
import ProjectModal from "../partials/ProjectModal";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    color: "#E5E5E5",
    [theme.breakpoints.up('sm')]: {
      width: "80%",
    },
  },
  card: {
    width: "100%",
    background: "rgba(53, 58, 64, 0.7)",
    color: "#E5E5E5",
    minHeight: 550,
    margin: 10,
  },
  grid: {
    margin: "1px",
  },
  title: {
    fontWeight: 'bold',
  },
  projectImg: {
    opacity: 0.8,
    width: "100%",
    height: 200,
  },
  chip: {
    margin: theme.spacing(0.5),
    color: "#E5E5E5",
    borderColor: "#B7B7B7",
  },
  chipList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    background: "inherit",
    color: "#E5E5E5",
  },
}));


const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [sortKey, setSortKey] = useState('date');

  const classes = useStyles();

  useEffect(() => {
    sortProjects(sortKey);
  }, [sortKey]);

  const sortProjects = (key) => {
    switch (key) {
      case 'date':
        setProjects((projects) => {
          return projectsData.sort((a, b) => b.date.valueOf() - a.date.valueOf());
        });
        break;
      case 'front-end':
        setProjects((projects) => {
          return projectsData.sort((a, b) => b.skills.includes('Front-End') - a.skills.includes('Front-End'));
        });
        break;
      case 'full-stack':
        setProjects((projects) => {
          return projectsData.sort((a, b) => b.skills.includes('Full-Stack') - a.skills.includes('Full-Stack'));
        });
        break;
      default:
        console.log('No sort');
        setProjects(projectsData);
        break;
    }
  }

  const projectArray = projects.map((project, index) => {
    const formattedDate = () => {
      let date = project.date.toDateString();
      date = date.split(" ");
      return `${date[1]} ${date[3]}`;
    }

    const date = formattedDate();

    const skillArray = project.topSkills.map((skill) => {
      return (
        <li key={`top-skill-${skill}-for-${project.title}`}>
          <Chip label={skill} className={classes.chip} variant="outlined" />
        </li>
      );
    });

    return (
      <Grid item xs={10} md={3} className={classes.grid} key={`project-${project.title}`}>
        <Zoom in={true} style={{ transitionDelay: `${100 * index}ms` }}>
          <Card className={classes.card} elevation={3}>
            <CardMedia
              className={classes.projectImg}
              image={project.imageUrl}
              title={project.title}
            />
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="subtitle1" component="p" >
                {date}
              </Typography>
              <Typography variant="body2" component="p">
                {project.short_description}
              </Typography>
              <hr></hr>
              <Typography variant="h6" component="p">
                Top Skills:
              </Typography>
              <Paper className={classes.chipList} elevation={0} component="ul">
                {skillArray}
              </Paper>
            </CardContent>
            <CardActions>
              <ProjectModal date={date} project={project} />
            </CardActions>
          </Card>
        </Zoom>
      </Grid>
    );
  });


  return ( 
    <div id="ProjectsContainer" className={classes.root}>
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
      <Grid container justify="center">
        {projectArray}
      </Grid>
    </div>
  )
}

export default Projects;