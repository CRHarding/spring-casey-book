import React, { Component } from 'react';
import SingleFriend from './SingleFriend';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

function getStyles() {
  const styles = theme => ({
    card: {
      minWidth: 275,
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
  });
  return styles;
}

class UserFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedRequest: this.props.receivedRequest,
      sentRequest: this.props.sentRequest,
      user: this.props.user,
    };

    this.renderUserSentRequest = this.renderUserSentRequest.bind(this);
    this.renderUserReceivedRequest = this.renderUserReceivedRequest.bind(this);
  }

  getFlex() {
    return 'flexGrow: 1';
  }

  getCard() {
    return 'minWidth: 275';
  }

  renderUserReceivedRequest() {
    if (this.state.receivedRequest) {
      return (
        <Card className={this.getCard()}>
          {this.state.receivedRequest.map((friend, key) => {
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
          })}
        </Card>
      );
    }
  }

  renderUserSentRequest() {
    console.log(this.state.sentRequest);
    if (this.state.sentRequest) {
      return (
        <Card className={this.getCard()}>
          {this.state.sentRequest.map((friend, key) => {
            if (friend) {
              return <SingleFriend friend={friend} key={key} user={this.state.user}/>;
            } else {
              return null;
            }
          })}
        </Card>
      );
    }
  }

  render() {
    return (
      <Grid item xs>
        {this.renderUserSentRequest()}
        {this.renderUserReceivedRequest()}
      </Grid>
    );
  }
}

export default withStyles(getStyles())(UserFriends);
