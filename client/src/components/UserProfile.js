import React from 'react';

import AllPosts from './Posts/AllPosts';
import AllFriends from './Friends/AllFriends';
import Header from './Partials/Header';
import PostForm from './Partials/PostForm';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const user = {
  userName: 'CRHarding',
  id: 1,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const UserProfile = (props) => {
  const { classes } = props;
  return (
    <Grid className={classes.root}>
      <Grid container spacing={24}>
        <Header user={user}/>
      </Grid>
      <Grid container spacing={24} justify='space-between' alignItems='center'>
        <AllFriends user={user}/>
        <AllPosts user={user}/>
      </Grid>
      <Grid container spacing={24}>
        <PostForm user={user}/>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(UserProfile);
