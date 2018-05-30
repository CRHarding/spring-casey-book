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

const user = {
  userName: 'CRHarding',
  id: 1,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: user,
      users: null,
      usersDataLoaded: false,
      usersChoice: false,
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
    });
  }

  render() {
    //Hard coded user to be replaced by user auth down the road...
    const { classes } = this.props;

    return (
      <Grid className={classes.root}>
        <Grid
          container
          spacing={24}
          justify="space-between"
          alignItems="center"
        >
          <Header user={this.state.user} />
        </Grid>
        <Grid container spacing={24}>
          {this.state.usersChoice ? <AllFriends user={this.state.user} /> : '' }
          {this.state.usersChoice ? <AllPosts user={this.state.user} /> : '' }
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
