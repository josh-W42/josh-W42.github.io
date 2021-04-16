import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Typist from 'react-typist';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const names = [
  "Full Stack Web Developer",
  "Space Enthusiast",
  "General Assembly Bootcamp Grad",
  "Long Distance Runner",
  "Former UCLA Bruin",
  "Avid Gamer",
  "Traveler",
];

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '1.25rem',
    color: '#E5E5E5',
    fontWeight: "bold",
    textShadow: "1px 1px white",
    [theme.breakpoints.up('sm')]: {
      fontSize: "2rem",
    },
  },
}));

const Home = () => {

  const [displayNames, setDisplayNames] = useState(names);
  const [typing, setTyping] = useState(false);

  const classes = useStyles();

  const getNames = displayNames.map((name, index) => {
    return (
      <div key={`${name}-${index}`}>
        <span>{name}</span>
        <Typist.Backspace count={name.length} delay={2000} />
      </div>
    );
  });

  const reset = () => {
    setTyping((prev) => !prev);
    setTimeout(() => {
      setTyping((prev) => !prev);
    }, 300);
  }

  return (
    <div id="HomeContainer" className="bg-transparent text-center position-absolute top-50 start-50 translate-middle">
      <Grid container justify="space-evenly" direction="column">
        <Grid item>
          <Image src="https://res.cloudinary.com/dom5vocai/image/upload/v1615930252/new_logo_bwgzbl.png" rounded />
        </Grid>
        <Grid item>
          <Typist onTypingDone={() => setTyping((prev) => !prev)}>
            <Typist.Delay ms={100} />
            <Typography className={classes.text} variant="h3" component="h1">
              Hi, my name is Joshua Wilson
            </Typography>
            <Typist.Delay ms={500} />
            <br />
            <Typography className={classes.text} variant="h4" component="span">
              I'm a...
            </Typography>
          </Typist>
          { 
            typing ? (
              <Typist onTypingDone={reset}>
                <Typography className={classes.text} variant="h4" component="span">
                  {getNames}
                </Typography>
              </Typist>
            ):(<></>)
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default Home