import React, { Component } from 'react';
import UserFriends from './UserFriends';
import friendServices from '../../services/FriendServices';

export default class AllFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: null,
      friendDataLoaded: false,
      user: this.props.user,
    };
  }

  componentDidMount() {
    friendServices
      .getAllFriends()
      .then(responseFriends => {
        this.setState({
          friends: responseFriends.data,
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
    const friends = this.state.friends;
    console.log(friends);
    return <UserFriends friends={friends} user={this.state.user}/>;
  }

  render() {
    return <div>{this.state.friendDataLoaded ? this.renderUserFriends() : ''}</div>;
  }
}
