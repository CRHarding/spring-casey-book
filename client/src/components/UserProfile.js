import React, { Component } from 'react';

import AllPosts from './Posts/AllPosts';
import AllFriends from './Friends/AllFriends';
import Header from './Partials/Header';
import PostForm from './Partials/PostForm';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostForm: false,
      user: {
        userName: 'CRHarding',
        id: 1,
      },
    };
    this.handlePostFormButtonClick = this.handlePostFormButtonClick.bind(this);
  }

  handlePostFormButtonClick() {
    this.setState({
      showPostForm: !this.state.showPostForm,
    });
  }

  render() {
    const { classes } = this.props;
    const user = this.state.user;

    return (
      <Grid className={classes.root}>
        <Grid container spacing={24}>
          <Header user={user} />
        </Grid>
        <Grid
          container
          spacing={24}
          justify="space-between"
          alignItems="center"
        >
          <AllFriends user={user} />
          <AllPosts user={user} />
        </Grid>
        <Button
          type="submit"
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={this.handlePostFormButtonClick}
        >
          { this.state.showPostForm ? 'Cancel' : 'Post' }
        </Button>
        <Grid container spacing={24}>
          {this.state.showPostForm ? <PostForm user={user} /> : ''}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(UserProfile);
