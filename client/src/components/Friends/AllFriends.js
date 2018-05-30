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
    FriendServices.getFriendsByStatus(1, this.state.user.id).then(
      responsePendingFriends => {
        this.setState({
          pendingFriends: responsePendingFriends.data,
          pendingFriendsDataLoaded: true,
        });
      },
    );

    FriendServices.getFriendsByStatus(2, this.state.user.id).then(
      responseCurrentFriends => {
        this.setState({
          currentFriends: responseCurrentFriends.data,
          currentFriendsDataLoaded: true,
        });
      },
    );
  }

  handleFriendAccept(friend) {
    let changeFriend = friend;
    console.log('accept');
    changeFriend.status = 2;

    FriendServices.editFriend(changeFriend)
      .then(responseFriend => {
        console.log('friend updated--->', responseFriend.data);
        let pendingFriends = this.state.pendingFriends;
        let currentFriends = this.state.currentFriends;

        pendingFriends = pendingFriends.filter(removeFriend => {
          if (friend !== removeFriend) {
            return removeFriend;
          }
        });

        currentFriends.push(friend);

        this.setState({
          pendingFriends: pendingFriends,
          currentFriends: currentFriends,
        });
      })
      .catch(err => {
        console.log('error in updating friend---', err);
      });
  }

  handleFriendReject(friend) {
    let changeFriend = friend;
    console.log('reject');
    changeFriend.status = 3;

    FriendServices.editFriend(changeFriend)
      .then(responseFriend => {
        console.log('friend updated--->', responseFriend.data);
        let pendingFriends = this.state.pendingFriends;

        pendingFriends = pendingFriends.filter(removeFriend => {
          if (friend !== removeFriend) {
            return removeFriend;
          }
        });

        this.setState({
          pendingFriends: pendingFriends,
        });
      })
      .catch(err => {
        console.log('error in updating friend---', err);
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
                    handleFriendAccept={() => this.handleFriendAccept(friend)}
                    handleFriendReject={() => this.handleFriendReject(friend)}
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
