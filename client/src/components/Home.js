import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Header from './Partials/Header';
import AllPosts from './Posts/AllPosts';
import AllFriends from './Friends/AllFriends';

import UserServices from '../services/UserServices';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  button: {
    margin: theme.spacing.unit,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      users: null,
      usersDataLoaded: false,
      usersChoice: false,
      isUser: true,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    UserServices.getAllUsers()
      .then(users => {
        this.setState({
          users: users.data,
          usersDataLoaded: true,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUserChoiceClick(user) {
    this.setState({
      user: user,
      usersChoice: !this.state.usersChoice,
      isLoggedIn: true,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <Grid
          container
          spacing={24}
          justify="space-between"
          alignItems="center"
        >
          <Header user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
        </Grid>
        <Grid container spacing={24}>
          {this.state.usersChoice ? (
            <AllFriends
              user={this.state.user}
              friend={this.state.user}
              isUser={this.state.isUser}
            />
          ) : (
            ''
          )}
          {this.state.usersChoice ? (
            <AllPosts
              user={this.state.user}
              friend={this.state.user}
              isUser={this.state.isUser}
            />
          ) : (
            ''
          )}
        </Grid>
        <Grid container spacing={24}>
          {this.state.usersDataLoaded
            ? this.state.users.map((user, key) => {
                return (
                  <Paper
                    className={classes.root}
                    elevation={4}
                    onClick={() => this.handleUserChoiceClick(user)}
                    key={key}
                  >
                    <Typography variant="headline" component="h3">
                      {user.userName}
                    </Typography>
                    <Typography component="p">{user.id}</Typography>
                  </Paper>
                );
              })
            : ''}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
