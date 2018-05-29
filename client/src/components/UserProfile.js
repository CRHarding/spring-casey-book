import React, { Component } from 'react';

import AllPosts from './Posts/AllPosts';
import AllFriends from './Friends/AllFriends';
import Header from './Partials/Header';
import AddPost from './Posts/AddPost';
import UserServices from '../services/UserServices';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostForm: false,
      id: this.props.match.params.id,
      user: null,
      userDataLoaded: false,
    };
    this.handlePostFormButtonClick = this.handlePostFormButtonClick.bind(this);
  }

  componentDidMount() {
    UserServices.getOneUser(this.state.id)
      .then(user => {
        this.setState({
          user: user.data,
          userDataLoaded: true,
        });
      })
      .catch(err => {
        console.log('error in innerloop getcurrentfriendsbyid--->', err);
      });
  }

  handlePostFormButtonClick() {
    this.setState({
      showPostForm: !this.state.showPostForm,
    });
  }

  render() {
    const { classes } = this.props;
    const user = this.state.user;
    const post = {
      title: 'Enter your post Title',
      postText: 'Enter your post content',
    };

    return (
      <Grid className={classes.root}>
        {this.state.userDataLoaded ? (
          <Grid>
            <Grid container spacing={24}>
              <Header user={this.state.user} />
            </Grid>
            <Paper className={classes.paper} elevation={4}>
              <Typography className={classes.title} color="textSecondary">
                Full Name: {user.firstName} {user.lastName}
              </Typography>
              <Typography>About Me: {user.aboutMe}</Typography>
            </Paper>
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
                <AddPost user={this.state.user} post={post} />
              ) : (
                ''
              )}
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(UserProfile);
