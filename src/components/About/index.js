import Image from 'react-bootstrap/Image';
import './about.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  card: {
    background: "transparent",
    color: "white",
    margin: "0 auto",
    height: "fit-content",
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      width: "75%",
    },
  },
  titles: {
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.25rem",
  },
  media: {
    width: "100%",
    borderRadius: "50%",
  },
}));

const softSkills = [
  "Perseverance",
  "Leadership",
  "Teamwork",
  "Creativity",
  "Problem Solving",
  "Empathy",
];

const csSkills = [
  "Python",
  "Data Structures",
  "Algorithms",
  "Object Oriented Programming",
  "Object Relational Mappers (ORMs)",
  "Object Document Mappers (ODMs)",
];

const webDevSkills = [
  "HTML5 / CSS3",
  "JavaScript",
  "Bootstrap.js",
  "Material-UI",
  "React.js",
  "Node.js",
  "Express.js",
  "Django",
  "MongoDB",
  "PostgreSQL",
];

const About = (props) => {

  const classes = useStyles();

  const webDevArray = () => {
    return webDevSkills.map((skill, index) => {
      return (
        <ListItem button key={`webSkill-${index}`}>
          {skill}
        </ListItem>
      );
    });
  }

  const csSkillArray = () => {
    return csSkills.map((skill, index) => {
      return (
        <ListItem button key={`csSkill-${index}`}>
          {skill}
        </ListItem>
      );
    });
  }

  const softSkillArray = () => {
    return softSkills.map((skill, index) => {
      return (
        <ListItem button key={`softSkill-${index}`}>
          {skill}
        </ListItem>
      );
    });
  }

  return (
    <div
      id="AboutContainer"
      className="bg-transparent position-absolute start-50 translate-middle"
    >
      <Card className={classes.card} elevation={3}>
        <CardContent className="text-center">
          <Grid container justify="center" alignItems="center" direction="row">
            <Grid item xs={4} md={2}>
              <Image
                className={classes.media}
                alt="Joshua Wilson picture"
                src="https://res.cloudinary.com/dom5vocai/image/upload/v1615799074/j9n1larb3urczqoas1rr.jpg"
              />
            </Grid>
            <Grid item xs md={6}>
              <Typography className={classes.titles} component="h1">
                Joshua Wilson
              </Typography>
              <Typography className={classes.titles} component="h2">
                Full Stack Web Developer
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <hr></hr>
          <Typography className={classes.titles} variant="h5" component="h3">
            About Me:
          </Typography>
          <br />
          <Typography
            className={classes.paragraph}
            variant="body2"
            component="p"
          >
            I’m a full stack web developer who enjoys turning complex problems
            into efficient solutions using javascript and python. After spending
            three years in customer service and several years studying
            Linguistics in college, I’ve developed my skills around conducting
            detailed oriented research and adapting to many situations. I’m most
            excited about turning abstract ideas into tangible products and
            creating experiences that positively impact users.
          </Typography>
          <br />
          <hr></hr>
          <Typography className={classes.titles} variant="h5" component="h3">
            Technical Skills:
          </Typography>
          <br />
          <Grid container justify="space-evenly" alignItems="flex-start" alignContent="space-around">
            <Grid item xs>
              <Typography className={classes.titles} variant="h5" component="h4">
                Web Development:
              </Typography>
              <List dense>
                {webDevArray()}
              </List>
            </Grid>
            <Grid item xs>
              <Typography className={classes.titles} variant="h5" component="h4">
                Computer Science:
              </Typography>
              <List dense>
                {csSkillArray()}
              </List>
            </Grid>
            <Grid item xs>
              <Typography className={classes.titles} variant="h5" component="h4">
                Soft Skills:
              </Typography>
              <List dense>
                {softSkillArray()}
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default About