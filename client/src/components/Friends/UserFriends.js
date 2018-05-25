import React, { Component } from 'react';
import SingleFriend from './SingleFriend';

export default class UserFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends,
      user: this.props.user,
      userReceivedRequest: null,
      userSentRequest: null,
    };

    this.renderUserSentRequest = this.renderUserSentRequest.bind(this);
    this.renderUserReceivedRequest = this.renderUserReceivedRequest.bind(this);
  }

  componentDidMount() {
    let userReceivedRequest = this.state.friends.map(friend => {
      if (friend.sentRequest === this.state.user.id) {
        return friend;
      }
    });

    userReceivedRequest = userReceivedRequest.filter(friend => {
      if (friend) {
        return friend;
      }
    });

    this.setState({
      userReceivedRequest: userReceivedRequest,
    });

    let userSentRequest = this.state.friends.map(friend => {
      if (friend.receivedRequest === this.state.user.id) {
        return friend;
      }
    });

    userSentRequest = userSentRequest.filter(friend => {
      if (friend) {
        return friend;
      }
    });
    this.setState({
      userSentRequest: userSentRequest,
    });
  }

  renderUserReceivedRequest() {
    console.log(this.state.userReceivedRequest);
    if (this.state.userReceivedRequest) {
      return (
        <div>
          {this.state.userReceivedRequest.map((friend, key) => {
            return <SingleFriend friend={friend} user={this.state.user} key={key} />;
          })}
        </div>
      );
    }
  }

  renderUserSentRequest() {
    if (this.state.userSentRequest) {
      return (
        <div>
          {this.state.userSentRequest.map((friend, key) => {
            return <SingleFriend friend={friend} key={key} />;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderUserSentRequest()}
        {this.renderUserReceivedRequest()}
      </div>
    );
  }
}
