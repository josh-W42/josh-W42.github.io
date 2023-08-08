import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

interface Props {
  webSkills: string[];
  csSkills: string[];
}

export const AboutComponent: FunctionComponent<Props> = ({
  webSkills,
  csSkills,
}) => {
  const webDevArray = () => {
    return webSkills.map((skill, index) => {
      return (
        <ListItem button key={`webSkill-${index}`}>
          {skill}
        </ListItem>
      );
    });
  };

  const csSkillArray = () => {
    return csSkills.map((skill, index) => {
      return (
        <ListItem button key={`csSkill-${index}`}>
          {skill}
        </ListItem>
      );
    });
  };

  return (
    <div
      id="AboutContainer"
      className="bg-transparent position-absolute start-50 translate-middle"
    >
      <Card
        sx={{
          background: 'transparent',
          width: '100%',
          height: 'fit-content',
          margin: '0 auto',
          color: '#E5E5E5',
        }}
        elevation={3}
      >
        <CardContent className="text-center">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Grid item xs={4} md={2}>
              <CardMedia
                component={'img'}
                sx={{ width: '100%', borderRadius: '50%' }}
                // alt="Joshua Wilson picture"
                image="https://res.cloudinary.com/dom5vocai/image/upload/v1615799074/j9n1larb3urczqoas1rr.jpg"
              />
            </Grid>
            <Grid item xs md={6}>
              <Typography sx={{ fontWeight: 'bold' }} component="h1">
                Joshua Wilson
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }} component="h2">
                Full Stack Web Developer
              </Typography>
              <br />
              <Link
                to="/assets/img/Design_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <Button variant="outlined" color="inherit">
                  <GetAppIcon /> Resume
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <hr></hr>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="h3">
            About Me:
          </Typography>
          <br />
          <Typography
            sx={{ fontSize: '1.25rem' }}
            variant="body2"
            component="p"
          >
            I’m a software engineer who enjoys turning complex problems into
            efficient solutions using tools like, Typescript, React.js, and
            Python. My primary experience is in full stack web development,
            however, I'm always open to learning new tools to solve software
            challenges.
          </Typography>
          <br />
          <hr></hr>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="h3">
            Technical Skills:
          </Typography>
          <br />
          <Grid
            container
            justifyContent={'space-evenly'}
            alignItems={'flex-start'}
            alignContent={'space-around'}
          >
            <Grid item xs>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="h5"
                component="h4"
              >
                Web Development:
              </Typography>
              <List dense>{webDevArray()}</List>
            </Grid>
            <Grid item xs>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="h5"
                component="h4"
              >
                Computer Science:
              </Typography>
              <List dense>{csSkillArray()}</List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
