import { FunctionComponent } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GetAppIcon from '@mui/icons-material/GetApp';
import {
  Grid,
  Typography,
  Card,
  CardActions,
  Avatar,
  Button,
  Link,
} from '@mui/material';

export const Contact: FunctionComponent = () => {
  return (
    <div
      id="ContactContainer"
      className="bg-transparent text-center position-absolute top-50 start-50 translate-middle"
    >
      <Card
        sx={{
          width: '100%',
          background: 'transparent',
          color: '#E5E5E5',
          fontSize: '1.25rem',
          fontWeight: 'bold',
        }}
        elevation={3}
      >
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <Avatar
              aria-label="Joshua Wilson"
              src="https://res.cloudinary.com/dom5vocai/image/upload/v1615799074/j9n1larb3urczqoas1rr.jpg"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50',
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h1">
              Joshua Wilson
            </Typography>
            <Typography variant="h6" component="h2">
              Los Angeles, CA
            </Typography>
            <Typography variant="h6" component="h2">
              <EmailIcon />
              <span className="ms-1">wilson.jd022@gmail.com</span>
            </Typography>
          </Grid>
        </Grid>
        <hr></hr>
        <br />
        <CardActions>
          <Grid
            container
            justifyContent="space-evenly"
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <Link
                sx={{
                  color: 'inherit',
                }}
                href="mailto: wilson.jd022@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="inherit" size="large">
                  <EmailIcon className="ms-1" />
                  <span className="ms-1">Send An Email</span>
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                sx={{
                  color: 'inherit',
                }}
                href="https://github.com/josh-W42"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="inherit" size="large">
                  <GitHubIcon className="ms-1" />{' '}
                  <span className="ms-1">Github</span>
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                sx={{
                  color: 'inherit',
                }}
                href="https://www.linkedin.com/in/jwilson42/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="inherit" size="large">
                  <LinkedInIcon className="ms-1" />{' '}
                  <span className="m-1">LinkedIn</span>
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                sx={{
                  color: 'inherit',
                }}
                href="/assets/img/Resume_Joshua_Wilson.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="inherit" size="large">
                  <GetAppIcon className="ms-1" />{' '}
                  <span className="ms-1">Resume</span>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};
