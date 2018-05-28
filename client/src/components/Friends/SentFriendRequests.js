import React, { Component } from 'react';
import SingleFriend from './SingleFriend';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
});

class SentFriendRequests extends Component {
  state = {
    sentRequest: this.props.sentRequest,
    user: this.props.user,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs>
        {this.state.sentRequest.map((friend, key) => {
          if (friend) {
            return (
                <SingleFriend friend={friend} key={key} user={this.state.user} />
              );
          } else {
            return null;
          }
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(SentFriendRequests);
