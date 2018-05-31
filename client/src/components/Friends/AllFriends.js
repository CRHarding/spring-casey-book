import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SingleFriend from './SingleFriend';

import FriendServices from '../../services/FriendServices';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
});

class AllFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingFriends: null,
      pendingFriendsDataLoaded: false,
      user: this.props.user,
      friend: this.props.friend,
      isUser: this.props.isUser,
      currentFriends: null,
      currentFriendDataLoaded: false,
    };
  }

  componentDidMount() {
    let id;

    if (this.state.isUser) {
      id = this.state.user.id;
    } else {
      id = this.state.friend.id;
    }

    FriendServices.getFriendsByStatus(1, id).then(responsePendingFriends => {
      this.setState({
        pendingFriends: responsePendingFriends.data,
        pendingFriendsDataLoaded: true,
      });
    });

    FriendServices.getFriendsByStatus(2, id).then(responseCurrentFriends => {
      this.setState({
        currentFriends: responseCurrentFriends.data,
        currentFriendsDataLoaded: true,
      });
    });
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
          } else {
            return null;
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
          } else {
            return null;
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

  renderPendingFriends() {
    return this.state.pendingFriends.map((friend, key) => {
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
    });
  }

  renderCurrentFriends(classes) {
    console.log(this.state.currentFriends);
    let id;
    if (this.state.isUser) {
      id = this.state.user.id;
    } else {
      id = this.state.friend.id;
    }

    return this.state.currentFriends.map((friend, key) => {
      return (
        <Grid key={key}>
          <Paper key={key}>
            <Typography  key={key} className={classes.title} color="textSecondary">
              {friend.receivedRequest === id ?
                (
                  <Link
                  to={`/users/${friend.sentRequest}`}
                  style={{ textDecoration: 'none' }}
                   key={key}
                  >
                  {friend.sentRequestUserName}
                  </Link>
                ) : (
                  <Link
                  to={`/users/${friend.receivedRequest}`}
                  style={{ textDecoration: 'none' }}
                   key={key}
                >
                  {friend.receivedRequestUserName}
                </Link>
              )}
            </Typography>
          </Paper>
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs>
        {this.state.isUser ? (
          <div>
            {this.state.pendingFriendsDataLoaded
              ? this.renderPendingFriends()
              : ''}
          </div>
        ) : (
          <Grid item xs>
            {this.state.currentFriendsDataLoaded
              ? this.renderCurrentFriends(classes)
              : ''}
          </Grid>
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(AllFriends);
