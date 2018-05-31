import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;

  let isFriend = false;

  if (props.friend) {
    isFriend = true;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          <Link to="/" style={{ textDecoration: 'none' }}>Casey Book</Link>
        </Typography>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {props.isLoggedIn ? (
            isFriend ? props.friend.userName : props.user.userName
          ) : 'Welcome!'}

        </Typography>
        <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
