import React, { Component } from 'react';
import ReceivedFriendRequests from './ReceivedFriendRequests';
import SentFriendRequests from './SentFriendRequests';
import friendServices from '../../services/FriendServices';
import Grid from '@material-ui/core/Grid';

export default class AllFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedRequest: null,
      sentRequest: null,
      receivedDataLoaded: false,
      sentDataLoaded: false,
      user: this.props.user,
    };
  }

  componentDidMount() {
    friendServices
      .getFriendsByReceivedRequest(this.state.user.id)
      .then(responseFriends => {
        this.setState({
          receivedRequest: responseFriends.data,
          receivedDataLoaded: true,
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
          sentDataLoaded: true,
        });
      })
      .catch(err => {
        console.log(
          'Error in componenet did mount userprofile friends--->',
          err,
        );
      });
  }

  renderSentFriends() {
    return (
      <SentFriendRequests
        sentRequest={this.state.sentRequest}
        user={this.state.user}
      />
    );
  }

  renderReceivedFriends() {
    return (
      <ReceivedFriendRequests
        receivedRequest={this.state.receivedRequest}
        user={this.state.user}
      />
    );
  }

  render() {
    return (
      <Grid item xs>
        {this.state.sentDataLoaded ? this.renderSentFriends() : ''}
        {this.state.receivedDataLoaded ? this.renderReceivedFriends() : ''}
      </Grid>
    );
  }
}
