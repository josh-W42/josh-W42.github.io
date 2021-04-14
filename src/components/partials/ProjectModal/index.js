import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
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
  },
  actions: {
    margin: 0,
    padding: theme.spacing(1),
  },
  chipList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
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

  const skillArray = props.project.skills.map((skill, index) => {
    return (
      <li key={`skill-${skill}-for-${props.project.title}`}>
        <Chip label={skill} className={classes.chip} variant="outlined" />
      </li>
    );
  });

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        More Details
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div id="customized-dialog-title">
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
            <Button color="primary">
              Link to Github Repo
            </Button>
          </Link>
          <Link href={props.project.deployedUrl} target="_blank" rel="noopener noreferrer" color="inherit">
            <Button color="primary">
              Link to Deployed App
            </Button>
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

export default ProjectModal;