import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';

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
  card: {
    width: "100%",
    background: "transparent",
    color: "#E5E5E5",
  },
  link: {
    color: "inherit",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Contact = (props) => {
  
  const classes = useStyles();

  return (
    <div
      id="ContactContainer"
      className="bg-transparent text-center position-absolute top-50 start-50 translate-middle"
    >
      <Card className={classes.card} elevation={3}>
        <Grid container justify="space-evenly">
          <Grid item>
            <Avatar
              aria-label="Joshua Wilson"
              src="https://res.cloudinary.com/dom5vocai/image/upload/v1615799074/j9n1larb3urczqoas1rr.jpg"
              className={classes.avatar}
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
              <EmailIcon /><span className="ms-1">wilson.jd022@gmail.com</span>
            </Typography>
          </Grid>
        </Grid>
        <hr></hr>
        <br />
        <CardActions>
          <Grid
            container
            justify="space-evenly"
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <Link className={classes.link} href="mailto: wilson.jd022@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button color="inherit" size="large">
                  <EmailIcon className="ms-1" />
                  <span className="ms-1">Send An Email</span>
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.link} href="https://github.com/josh-W42" target="_blank" rel="noopener noreferrer">
                <Button color="inherit" size="large">
                  <GitHubIcon className="ms-1" />{" "}
                  <span className="ms-1">Github</span>
                </Button>
              </Link>              
            </Grid>
            <Grid item>
              <Link className={classes.link} href="https://www.linkedin.com/in/jwilson42/" target="_blank" rel="noopener noreferrer">
                <Button color="inherit" size="large">
                  <LinkedInIcon className="ms-1" />{" "}
                  <span className="m-1">LinkedIn</span>
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.link} href="/assets/img/Design_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button color="inherit" size="large">
                  <GetAppIcon className="ms-1" />{" "}
                  <span className="ms-1">Resume</span>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default Contact;