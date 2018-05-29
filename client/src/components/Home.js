import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      friendsData: [],
      friendPosts: null,
      user: user,
      friendDataLoaded: false,
      allFriendDataLoaded: false,
    };
  }

  componentDidMount() {
    FriendServices.getCurrentUserFriendsById(this.state.user.id)
      .then(returnFriends => {
        this.setState({
          friends: returnFriends.data,
          friendDataLoaded: true,
        });
      })
      .catch(err => {
        console.log('error in home--->', err);
      });
  }

  getListOfFriends() {
    let currentFriends = [];
    const friendList = this.state.friends;
    for (let i = 0; i < friendList.length; i++) {
      if (friendList[i].sentRequest === user.id) {
        UserServices.getOneUser(friendList[i].receivedRequest)
          .then(friend => {
            currentFriends.push(friend.data);
            this.setState({
              friendsData: currentFriends,
              allFriendDataLoaded: true,
              friendDataLoaded: false,
            });
          })
          .catch(err => {
            console.log('error in innerloop getcurrentfriendsbyid--->', err);
          });
      } else {
        UserServices.getOneUser(friendList[i].sentRequest)
          .then(friend => {
            currentFriends.push(friend.data);
            this.setState({
              friendsData: currentFriends,
              allFriendDataLoaded: true,
              friendDataLoaded: false,
            });
          })
          .catch(err => {
            console.log('error in innerloop getcurrentfriendsbyid--->', err);
          });
      }
    }
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
          <Header user={user} />
        </Grid>
        <Grid container spacing={24}>
          {this.state.friendDataLoaded ? this.getListOfFriends() : ''}
          {this.state.allFriendDataLoaded
            ? this.state.friendsData.map((friend, key) => {
                return <AllPosts user={friend} key={key} />;
              })
            : ''}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
