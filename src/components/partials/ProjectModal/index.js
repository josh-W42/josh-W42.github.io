import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';


const styles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content: {
    padding: theme.spacing(2),
    background: "#212121",
    color: "#E5E5E5",
  },
  actions: {
    margin: 0,
    padding: theme.spacing(1),
    background: "#212121",
    color: "#E5E5E5",
  },
  chipList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    background: "#212121",
    color: "#E5E5E5",
  },
  dialog: {
    background: "#212121",
    color: "#E5E5E5",
  },
  chip: {
    margin: theme.spacing(0.5),
    color: "#E5E5E5",
    borderColor: "#B7B7B7",
  },
}));

const ProjectModal = (props) => {
  const [open, setOpen] = useState(false);

  const classes = styles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const skillArray = props.project.skills.map((skill) => {
    return (
      <li key={`skill-${skill}-for-${props.project.title}`}>
        <Chip label={skill} className={classes.chip} variant="outlined" />
      </li>
    );
  });

  return (
    <div className="m-auto">
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        More Details
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div className={classes.dialog} id="customized-dialog-title">
          <Typography className={classes.root} variant="h6">{props.project.title} - {props.date}</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.content}>
          <Typography gutterBottom>
            {props.project.long_description}
          </Typography>
          <Typography variant="h6">
            Skills Used:
          </Typography>
          <Paper className={classes.chipList} elevation={4} component="ul">
            {skillArray}
          </Paper>
        </div>
        <div className={classes.actions}>
          <Link href={props.project.githubUrl} target="_blank" rel="noopener noreferrer" color="inherit">
            <Button color="inherit">
              Link to Github Repo
            </Button>
          </Link>
          <Link href={props.project.deployedUrl} target="_blank" rel="noopener noreferrer" color="inherit">
            <Button color="inherit">
              Link to Deployed App
            </Button>
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

export default ProjectModal;