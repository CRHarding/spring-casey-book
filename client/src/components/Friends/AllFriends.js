import React, { Component } from 'react';

import SingleFriend from './SingleFriend';

import friendServices from '../../services/FriendServices';

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
    friendServices.getFriendsByStatus(1, 1).then(responsePendingFriends => {
      this.setState({
        pendingFriends: responsePendingFriends.data,
        pendingFriendsDataLoaded: true,
      });
    });

    friendServices.getFriendsByStatus(2, 1).then(responseCurrentFriends => {
      this.setState({
        currentFriends: responseCurrentFriends.data,
        currentFriendsDataLoaded: true,
      });
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
