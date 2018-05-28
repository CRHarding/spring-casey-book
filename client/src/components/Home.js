import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from './Partials/Header';

import FriendServices from '../services/FriendServices';
import UserServices from '../services/UserServices';
import AllPosts from './Posts/AllPosts';

const styles = theme => ({
  root: {
    flexGrow: 1,
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
      friends: [],
      friendPosts: null,
      user: user,
      friendDataLoaded: false,
    };
  }

  componentDidMount() {
    let currentFriends = [];
    FriendServices.getCurrentUserFriendsById(this.state.user.id)
      .then(returnFriends => {
        returnFriends.data.map(friends => {
          if (friends) {
            if (friends.sentRequest === user.id) {
              UserServices.getOneUser(friends.receivedRequest)
                .then(friend => {
                  currentFriends = this.state.friends;
                  currentFriends.push(friend.data);
                  this.setState({
                    friends: currentFriends,
                    friendDataLoaded: true,
                  });
                })
                .catch(err => {
                  console.log(
                    'error in innerloop getcurrentfriendsbyid--->',
                    err,
                  );
                });
            } else {
              UserServices.getOneUser(friends.sentRequest)
                .then(friend => {
                  currentFriends = this.state.friends;
                  currentFriends.push(friend.data);
                  this.setState({
                    friends: currentFriends,
                    friendDataLoaded: true,
                  });
                })
                .catch(err => {
                  console.log(
                    'error in innerloop getcurrentfriendsbyid--->',
                    err,
                  );
                });
            }
          } else {
            return null;
          }
        });
      })
      .catch(err => {
        console.log('error in home--->', err);
      });
  }

  renderFriendPosts() {
    this.state.friends.map((friend, key) => {
      if (friend) {
        console.log(friend);
        return <AllPosts user={friend} key={key} />;
      } else {
        return null;
      }
    });
  }

  render() {
    //Hard coded user to be replaced by user auth down the road...

    const { classes } = this.props;
    console.log(this.state.friendDataLoaded);
    return (
      <Grid className={classes.root}>
        <Grid container spacing={24}>
          <Header user={user} />
        </Grid>
        <Grid container spacing={24}>
          {this.state.friendDataLoaded ? this.renderFriendPosts() : ''}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
