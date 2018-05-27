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

class ReceivedFriendRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedRequest: this.props.receivedRequest,
      user: this.props.user,
    };
  }

  getFlex() {
    return 'flexGrow: 1';
  }

  getCard() {
    return 'minWidth: 275';
  }

  render() {
    if (this.state.receivedRequest) {
      return (
        <Grid item xs>
          {this.state.receivedRequest.map((friend, key) => {
            if (friend) {
              return (
                <Card className={this.getCard()} key={key}>
                  <SingleFriend
                    friend={friend}
                    user={this.state.user}
                    key={key}
                  />
                </Card>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      );
    }
  }

}

export default withStyles(getStyles())(ReceivedFriendRequests);
