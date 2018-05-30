import React, { Component } from 'react';

import SingleFriend from './SingleFriend';

import FriendServices from '../../services/FriendServices';

import Grid from '@material-ui/core/Grid';

export default class AllFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingFriends: null,
      pendingFriendsDataLoaded: false,
      user: this.props.user,
      currentFriends: null,
      currentFriendDataLoaded: false,
    };
  }

  componentDidMount() {
    FriendServices.getFriendsByStatus(1, 1).then(responsePendingFriends => {
      this.setState({
        pendingFriends: responsePendingFriends.data,
        pendingFriendsDataLoaded: true,
      });
    });

    FriendServices.getFriendsByStatus(2, 1).then(responseCurrentFriends => {
      this.setState({
        currentFriends: responseCurrentFriends.data,
        currentFriendsDataLoaded: true,
      });
    });
  }

  handleFriendRequest() {
    console.log(this);
    let changeFriend = this.state.friend;
    if (this.choice) {
      console.log('accept');
      changeFriend.status = 2;
    } else {
      console.log('reject');
      changeFriend.status = 3;
    }

    FriendServices.editFriend(changeFriend)
      .then(responseFriend => {
        console.log('friend updated--->', responseFriend.data);
        this.setState({
          friend: responseFriend.data,
        });
      })
      .catch(err => {
        console.log('error in updating friend---', err);
      });

    let pendingFriends = this.state.pendingFriends;
    let currentFriends = this.state.currentFriends;

    let index = pendingFriends.indexOf(this.friend);
    pendingFriends = pendingFriends
      .slice(0, index)
      .concat(pendingFriends.slice(index + 1, pendingFriends.length));

    currentFriends.push(this.friend);

    this.setState({
      pendingFriends: pendingFriends,
      currentFriends: currentFriends,
    });
  }

  renderCurrentFriends() {
    this.state.currentFriends.map((friend, key) => {
      return <li key={key}>{friend.userName}</li>;
    });
  }

  render() {
    return (
      <Grid item xs>
        {this.state.pendingFriendsDataLoaded
          ? this.state.pendingFriends.map((friend, key) => {
              if (friend) {
                return (
                  <SingleFriend
                    friend={friend}
                    user={this.state.user}
                    key={key}
                    handleFriendRequest={(choice, friend) =>
                      this.handleFriendRequest()
                    }
                  />
                );
              } else {
                return null;
              }
            })
          : ''}
        {this.state.currentFriendsDataLoaded ? this.renderCurrentFriends() : ''}
      </Grid>
    );
  }
}
