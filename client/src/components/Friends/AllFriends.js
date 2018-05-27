import React, { Component } from 'react';
import UserFriends from './UserFriends';
import friendServices from '../../services/FriendServices';

export default class AllFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedRequest: null,
      sentRequest: null,
      friendDataLoaded: false,
      user: this.props.user,
    };
  }

  componentDidMount() {
    friendServices
      .getFriendsByReceivedRequest(this.state.user.id)
      .then(responseFriends => {
        this.setState({
          receivedRequest: responseFriends.data,
          friendDataLoaded: true,
        });
      })
      .catch(err => {
        console.log(
          'Error in componenet did mount userprofile friends--->',
          err,
        );
      });

    friendServices
      .getFriendsBySentRequest(this.state.user.id)
      .then(responseFriends => {
        this.setState({
          sentRequest: responseFriends.data,
          friendDataLoaded: true,
        });
      })
      .catch(err => {
        console.log(
          'Error in componenet did mount userprofile friends--->',
          err,
        );
      });
  }

  renderUserFriends() {
    return (
      <UserFriends
        receivedRequest={this.state.receivedRequest}
        sentRequest={this.state.sentRequest}
        user={this.state.user}
      />
    );
  }

  render() {
    return (
      <div>{this.state.friendDataLoaded ? this.renderUserFriends() : ''}</div>
    );
  }
}
