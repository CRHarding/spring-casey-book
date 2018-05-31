import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SingleFriend from './SingleFriend';

import FriendServices from '../../services/FriendServices';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
});

export default class AllFriends extends Component {
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
    console.log(this.state.pendingFriends);
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

  renderCurrentFriends() {
    console.log(this.state.currentFriends);
    const { classes } = this.props;
    return this.state.currentFriends.map((friend, key) => {
      return (
        <Grid>
          <Paper key={key}>
            <Typography className={classes.title} color="textSecondary">
              <Link
                to={`/users/${friend.id}`}
                style={{ textDecoration: 'none' }}
              >
                {friend.userName}
              </Link>
            </Typography>
          </Paper>
        </Grid>
      );
    });
  }

  render() {
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
              ? this.renderCurrentFriends()
              : ''}
          </Grid>
        )}
      </Grid>
    );
  }
}
