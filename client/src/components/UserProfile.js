import React, { Component } from 'react';

import AllPosts from './Posts/AllPosts';
import AllFriends from './Friends/AllFriends';
import Header from './Partials/Header';
import AddPost from './Posts/AddPost';

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
      user: this.props.user,
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
    console.log(user);
    const post = {
      title: 'Enter your post Title',
      postText: 'Enter your post content',
    };

    return (
      <Grid className={classes.root}>
        <Grid container spacing={24}>
          <Header user={this.state.user} />
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
          {this.state.showPostForm ? 'Cancel' : 'Post'}
        </Button>
        <Grid container spacing={24}>
          {this.state.showPostForm ? (
            <AddPost
              user={this.state.user}
              post={post}
            />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(UserProfile);
