import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import FriendServices from '../../services/FriendServices';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  button: {
    margin: theme.spacing.unit,
  },
});

class SingleFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.friend,
      user: this.props.user,
    };
  }

  handleFriendRequest(choice) {
    let changeFriend = this.state.friend;
    if (choice) {
      console.log('accept');
      changeFriend.status = 2;
    } else {
      console.log('reject');
      changeFriend.status = 3;
    }

    FriendServices.editFriend(changeFriend)
      .then(responseFriend => {
        console.log('friend updated--->', responseFriend.data);
        this.setState({
          friend: responseFriend.data,
        });
      })
      .catch(err => {
        console.log('error in updating friend---', err);
      });
  }

  render() {
    const friend = this.state.friend;
    const user = this.state.user;
    const { classes } = this.props;
    const didSend = user.id === friend.sentRequest;
    console.log(friend);
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography className={classes.title} color="textSecondary">
          Pending friend requests {didSend ? 'to' : 'from'}
        </Typography>
        <Typography>
          {didSend ? (
            <Link
              to={`/users/${friend.receivedRequest}`}
              style={{ textDecoration: 'none' }}
            >
              {friend.receivedRequestUserName}
            </Link>
          ) : (
            <Link
              to={`/users/${friend.sentRequest}`}
              style={{ textDecoration: 'none' }}
            >
              {friend.sentRequestUserName}
            </Link>
          )}
        </Typography>
        {didSend ? (
          <Grid>
            <Button
              variant="raised"
              size="small"
              onClick={() => this.handleFriendRequest(true)}
            >
              Accept
            </Button>
            <Button
              variant="raised"
              size="small"
              onClick={() => this.handleFriendRequest(false)}
            >
              Reject
            </Button>
          </Grid>
        ) : (
          ''
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(SingleFriend);
