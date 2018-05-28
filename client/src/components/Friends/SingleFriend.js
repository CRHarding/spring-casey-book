import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
});

const SingleFriend = props => {
  const friend = props.friend;
  const user = props.user;
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography className={classes.title} color="textSecondary">
        Pending friend requests {user.id === friend.sentRequest ? 'to' : 'from' }
      </Typography>
      <Typography>
        {friend.receivedRequestUserName}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(SingleFriend);
